import React from 'react'
import im1 from './images/im1.jpg'
import im2 from './images/im2.jpg'
import im3 from './images/im3.jpg'
import './slider.css'

function Slider() {
  
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
<img src={im1} style={ {height: "550px" } }  class="d-block w-100 " alt="..."/>
    
<div class="carousel-caption d-none d-md-block">
        <h1>Get your products here</h1>
        <button className='advert-btn'> Shop Now
</button>
      </div>

    </div>
    <div class="carousel-item">
    <div class="carousel-caption d-none d-md-block">
        <h1>Get 20% discunt for all products</h1>
       
<button class="button" style={{verticalAlign:'middle'}} ><span>Buy</span></button>
      </div>

        
      <img src={im2} style={ {height: "550px" } }  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im3} style={ {height: "550px" } }  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1>Get the latest for all products</h1>
      <button className='advert-btn'> Shop Now
</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider