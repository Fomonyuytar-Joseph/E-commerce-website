import React from 'react'
// import { useState } from 'react'
// import tv1 from './tvImages/tv1.jpg'
// import tv2 from './tvImages/tv2.jpg'
// import tv3 from './tvImages/tv3.jpg'
// import tv4 from './tvImages/tv4.jpeg'
// import tv5 from './tvImages/tv5.jpg'
// import tv6 from './tvImages/tv6.jpg'
// import tv7 from './tvImages/tv7.png'
// import tv8 from './tvImages/tv8.jpg'
// import tv9 from './tvImages/tv9.jpg'
// import sony from './tvImages/sony.jpg'
// import apple from './tvImages/appletv.jpg'
// import appletv1 from './tvImages/appletv1.jpeg'

function Tv({TvProducts ,onAdd}) {
    
  return (
    <div class="d-flex justify-content-around flex-wrap mt-3 " >
      {TvProducts.map( (item) => (
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

export default Tv