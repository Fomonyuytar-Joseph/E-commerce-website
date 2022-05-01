import React from 'react'
import shoe from './images/shoe.jpg'
import controller from './images/controller.jpeg'
import phone from './images/iphone12.jpg'
import sweater from './images/sweater.jpg'
import { useState } from 'react'

function Cards() {

  const [ products , setProducts ]  = useState(
   [ { title:'Get your Toys' , image:shoe ,id:1 },
    { title:'Game Accessories' , image:controller , id:2  },
    { title:'Latest Iphones' , image:phone ,id:3 },
    { title:'Dresses' , image:sweater ,id:4 }
  ]
  )
  
  return (
    <div class="d-flex justify-content-between">
     {products.map( (product) =>(
       <div class="card" style={{width: "18rem"}}  key={product.id} >
  
       <div class="card-body">
         <h5 class="card-title">{product.title}</h5>
         <img src={product.image} class="card-img-bottom" alt="..."/>
         <p class="card-text"></p>
         <a href="muh" class="btn btn-primary">Buy Now</a>
         
       </div>
     </div>
     ))}
    </div>
  )
}

export default Cards