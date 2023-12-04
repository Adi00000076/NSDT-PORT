import React from 'react'
import JMBOX1 from "./Images/image_9.svg"
import Selectyard from '../Selecterdata-yard/Selectyard'
import Formdata from './Formdispaly/Formdata'

const Jamboxi = () => {
  return (
 <>
 
 <Selectyard />
 <div className="container">

    <div className="row">
        <div className="col text-center mx-5  d-flex justify-content-center">

        <img src={JMBOX1}  className='img-thumbnail'/>

        

        </div>


   <div className="col-sm">
   <Formdata />
   </div>

    </div>



 </div>

 </>
  )
}

export default Jamboxi
