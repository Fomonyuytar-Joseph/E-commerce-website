import React from 'react'

// import point from './shoeImages/point.png'
// import point2 from './shoeImages/point2.jpg'
// import point3 from './shoeImages/point3.jpg'
// import sch1 from './shoeImages/sch1.jpg'
// import nk4 from './shoeImages/nk4.jpg'
// import nk5 from './shoeImages/nk5.jpg'
// import nk6 from './shoeImages/nk6.jpg'
// import adidas from './shoeImages/adidas.jpg'
// import adidas2 from './shoeImages/adidas2.jpg'
// import adidas4 from './shoeImages/adidas4.jpg'
// import adidas5 from './shoeImages/adidas5.jpg'
// import school from './shoeImages/schoolShoe.jpg'




function Shoes({shoeProducts , onAdd}) {
  
    
  return (
    <div class="d-flex justify-content-around flex-wrap mt-3 " >
      {shoeProducts.map( (item) => (
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
                <form action="#">
            
            <select name="languages" id="lang" style={{ marginBottom:'8px'}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <p class="card-text"> <button type='submit' class="buyButton"> Buy Now</button> </p>
            <p class="card-text">  <button type='submit' onClick={()=>onAdd(item)} class="buyButton"> Add to Kart</button> </p>
      </form></p>
              
            </div>
          </div>
        </div>
      </div>
      
      ))}
        
    </div>
    
  )
}

export default Shoes