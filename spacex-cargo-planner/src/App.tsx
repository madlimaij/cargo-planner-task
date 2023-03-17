import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Logo from './resources/Logo.svg';

import NavBar from './components/NavBar';
import ShipmentDetails from './components/ShipmentDetails';
import Spinner from './components/Spinner';
import { useShipments } from './ShipmentsProvider';
import Home from './components/Home';

const App: React.FC = () => {
  const { shipments, isLoading, showSideBar } = useShipments();

  return (
    <>
      <div className="container-fluid w-100">
        <BrowserRouter basename="/cargo-planner">
          <NavBar />
          <div className="row">
            <SideBar/>
            <div className={`col-md-9 p-4 min-vh-100 ${showSideBar ? "d-none": ""} d-md-block"`}>
              <div className="bg-secondary text-white bg-opacity-25 rounded-4 h-100 p-5">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <Routes>
                    <Route path={'/'} element={<Home logo={Logo}/>} key={'home'} />
                    {shipments &&
                      shipments.map((shipment) => (
                        <Route
                          path={`/${shipment.id}`}
                          element={<ShipmentDetails shipment={shipment} />}
                          key={shipment.id}
                        />
                      ))}
                  </Routes>
                )}
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
