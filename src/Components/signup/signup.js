import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'


function Signup() {
  return (
  <div className='d-flex justify-content-center align-items-center ' style={{marginTop:'150px'}}>
      <form style={{width:'30%'}}>
        <h3 style={{paddingBottom:'25px'}}>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            style={{borderColor:'#dee2e7' ,fontSize:'15px',height:'50px'}}

          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" style={{borderColor:'#dee2e7',fontSize:'15px',height:'50px'}}/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            style={{borderColor:'#dee2e7',fontSize:'15px',height:'50px'}}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            style={{borderColor:'#dee2e7',fontSize:'15px',height:'50px' }}
          />
        </div>
        <div className="mb-3">
          <label> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            style={{borderColor:'#dee2e7',fontSize:'15px' ,height:'50px'}}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#ee502c' ,border:'none'}}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Already registered ?<Link to="/Signup" style={{textDecoration:'none'}} >
          <span style={{color:'#ee502c'}}>  SignUp</span>
          </Link>
        </p>
      </form>
      </div> 

  )
}

export default Signup