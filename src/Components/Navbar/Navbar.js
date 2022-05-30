import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop ,faCartShopping ,faUser} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar({cartItems}) {
  return (
    <>
     <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="yu" style={{color:'#5e8ea2'}} ><span style={{color:'#5e8ea2' }}><FontAwesomeIcon icon={faShop} /></span> LEGIT MARKET</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
    
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <Link to="/" style={{textDecoration:'none'}}>
         <span className=' nav-link' > Home</span>
          </Link>
        </li>
        <li class="nav-item nav-link">
          
          <Link to="/cart" style={{textDecoration:'none'}}>

          
          <FontAwesomeIcon icon={faCartShopping} /><span style={{color:'red'}}>{cartItems.length}</span>
           
            </Link>
            
        </li>
        <li class="nav-item">
          <a class="nav-link" href="yu">Agents</a>
        </li>
       
        
        <li class="nav-item">
          <a class="nav-link" href="yu"><FontAwesomeIcon icon={faUser}/><span>Login/SignUp</span></a>
        </li>

        
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" style={{backgroundColor:"#f3cc6b"}}>Search</button>
      </form>
    </div>
  </div>
</nav>



    </>
  )
}

export default Navbar