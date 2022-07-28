import React,{useState,useContext} from 'react'
import './FrontScreen.css';
import company from '../data/company';
import {Link} from 'react-router-dom'
// import { VendorListContextProvider } from '../Store/VendorListContext';
const FrontScreen = ({history}) => {
 
  // const[v_id,setv_id,handclickId]=useContext(VendorListContextProvider);;

  console.log(company);
  return (
    <>
        <div className='main_container height'>
            <div className='top_container'>
                <h2>Name of company</h2>
            </div>
            <div className='list_container'>
                {company.map(name =>(

                  <div className='list_div'>
                      <Link to={`/vendor/${name.company_name.replace(/ /g, "-")}/${name.id}`}>{name.company_name}</Link>
                  </div>
                ))}
                               
            </div>
        </div>
    </>
  )
}

export default FrontScreen