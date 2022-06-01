import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{marginTop:'150px'}}>
      <form style={{width:'30%'}}>
        <h3 style={{paddingBottom:'25px'}}>Login</h3>
        
        
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
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#ee502c' ,border:'none'}}>
           <Link to='/homepage'style={{textDecoration:'none' ,color:'white'}}>Sign Up</Link> 
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Already have an account ?<Link to="/" style={{textDecoration:'none'}} >
          <span style={{color:'#ee502c'}}>  SignUp</span>
          </Link>
        </p>
      </form>
      </div> 

  )
}

export default Login