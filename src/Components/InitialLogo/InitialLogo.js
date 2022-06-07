import React from 'react'

function InitialLogo({firstName}) {
  return (
    <div style={{ width:"50px",height:"50px" ,borderRadius:'100px',backgroundColor:'#ee502c'}}>
    
    <p style={}>{firstName.charAt(0)}</p>
    
    </div>
  )
}

export default InitialLogo