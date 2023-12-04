import React from 'react';
import NSDT from "./Images/NSDT-1.png";

const NsdtBody = () => {
  return (
    <>
      <div className="jumbotron d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', minHeight: '100vh' }}>
        <div className="row">
          <div className="col text-center">
            <img
              style={{ Width: '100%', height: '100%', opacity: 0.8 }}
              className="img-thumbnail"
              src={NSDT}
              alt="nsdt-1 image"
            />
          </div>
        </div>
      </div>
      


    



    </>
  );
};

export default NsdtBody;
