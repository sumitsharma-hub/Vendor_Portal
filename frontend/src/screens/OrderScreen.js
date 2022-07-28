import React, { useState } from 'react'
import "../screens/OrderScreen.css"
import vendor from "../data/dummy"
import {useLocation,useParams} from 'react-router-dom'
import VendorList from '../components/VendorList';
import VendorDetails from '../components/VendorDetails';
import CompanyDetails from '../components/CompanyDetails';
import company from '../data/company';

const OrderScreen = () => {
  const {id}=useParams();
  // const[details,set_details]=useState(vendor);
  const location=useLocation();
  const v_id=location.pathname.split('/').filter(e=>e).pop();
  const c_id=location.pathname.split('/')[3];
  console.log(c_id);
  const c_name=location.pathname.split('/')[2];

  const c_details=company.find((p)=> p.id===c_id);
  
   console.log(c_details);


  
  return (
    <div className='main_order_container'>
        {/* <div className='company_name_div'> */}
          <CompanyDetails c_name={c_name} c_id={c_id} id={id}/>
        {/* </div> */}
        <div className='vendor'>
          <VendorList vendor={vendor}/>
          <div className='vendor_split'>
            <VendorDetails/>
            <div className='vendor_services'>
                <h1>vendor_services</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OrderScreen