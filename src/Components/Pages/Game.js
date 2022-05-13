import React from 'react'
import { useState } from 'react'
import ps5 from './game/ps5.jpg'
import xbox from './game/xbox.jpg'
import xc from './game/controller.jpg'
import pc from './game/ps5controller.png'
import gear from './game/gear.jpg'
import ps4 from './game/ps4.jpg'
import nintendo from './game/nintendo.jpg'
import gh from './game/gh.webp'
import gh2 from './game/gh2.jpg'
import cd from './game/cd.jpg'
import gc from './game/gc.jpg'
import gta from './game/gta.jpg'

function Game() {
    const [items, setItems] = useState(
        [  { image:ps5 ,title:"Play Station 5 " ,  price:"900,000 FCFA" ,id:1} ,
          { image:xbox,title:"Xbox One" ,  price:"500,000 FCFA",id:2 },
          { image:xc ,title:"Xbox Controller" ,  price:"90,000 FCFA",id:3 },
          { image:pc,title:"PS5 controller" ,  price:"20,000 FCFA" ,id:4},
          { image:gear,title:"Xbox Gear" ,  price:"100,000 FCFA" ,id:5},
          { image:ps4,title:"Play Station 4" ,  price:"100,000 FCFA" ,id:6},
          { image:nintendo,title:"Nintendo Switch" ,  price:"100,000 FCFA" ,id:7},
          { image:gh,title:"Gaming Headset" ,  price:"100,000 FCFA" ,id:8},
          { image:gh2,title:"Gaming Headset" ,  price:"100,000 FCFA" ,id:9},
          { image:cd,title:"FIFA 22" ,  price:"100,000 FCFA" ,id:10},
          { image:gc,title:"Android Game Controller" ,  price:"100,000 FCFA" ,id:11},
          { image:gta,title:"GTA V" ,  price:"100,000 FCFA" ,id:12}
          
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

export default Game