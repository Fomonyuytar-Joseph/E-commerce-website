import React from 'react'
// import { useState } from 'react'
// import ps5 from './game/ps5.jpg'
// import xbox from './game/xbox.jpg'
// import xc from './game/controller.jpg'
// import pc from './game/ps5controller.png'
// import gear from './game/gear.jpg'
// import ps4 from './game/ps4.jpg'
// import nintendo from './game/nintendo.jpg'
// import gh from './game/gh.webp'
// import gh2 from './game/gh2.jpg'
// import cd from './game/cd.jpg'
// import gc from './game/gc.jpg'
// import gta from './game/gta.jpg'

function Game({GameProducts , onAdd}) {
    
  return (
    <div class="d-flex justify-content-around flex-wrap mt-3 " >
      {GameProducts.map( (item) => (
        <div class="card mb-5" style={{maxWidth: "430px"}} key={item.id}>
        <div class="row g-0">
          <div class="col-xl-4 " style={{height: "200px"}}>
            <img src={item.image} class="img-fluid rounded-start height-auto pt-5" alt="..."/>
          </div>
          <div class="col-md-8 ">
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="card-text" style={{marginTop:'-14px' , marginBottom:'4px' , fontWeight:'bold'}}>Quantity</p>
              <p class="card-text">
                
            
           
            <p class="card-text"> <button type='submit' class="buyButton"> Buy Now</button> </p>
            <p class="card-text">  <button type='submit' onClick={()=>onAdd(item)} class="buyButton"> Add to Kart</button> </p>
      </p>
              
            </div>
          </div>
        </div>
      </div>
      
      ))}
        
    </div>
  )
}

export default Game