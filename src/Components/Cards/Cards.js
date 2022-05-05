import React from 'react'
import shoe from './images/shoe.jpg'
import controller from './images/controller.jpeg'
import phone from './images/iphone12.jpg'
import sweater from './images/sweater.jpg'
import kitchen from './images/kitchen.jpg'
import rain from './images/rainy.jpg'
import tv from './images/Tv.jpg'
import school from './images/school.jpg'
import strange from './images/blue.jpg'
// import gucci from './images/game.jpg'
import { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Cards() {

  const [ products , setProducts ]  = useState(
   [ { title:'Get your Shoes' , image:shoe ,id:1 },
    { title:'Game Accessories' , image:controller , id:2  },
    { title:'Latest iphones' , image:phone ,id:3 },
    { title:'pullover' , image:sweater ,id:4 },
    { title:'kitchen Utensils' , image:kitchen ,id:5},
    { title:'Rainy Season is near' , image:rain ,id:6 },
    { title:'television' , image:tv ,id:7 },
    { title:'school' , image:school ,id:8 },
    { title:'Get you blockbusters' , image:strange ,id:9 },
    { title:'Gucci' , image:controller ,id:10 },
  ]
  )
  
  return (
    <div class="d-flex justify-content-around flex-wrap " style={{marginTop:'-120px'}}>
     {products.map( (product) =>(
       <div class="card mb-5" style={{width: "18rem"}}  key={product.id} >
  
       <div class="card-body">
         <h5 class="card-title">{product.title}</h5>
         <img src={product.image} class="card-img-bottom" alt="..."/>
         <p class="card-text"></p>
         <a href="muh" class="btn btn-primary" style={{backgroundColor:"#f3cc6b" ,border:'none'}}>Buy Now</a>
         
       </div>
     </div>
     ))}
     
    </div>
  )
}

export default Cards