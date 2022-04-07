import React from 'react';
import './Navbar.css'
import  {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
}  from   './NavbarElement.js';
import {InputGroup , DropdownButton ,Dropdown,Form , FormControl} from  'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
  <>
       <Nav>
         <NavLink  to="/">
           <h1>LOGO</h1>

           <div>
           <form className="example" >
     <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><FaSearch/></button>
             </form>
             </div>
           </NavLink>
          

           <Bars/>
           <NavMenu>

          
           <NavLink to ="/about" activeStyle>
            Home

           </NavLink>
           <NavLink to ="/about" activeStyle>
           Login

           </NavLink>
           
           <NavLink to ="/about" activeStyle>
            about us

           </NavLink>
           <NavLink to ="/about" activeStyle>
          Search

           </NavLink>
           

           <NavBtn>
             <NavBtnLink to ="/search"> Register</NavBtnLink>
             </NavBtn>
           </NavMenu>


         
       </Nav>
  </>
    


  )
}

export default Navbar