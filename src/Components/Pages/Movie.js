import React from 'react'
import { useState } from 'react'
import mv from './movies/mv.jpg'
import mv1 from './movies/mv1.jpg'
import mv2 from './movies/mv2.jpg'
import mv3 from './movies/mv3.jpg'
import mv4 from './movies/mv4.jpg'
import mv5 from './movies/mv5.png'
import mv6 from './movies/mv6.jpg'
import mv7 from './movies/mv7.jpg'
import mv8 from './movies/mv8.jpg'
import mv9 from './movies/mv9.jpg'

function Movie() {
    const [items, setItems] = useState(
        [  { image:mv1 ,title:"Naruto " ,  price:"5,000 FCFA" ,id:1} ,
          { image:mv2,title:"Attack on Titans Season 2" ,  price:"6,000 FCFA",id:2 },
          { image:mv3 ,title:"Attack on Titans Season 1" ,  price:"8,000 FCFA",id:3 },
          { image:mv4 ,title:"Wonder" ,  price:"4,000 FCFA" ,id:4},
          { image:mv5 ,title:"WarCraft" ,  price:"5,000 FCFA" ,id:5},
          { image:mv6 ,title:"Frozen" ,  price:"2,000 FCFA",id:6},
          { image:mv7 ,title:"Walking DEad" ,  price:"7,000 FCFA" ,id:7},
          { image:mv8,title:"Stranger Things Season 3" ,  price:"10,000 FCFA",id:8},
          { image:mv9 ,title:"Dragon Ball Z" ,  price:"2,000 FCFA" ,id:9},
          { image:mv ,title:"Avengers" ,  price:"5,000 FCFA" ,id:10},
          
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

export default Movie