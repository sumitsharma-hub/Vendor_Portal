import React,{useContext,useState} from 'react'
import { Vendor_context } from '../Store/VendorContext';
import { VendorListContext } from '../Store/VendorListContext';
import "./VendorDetails.css"
const VendorDetails = () => {

  const [v_details]=useContext(VendorListContext);
  return (
    <>
        
        <div className='vendor_details c_padding'>
          <h2>Vendor_Details</h2>
          <div className='details_div'>
            <h4> Name:   {v_details.name}</h4>
            <h4>Address:   {v_details.Address}</h4>
          </div>
        </div>
    </>
  )
}

export default VendorDetails