import React from 'react'

function InitialLogo({firstName}) {
  return (
    <div style={{ width:"50px",height:"50px" ,borderRadius:'100px',backgroundColor:'#2fb7ec',margin:'auto' }}>
    
    <p style={{color:'white', height:'20px',width:'20px',fontSize:'30px' ,margin:'auto' ,textAlign:'center'}}>{firstName.charAt(0)}</p>
    
    </div>
  )
}

export default InitialLogo