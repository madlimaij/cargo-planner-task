import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShipmentsProvider } from './ShipmentsProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ShipmentsProvider>
      <App />
    </ShipmentsProvider>
  </React.StrictMode>
);
