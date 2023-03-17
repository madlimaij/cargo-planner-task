import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { fetchShipments, updateShipment } from './services/api';

export type Shipment = {
  id: string;
  name: string;
  email: string;
  boxes: string;
};

type ShipmentsContextType = {
  shipments: Shipment[];
  setShipments: Dispatch<SetStateAction<Shipment[]>>;
  isLoading: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
  showSideBar: boolean;
  updateCargoBoxes: (id: string, boxes: string) => Promise<void>;
};

type ShipmentsProps = {
  children: ReactNode;
};

const ShipmentsContext = createContext<ShipmentsContextType>({
  shipments: [],
  setShipments: () => {},
  isLoading: true,
  setSearch: () => {},
  search: '',
  setShowSideBar: () => {},
  showSideBar: false,
  updateCargoBoxes: async () => {},
});

export const ShipmentsProvider: React.FC<ShipmentsProps> = ({ children }) => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchShipments();
      if (response && response.status === 200) {
        setShipments(response.data);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const updateCargoBoxes = async (id: string, boxes: string) => {
    const shipment = shipments.filter((shipment) => shipment.id === id);
    const updatedShipment = { ...shipment[0], boxes };
    const response = await updateShipment(id, updatedShipment);
    if (response && response.status === 200){alert("Shipment successfully updated.")}
  };

  return (
    <ShipmentsContext.Provider
      value={{
        shipments,
        setShipments,
        isLoading,
        setSearch,
        search,
        setShowSideBar,
        showSideBar,
        updateCargoBoxes,
      }}
    >
      {children}
    </ShipmentsContext.Provider>
  );
};

export const useShipments = () => useContext(ShipmentsContext);
