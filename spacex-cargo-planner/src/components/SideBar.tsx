import React from 'react';
import { Link } from 'react-router-dom';
import { useShipments } from '../ShipmentsProvider';

const SideBar: React.FC = () => {
  const { search, shipments, showSideBar, setShowSideBar } = useShipments();
  
  const filteredShipments = shipments.filter((shipment) =>
    shipment.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`sidebar col-md-3 ${showSideBar ? '' : 'd-none'} d-md-block`}
    >
      <div className="list-group p-4 w-100">
        <h5 className="text-light ">SHIPMENT LIST</h5>
        {filteredShipments ? (
          filteredShipments.map((shipment) => (
            <Link
              onClick={() => setShowSideBar(false)}
              key={shipment.id}
              to={`/${shipment.id}`}
              className="list-group-item text-light bg-transparent border-0 font-weight-light"
            >
              {shipment.name}
            </Link>
          ))
        ) : (
          <p>No shipments</p>
        )}
      </div>
    </div>
  );
};

export default SideBar;
