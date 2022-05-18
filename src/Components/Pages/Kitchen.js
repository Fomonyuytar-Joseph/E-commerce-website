import React from 'react'
import { useState } from 'react'
import all from './kitchen/all.jpg'
import all1 from './kitchen/all1.jpg'
import all3 from './kitchen/all3.jpg'
import spoon from './kitchen/spoon.jpg'
import spoon2 from './kitchen/spoon2.jpg'
import spoon3 from './kitchen/spoon3.jpg'
import pot from './kitchen/pot.jpg'
import pot2 from './kitchen/pot2.jpg'
import pan from './kitchen/pan.jpg'
import pan2 from './kitchen/pan2.jpg'
import knife from './kitchen/knife.jpg'
import knife2 from './kitchen/knife2.webp'


function Kitchen() {
    const [items, setItems] = useState(
        [  { image:all ,title:"Black Complete Kitchen Set " ,  price:"90,000 FCFA" ,id:1} ,
          { image:all1,title:"Purple Complete Kitchen Set" ,  price:"500,000 FCFA",id:2 },
          { image:all3 ,title:"Puprle Pans" ,  price:"10,000 FCFA",id:3 },
          { image:spoon ,title:"Luxury Spoons" ,  price:"20,000 FCFA" ,id:4},
          { image:spoon2 ,title:"Kieeu Spoons" ,  price:"6,000 FCFA" ,id:5},
          { image:spoon3 ,title:"Wooden Spoons" ,  price:"5,000 FCFA",id:6},
          { image:pot ,title:"Silver Pot" ,  price:"9,000 FCFA" ,id:7},
          { image:pot2,title:"Alluminium Pot" ,  price:"7,000 FCFA",id:8},
          { image:pan ,title:"Frying Pan" ,  price:"4,000 FCFA" ,id:9},
          { image:pan2 ,title:"Frying Pan Variety" ,  price:"10,000 FCFA" ,id:10},
          { image:knife ,title:"Knives" ,  price:"6,000 FCFA" ,id:11},
          { image:knife2 ,title:"Kitchen Knives" ,  price:"300,000 FCFA" ,id:11},
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

export default Kitchen