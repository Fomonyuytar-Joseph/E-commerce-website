import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop ,faCartShopping ,faUser} from '@fortawesome/free-solid-svg-icons'
// import data from '../../data';

import { Link } from 'react-router-dom';
import InitialLogo from '../InitialLogo/InitialLogo';

function Navbar({cartItems ,firstName}) {
  // const { colors}= data

  console.log(firstName)
  return (
   <>
     <nav class="navbar fixed-top navbar-expand-lg navbar-dark " style={{backgroundColor:'#14315c'}}>
  <div class="container-fluid" >
    <a class="navbar-brand" href="yu" style={{color:'white'}} >
      <span style={{color:'#ee502c' }}><FontAwesomeIcon icon={faShop} /></span>
       LEGIT MARKET  {firstName}
       </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
    
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <Link to="/homepage" style={{textDecoration:'none',color:'white'}}>
         <span className=' nav-link' style={{color:'white'}} > Home</span>
          </Link>
        </li>
        <li class="nav-item nav-link">
          
          <Link to="/cart" style={{textDecoration:'none'}}>

          
        <span style={{color:'#ee502c'}}> <FontAwesomeIcon icon={faCartShopping} /></span> 
        <span style={{color:'#ffd814'}}>{cartItems.length}</span>
           
            </Link>
            
        </li>
        
       
        
        <li class="nav-item nav-link">
        <Link  to="/signup" style={{textDecoration:'none'}} >
          <span style={{color:'#ee502c'}}><FontAwesomeIcon icon={faUser}/></span><span style={{color:'white'}}>SignUp </span>
          </Link>
        </li>

        
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" style={{backgroundColor:"#ee502c",color:'white' ,border:'none'}}>Search</button>
      </form>

      <div style={{marginLeft:'20px'}}>
        <InitialLogo firstName={firstName}/>
      </div>
    </div>
  </div>
</nav>
</>


    
  )
}

export default Navbar