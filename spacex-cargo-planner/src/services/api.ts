import { Shipment } from '../ShipmentsProvider';

const apiEndpoint =
  'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json';
// const apiEndpoint="http://localhost:3000/shipments"

export const fetchShipments = async () => {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    if (response.status === 200) {
      return { data: data, status: response.status };
    }
    console.log('Status ', response.status);
  } catch (error) {
    console.log(error);
  }
};

export const updateShipment = async (id: string, shipment: Shipment) => {
  try {
    const response = await fetch(`${apiEndpoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shipment),
    });
    if (response.status === 200) {
      return { status: response.status };
    }
    console.log('Status ', response.status);
  } catch (error) {
    console.log(error);
  }
};
