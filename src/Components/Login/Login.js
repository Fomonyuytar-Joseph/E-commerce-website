import React from 'react'
import { Link } from 'react-router-dom'


function Login({setPassword ,setEmail ,display ,errors}) {
  
   
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
            onChange={(event)=>{
              setEmail(event.target.value)

            }}
          />
           { errors.email && <p className='error' style={{color:'red'}}>{errors.email} </p>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            style={{borderColor:'#dee2e7',fontSize:'15px',height:'50px' }}
            onChange={(event)=>{
              setPassword(event.target.value)

            }}
          />
           { errors.password && <p className='error' style={{color:'red'}}>{ errors.password } </p>} 
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#ee502c' ,border:'none'}} onClick={display}>
           Login
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Do not have  an account ?<Link to="/signup" style={{textDecoration:'none'}}  >
          <span style={{color:'#ee502c'}}>  SignUp</span>
          </Link>
        </p>
      </form>
      </div> 
      </div>

  )
}

export default Login