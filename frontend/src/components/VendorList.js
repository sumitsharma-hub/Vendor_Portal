import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import "../components/Vendor_list.css"
import { Vendor_context } from '../Store/VendorContext';
import { VendorListContext } from '../Store/VendorListContext';

 const VendorList = ({vendor}) => {

   
   const [id,set_Id] =useContext(VendorListContext);
   // const [click,setclick]=useState()

   const handleInfo=(e,vendor_name)=>{
    set_Id(vendor_name);
   }
   
   

  return (
    <>
        <div className='vendor_list c_padding'> 
          <h2>Vendor List</h2>
              {vendor.map((vendor_name)=>(
            <div className='vendor_list_div'>
              <button className='list_link' onClick={e=> handleInfo(e,vendor_name)}>
                {vendor_name.name.replace(/ /g, " ")} 
              </button>
                
                  {/* <button className='link' onClick={e=> handleInfo(e,vendor_name)} > {vendor_name.name.replace(/ /g, " ")} </Button> */}
                  
            </div>
              ))}
          </div>
    </>
  )
}
export default VendorList;
