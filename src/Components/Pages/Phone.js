import React from 'react'
import phone from './images/iphone12.jpg'
import './phone.css'
import { useState } from 'react'

function Phone() {
  const [items, setItems] = useState(
  [  { image:phone ,title:"iphone" ,  price:"900000 FCFA" ,id:1} ,
    { image:phone ,title:"iphone" ,  price:"900000 FCFA",id:2 },
    { image:phone ,title:"iphone" ,  price:"900000 FCFA",id:3 },
    { image:phone ,title:"iphone" ,  price:"900000 FCFA" ,id:4},
    { image:phone ,title:"iphone" ,  price:"900000 FCFA" ,id:5},
    { image:phone ,title:"iphone" ,  price:"900000 FCFA",id:6},
    { image:phone ,title:"iphone" ,  price:"900000 FCFA" ,id:7},
    { image:phone ,title:"iphone" ,  price:"900000 FCFA",id:8},
    { image:phone ,title:"iphone" ,  price:"900000 FCFA" ,id:9}
  ]
  )
  
      
  return (
    <div class="d-flex justify-content-around flex-wrap " >
      {items.map( (item) => (
        <div class="card mb-3" style={{maxWidth: "430px"}} key={item.id}>
        <div class="row g-0">
          <div class="col-md-4 " style={{height: "250px"}}>
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
            <p class="card-text">  <button type='submit' class="buyButton"> Add to Kart</button> </p>
      </form></p>
              
            </div>
          </div>
        </div>
      </div>
      
      ))}
        
    </div>
  )
}

export default Phone