import React from 'react'
import { useState } from 'react'
import blanket from './rainImages/blanket.jpg'
import blanket2 from './rainImages/blanket2.jpg'
import boot from './rainImages/boot.jpg'
import boot2 from './rainImages/boot2.jpg'
import sweater from './rainImages/sweater.jpg'
import sweater2 from './rainImages/sweater2.jpg'
import sweater3 from './rainImages/sweater.jpg'
import umb from './rainImages/umb.jpg'
import umb2 from './rainImages/umb2.jpg'
import umb3 from './rainImages/umb3.jpg'
import umb4 from './rainImages/umb4.png'
import swt from './rainImages/wsweater.jpg'


function Rain() {
    const [items, setItems] = useState(
        [  { image:blanket ,title:"Blanket " ,  price:"10,000 FCFA" ,id:1} ,
          { image:blanket2,title:"Blanket Variety" ,  price:"30,000 FCFA",id:2 },
          { image:boot ,title:"Green Rainboot" ,  price:"5,000 FCFA",id:3 },
          { image:boot2 ,title:"Black Female Rainboot" ,  price:"4,000 FCFA" ,id:4},
          { image:sweater ,title:"Nike Hood Pullover" ,  price:"10,000 FCFA" ,id:5},
          { image:sweater2 ,title:"Adidas Hood Pullover" ,  price:"10,000 FCFA",id:6},
          { image:sweater3 ,title:"Nike Hood Pullover" ,  price:"950,000 FCFA" ,id:7},
          { image:umb ,title:"Umbrella" ,  price:"2,000 FCFA",id:8},
          { image:umb2 ,title:"Children Umbrella" ,  price:"3,000 FCFA" ,id:9},
          { image:umb3 ,title:"Black Umbrella" ,  price:"3,000 FCFA" ,id:10},
          { image:umb4 ,title:"Transparent Umbrella" ,  price:"5,000 FCFA" ,id:11},
          { image:swt ,title:"Girl Sweater" ,  price:"5,000 FCFA" ,id:11},
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

export default Rain