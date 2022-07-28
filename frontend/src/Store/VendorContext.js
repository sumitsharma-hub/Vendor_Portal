import React,{useState,createContext, Children} from 'react'
import vendor from '../data/dummy';


export const Vendor_context=createContext();

export const VendorDetailsProvider = (props) => {
    const[v_details,setv_details]=useState(vendor);

  return (
    <div>
        <Vendor_context.Provider value={[v_details,setv_details]}>
            {Children.props}
        </Vendor_context.Provider>
    </div>
  )
}
