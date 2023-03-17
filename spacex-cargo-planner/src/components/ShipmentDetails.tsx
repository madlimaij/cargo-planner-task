import React from 'react';
import { Shipment } from '../ShipmentsProvider';
import CargoBoxes from './CargoBoxes';

type ShipmentDetailsProp = {
  shipment: Shipment;
};

const ShipmentDetails: React.FC<ShipmentDetailsProp> = ({ shipment }) => {
  return (
    <div className="container-fluid p-3">
      <>
        <h1>{shipment.name}</h1>
        <a href={shipment.email}>{shipment.email}</a>
        <hr />
        {shipment.boxes && (
          <CargoBoxes
            key={shipment.id}
            id={shipment.id}
            boxes={shipment.boxes}
          />
        )}
      </>
    </div>
  );
};

export default ShipmentDetails;
