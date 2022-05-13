import React from 'react'
import { useState } from 'react'
import point from './shoeImages/point.png'
import point2 from './shoeImages/point2.jpg'
import point3 from './shoeImages/point3.jpg'
import sch1 from './shoeImages/sch1.jpg'
import nk4 from './shoeImages/nk4.jpg'
import nk5 from './shoeImages/nk5.jpg'
import nk6 from './shoeImages/nk6.jpg'
import adidas from './shoeImages/adidas.jpg'
import adidas2 from './shoeImages/adidas2.jpg'
import adidas4 from './shoeImages/adidas4.jpg'
import adidas5 from './shoeImages/adidas5.jpg'
import school from './shoeImages/schoolShoe.jpg'




function Shoes() {
  const [items, setItems] = useState(
    [  { image:point ,title:"Regular Shoe " ,  price:"900,000 FCFA" ,id:1} ,
      { image:point2,title:"Note 20 Ultra" ,  price:"500,000 FCFA",id:2 },
      { image:point3 ,title:"iphone 8" ,  price:"90,000 FCFA",id:3 },
      { image:sch1 ,title:"Pixel 4a" ,  price:"200,000 FCFA" ,id:4},
      { image:nk4 ,title:"Samsung S21 Ultra" ,  price:"700,000 FCFA" ,id:5},
      { image:nk5 ,title:"Oneplus 8" ,  price:"300,000 FCFA",id:6},
      { image:nk6 ,title:"Huawei P50 Pro" ,  price:"950,000 FCFA" ,id:7},
      { image:adidas ,title:"iphone X" ,  price:"200,000 FCFA",id:8},
      { image:adidas2 ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:9},
      { image:adidas4 ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:10},
      { image:adidas5 ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:11},
      { image:school ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:11},
    ]
    )
  return (
    <div class="d-flex justify-content-around flex-wrap mt-3 " >
      {items.map( (item) => (
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

export default Shoes