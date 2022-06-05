
import React from 'react'
import { Link } from 'react-router-dom'






            
            
            function Signup({firstname ,errors, setErrors,setfirstName,setlastName,setEmail,setPassword,setCpassword,displayInfo}) {
             
              
  return (
    <div style={{backgroundColor:'#14315c',height:'100vh'} }>
  <div className='d-flex justify-content-center align-items-center ' style={{paddingTop:'60px'}}>
      <form style={{width:'30%' , padding:'30px', borderRadius:'10px',background:'white'}}>
     <div style={{display:'flex',alignItem:'center' ,justifyContent:'center'}}>  <p style={{fontSize:'30px' ,fontWeight:'bold'}}>SHOPIFY</p> </div> 
        <h3 style={{paddingBottom:'25px'}}>Sign Up</h3>
        <div className="mb-3">
          {/* First Name */}
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            style={{borderColor:'#dee2e7' ,fontSize:'15px',height:'50px'}}
            onChange={(event)=>{
              setfirstName(event.target.value)

            }}
            
         

          />
          { errors.firstName && <p className='error' style={{color:'red'}}>{errors.fullname} </p>}  
        </div>

        {/* Last name */}
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" 
          className="form-control"
           placeholder="Last name" 
           style={{borderColor:'#dee2e7',fontSize:'15px',height:'50px'}}
          //  name='Lname'
           onChange={(event)=>{
            setlastName(event.target.value)

          }}
           
           />
           { errors.lastName && <p className='error' style={{color:'red'}} >{errors.lastname} </p>} 
        </div>


        {/* email */}
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            style={{borderColor:'#dee2e7',fontSize:'15px',height:'50px'}}
            // name='email'
            onChange={(event)=>{
              setEmail(event.target.value)

            }}
            
          />
          { errors.email && <p className='error' style={{color:'red'}}>{errors.email} </p>} 
        </div>


        {/* Password */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            style={{borderColor:'#dee2e7',fontSize:'15px',height:'50px' }}
            // name='password'
            onChange={(event)=>{
              setPassword(event.target.value)

            }}
           
            
          />
        </div>

        { errors.password && <p className='error' style={{color:'red'}}>{ errors.password } </p>} 
        {/* Confirm Password */}
        <div className="mb-3">
          <label> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            style={{borderColor:'#dee2e7',fontSize:'15px' ,height:'50px'}}
            // name='Cpassword'
            onChange={(event)=>{
              setCpassword(event.target.value)

            }}
           
           
          />
           { errors.Cpassword && <p className='error' style={{color:'red'}}>{ errors.Cpassword } </p>} 
        </div>
        <div className="d-grid">
          
        
          <button  className="btn btn-primary" style={{backgroundColor:'#ee502c' ,border:'none'}} onClick={displayInfo} >
            Sign Up
            </button>          
            
         
        </div>
        <p className="forgot-password text-right mt-2">
        Already registered ?<Link to="/login" style={{textDecoration:'none'}} >
          <span style={{color:'#ee502c'}}>  Login</span>
          </Link>
        </p>
      </form>
      </div>
      </div> 

  )
}

export default Signup