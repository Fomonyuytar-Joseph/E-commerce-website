import React from 'react'
import plane from './images/plane.jpg'
import controller from './images/controller.jpeg'
import phone from './images/iphone.jpg'
import gucci from './images/gucci.jpg'
import { useState } from 'react'

function Cards() {

  const [ products , setProducts ]  = useState(
   [ { title:'Get your Toys' , image:plane ,id:1 },
    { title:'Game Accessories' , image:controller , id:2  },
    { title:'Latest Iphones' , image:phone ,id:3 },
    { title:'Dresses' , image:gucci ,id:4 }
  ]
  )
  
  return (
    <div>
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