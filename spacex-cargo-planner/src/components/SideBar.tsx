import React from 'react';
import { Shipment } from '../App';

type SideBarProps = {
  shipments?: Shipment[];
  showSideBar: boolean;
};

const SideBar: React.FC<SideBarProps> = ({ shipments, showSideBar }) => {
  
  return (
    <div className={`sidebar col-md-3 ${showSideBar ? '' : 'd-none'} d-md-block`}>
    <div className="list-group p-4 w-100">
      <h5 className="text-light ">SHIPMENT LIST</h5>
      {shipments ? (
        shipments.map((shipment) => (
          <a
            key={shipment.id}
            href={`/${shipment.id}`}
            className="list-group-item text-light bg-transparent border-0 font-weight-light"
          >
            {shipment.name}
          </a>
        ))
      ) : (
        <p>No shipments</p>
      )}
    </div>
    </div>
  );
};

export default SideBar;
