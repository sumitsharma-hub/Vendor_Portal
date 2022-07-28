import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Navbar.css"

 const Navbar = () => {
  return (
    <div className='main_container_nav'>
        <div className='logo_div'>
          <Link  className='logo_link' to={"/"}><h1>LOGO</h1></Link>
          </div>
        <div className='middle_container'>

        </div>
        
            <div className='login_div_nav'>
                <h1>login</h1>
            </div>
        
    </div>
  )
}
export default Navbar;