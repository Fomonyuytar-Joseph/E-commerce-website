import React from 'react'
import phone from './images/iphone12.jpg'

function Phone() {
  return (
    <>
        <div class="card mb-3" style={{maxWidth: "500px"}}>
  <div class="row g-0">
    <div class="col-md-4 " style={{height: "250px"}}>
      <img src={phone} class="img-fluid rounded-start height-auto pt-5" alt="..."/>
    </div>
    <div class="col-md-8 ">
      <div class="card-body">
        <h5 class="card-title">iphone 13</h5>
        <p class="card-text"></p>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Phone