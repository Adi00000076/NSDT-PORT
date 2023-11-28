import React from 'react';
import "./Yardheaders.css";
import Jamboxi from '../JMBAXI/Jamboxi';

const Yardheaders = () => {
  return (
<>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className="navbar navbar-light bg-light">
  <form className="container-fluid justify-content-start">
    <button className="btn btn-sm  btn-outline-success me-2" type="button">
     Actual
    </button>
    <button className="btn btn-sm btn-outline-secondary me-2" type="button">
 Planned
    </button>
  </form>
</nav>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="nav-link btn btn-secondary me-1 btn-sm" style={{ backgroundColor: "#ff4d1a", fontSize: "14px" }} aria-current="page">Planned List</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-secondary me-1 btn-sm" style={{ backgroundColor: "#ff4d1a" }}>Failed To Deck</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-secondary me-1 btn-sm" style={{ backgroundColor: "#ff4d1a" }}>Hanging</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-secondary me-1 btn-sm" style={{ backgroundColor: "#ff4d1a" }}>Delivery Failed</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-secondary me-1 btn-sm" style={{ backgroundColor: "#ff4d1a" }}>Buy Road Queue(in/out)</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-secondary me-1 btn-sm" style={{ backgroundColor: "#ff4d1a" }}>Role Queue(in/out)</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-secondary me-1 btn-sm" style={{ backgroundColor: "#ff4d1a" }}>Moment History</button>
          </li>
        </ul>
      </div>
    </nav>
    
    
    <Jamboxi />
    
    
    </>
  );
};

export default Yardheaders;
