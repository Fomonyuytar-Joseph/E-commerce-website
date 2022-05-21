import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop ,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar({cartItems}) {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="yu" style={{color:'#5e8ea2'}} ><span style={{color:'#5e8ea2' }}><FontAwesomeIcon icon={faShop} /></span> LEGIT MARKET</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
    
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <Link to="/">
          Home
          </Link>
        </li>
        <li class="nav-item">
          
          <Link to="/cart">

          
          <FontAwesomeIcon icon={faCartShopping} /><span style={{color:'red'}}>{cartItems.length}</span>
           
            </Link>
            
        </li>
        <li class="nav-item">
          <a class="nav-link" href="yu">Agents</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="yu">Blog</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="yu">Login/SignUp</a>
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