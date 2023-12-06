import React, { useState } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { PiEqualsFill } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./Selectyard.css";

const MyDropdown = () => {
  const locationHistory = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const openModaldata = () => {
    setModalOpen(true);
    locationHistory("/Planyard"); // Use push instead of direct assignment  to next path location form data dispaly 
  };

  const closeModaldata = () => {
    setModalOpen(false);
  };


  return (
    <>
      <div className="container-fluid shadow ">
        <div className="row">
          <div className="col-sm-9" id="Totaldata">
            <button className="btn btn-dark text-white border-5 rounded-pill me-1 btn-sm">
              Total Review{" "}
            </button>
            <label htmlFor="myDropdown">VIA</label>
            <select
              id="myDropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}

            <label htmlFor="myDropdown">POD</label>
            <select
              id="myDropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}

            <label htmlFor="myDropdown">Type</label>
            <select
              id="myDropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}

            <label htmlFor="myDropdown">Status</label>
            <select
              id="myDropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}

            <label htmlFor="myDropdown">Weight</label>
            <select
              id="myDropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}

            <label htmlFor="myDropdown">Group Code</label>
            <select
              id="myDropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}

            <label htmlFor="myDropdown" className="">
              Liner
            </label>
            <select
              id="myDropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}

            <div>
              {/* <input type="radio" id="hc" name="hc" defaultValue={30} />
  <label htmlFor="hc">HC</label><br />


  <input type="radio" id="oog" name="hc" defaultValue={60} />
  <label htmlFor="oog">OOG</label><br />  

  <input type="radio" id="refer" name="hc" defaultValue={100} />
  <label htmlFor="refer">Reefer</label><br />  




  <label htmlFor="tier">Tier Level</label><br />  
  <input type="radio" id="tier" name="hc" defaultValue={100} /> */}
            </div>
          </div>

          <div className="col-sm-3">
            <div className="d-flex m-auto">
              <button className="btn btn-dark text-white border-5 rounded-pill me-1 btn-sm">
                Search{" "}
              </button>
              <button className="btn btn-dark text-white border-5 rounded-pill me-1 btn-sm">
                Review{" "}
              </button>

              <button className="btn btn-dark text-white border-5 rounded-pill me-1 btn-sm">
                Reset{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-group-vertical fixed-right">
              <Link
                to="/home"
                className="btn btn-outline-dark"
                size={32}
                color="red"
              >
                {" "}
                <TiHomeOutline />{" "}
              </Link>
              <Link
                to="/planyard/"
                onClick={openModaldata}
                className="btn btn-outline-dark"
                size={32}
                color="green"
              >
                {" "}
                <PiEqualsFill />
              </Link>
              <Link
                to="/"
                className="btn btn-outline-dark"
                size={32}
                color="blue"
              >
                {" "}
                <IoCloseOutline />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          {/* Add your form details and other content for the modal */}
          <h2>Modal Content</h2>
          <button onClick={closeModaldata}>Close</button>
        </div>
      )}
    </>
  );
};

export default MyDropdown;
