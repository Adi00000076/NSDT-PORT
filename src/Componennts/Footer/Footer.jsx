import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <a href="https://www.portall.in/">
              <img
              className="text-justify-content-start"
                src="http://99.99.99.41/NSDT/resources/image/logo.png"
                alt=""
                style={{ width: "50px", height: "50px", }}
              />
            </a>
          </div>

          <div className="col-sm-4">
            <span>
              © 2023 <a href="#">www.portall</a> .in All rights reserved.
            </span>
          </div>

          <div className="col-sm-4 d-flex align-items-center justify-content-end">
            <span className="">ver 2.0.0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;