import React,{useState,createContext, Children} from 'react'
import VendorList from '../components/VendorList';
import vendor from '../data/dummy';

export const VendorListContext=createContext();

export const VendorListContextProvider = ({children}) => {

  
  const [id,set_Id]=useState(vendor[0]);
  // console.log(id);

  return (
    <VendorListContext.Provider  value={[id,set_Id]}>
      {children}
    </VendorListContext.Provider>
  )
}
