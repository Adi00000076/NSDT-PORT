import React, { useState } from "react";

import "./Selectyard.css";

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="container-fluid shadow position-fixed">
        <div className="row" >
          <div className="col-sm-9" id="Totaldata">
            <button className="btn btn-secondary btn-sm">Total Review </button>
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

            <label htmlFor="myDropdown">Liner</label>
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
              <button className="btn btn-secondary btn-sm">Search </button>
              <button className="btn btn-secondary btn-sm">Review </button>

              <button className="btn btn-secondary btn-sm">Reset </button>
            </div>
       </div>
        </div>
      </div>

      
    </>
  );
};

export default MyDropdown;
