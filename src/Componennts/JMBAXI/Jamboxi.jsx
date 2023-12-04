import React from "react";
import JMBOX1 from "./Images/image_9.svg";
import Selectyard from "../Selecterdata-yard/Selectyard";
import Formdata from "./Formdispaly/Formdata";

const Jamboxi = () => {
  return (
    <>
      <Selectyard />
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-lg-12  text-center">
            <img src={JMBOX1} className="img-fluid w-100" alt="Jamboxi Image" />
          </div>

         
        </div>
      </div>

      <div className=" col-md-12">
            <Formdata />
          </div>
    </>
  );
};

export default Jamboxi;
