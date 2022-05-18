import React from 'react'
import { useState } from 'react'

function Dess() {
    const [items, setItems] = useState(
        [  { image:pencil ,title:"Pencil " ,  price:"5,000 FCFA" ,id:1} ,
          { image:pencil2,title:"Pencil" ,  price:"6,000 FCFA",id:2 },
          { image:pen , title:"Pencil" ,  price:"8,000 FCFA",id:3 },
          { image:color ,title:"Wonder" ,  price:"4,000 FCFA" ,id:4},
          { image:color2 ,title:"WarCraft" ,  price:"5,000 FCFA" ,id:5},
          { image:chalk ,title:"Frozen" ,  price:"2,000 FCFA",id:6},
          { image:cal2 ,title:"Walking DEad" ,  price:"7,000 FCFA" ,id:7},
          { image:cal,title:"Stranger Things Season 3" ,  price:"10,000 FCFA",id:8},
          { image:chalk2 ,title:"Dragon Ball Z" ,  price:"2,000 FCFA" ,id:9},
          { image:pencil ,title:"Avengers" ,  price:"5,000 FCFA" ,id:10},
          { image:bag ,title:"Avengers" ,  price:"5,000 FCFA" ,id:11},
          { image:bag2 ,title:"Avengers" ,  price:"5,000 FCFA" ,id:12},
          
        ])
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

export default Dess