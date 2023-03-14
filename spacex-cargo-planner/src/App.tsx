import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Logo from './resources/Logo.svg';
import { fetchShipments } from './services/api';

import NavBar from './components/NavBar';
import ShipmentDetails from './components/ShipmentDetails';
import Spinner from './components/Spinner';

export type Shipment = {
  id: string;
  name: string;
  email: string;
  boxes: string;
};

const App: React.FC = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

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

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const filteredShipments = shipments.filter((shipment) =>
    shipment.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid">
        <NavBar
          handleSideBar={handleSideBar}
          showSideBar={showSideBar}
          handleSearch={handleSearch}
        />
        <div className="row">
          <SideBar shipments={filteredShipments} showSideBar={showSideBar} />
          <div className="col-md-9 p-4">
            <div className="bg-secondary text-white bg-opacity-25 rounded-4 h-100 p-5">
              {isLoading ? (
                <Spinner />
              ) : (
                <BrowserRouter>
                  <Routes>
                    <Route
                      path={'/'}
                      element={
                        <div className="text-center py-5 h-25">
                          <img
                            src={Logo}
                            alt="Logo"
                            className="img-fluid w-75 py-5 my-5"
                          />
                        </div>
                      }
                      key={'home'}
                    />
                    {shipments &&
                      shipments.map((shipment) => (
                        <Route
                          path={`/${shipment.id}`}
                          element={<ShipmentDetails shipment={shipment} />}
                          key={shipment.id}
                        />
                      ))}
                  </Routes>
                </BrowserRouter>
              )}{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
