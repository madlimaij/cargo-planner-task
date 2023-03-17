import React from 'react';
import Search from './Search';
import Logo from '../resources/Logo.svg';
import { useShipments } from '../ShipmentsProvider';

const NavBar: React.FC = () => {
  const { setShowSideBar, showSideBar } = useShipments();
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="p-2 container-fluid">
        <a href="/cargo-planner">
          <img src={Logo} alt="Logo" className="navbar-brand p-2" />
        </a>
        {showSideBar ? (
          <button
            type="button"
            className="btn-close navbar-toggler btn-close-white"
            onClick={handleSideBar}
            aria-label="Close"
          />
        ) : (
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            onClick={handleSideBar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        )}
        <Search />
      </div>
    </nav>
  );
};

export default NavBar;
