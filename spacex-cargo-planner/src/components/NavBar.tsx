import React from 'react';
import Search from './Search';
import Logo from '../resources/Logo.svg';
import { Shipment } from '../App';

type NavBarProps = {
  handleSideBar: () => void;
  showSideBar: boolean;
  handleSearch: (e: any) => void;
  search: string;
  shipments: Shipment[]
};

const NavBar: React.FC<NavBarProps> = ({
  handleSideBar,
  showSideBar,
  handleSearch,
  search,
  shipments
}) => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="p-2 container-fluid">
        <a href="/">
          <img src={Logo} alt="Logo" className="navbar-brand p-2" />
        </a>
        {showSideBar ? (
          <button
            type="button"
            className="btn-close navbar-toggler btn-close-white"
            onClick={handleSideBar}
            aria-label="Close"
          ></button>
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
        <Search handleSearch={handleSearch} search={search} shipments={shipments}/>
      </div>
    </nav>
  );
};

export default NavBar;
