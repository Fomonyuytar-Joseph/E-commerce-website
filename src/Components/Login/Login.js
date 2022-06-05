import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
   
  return (<div style={{backgroundColor:'#14315c',height:'100vh'} }>
    <div className='d-flex justify-content-center align-items-center '  style={{paddingTop:'160px'}}>
      <form style={{width:'30%', padding:'30px', borderRadius:'10px',background:'white'}}>
      <div style={{display:'flex',alignItem:'center' ,justifyContent:'center'}}>  <p style={{fontSize:'30px' ,fontWeight:'bold'}}>SHOPIFY</p> </div> 
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
          Already have an account ?<Link to="/signup" style={{textDecoration:'none'}} >
          <span style={{color:'#ee502c'}}>  SignUp</span>
          </Link>
        </p>
      </form>
      </div> 
      </div>

  )
}

export default Login