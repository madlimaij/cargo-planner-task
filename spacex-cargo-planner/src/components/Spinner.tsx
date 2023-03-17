import React from 'react';

const Spinner:React.FC = () => {
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className="spinner-grow" role="status">
      </div>
    </div>
  );
};

export default Spinner;
