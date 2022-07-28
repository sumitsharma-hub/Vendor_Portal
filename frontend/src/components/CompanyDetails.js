import React,{useContext} from 'react'
import company from '../data/company'
import "../components/CompanyDetails.css"
const CompanyDetails = ({c_name,c_id,id}) => {
  return (
   <>      
   <div className='c_main_container'>
    <div className='c_name_div'>
        <h1>{c_name}</h1>
    </div>
        <div className='c_details'>
            <h4> Address:   {company[c_id].address}</h4>
            <h4>GST_NUMBER:   {company[c_id].gst_number}</h4>
        </div>
    </div> 
   </>
  )
}

export default CompanyDetails