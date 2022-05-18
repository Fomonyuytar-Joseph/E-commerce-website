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

import { Link } from 'react-router-dom';
// import Shoes  from '../Pages/Shoes';

function Cards() {

  const [ products , setProducts ]  = useState(
   [ { title:'Get your Shoes' , image:shoe , productLink:"/shoes",id:1 },
    { title:'Game Accessories' , image:controller , productLink:'/games', id:2  },
    { title:'Latest iphones' , image:phone , productLink:'/phones',id:3 },
    { title:'Dresses' , image:sweater , productLink:'/dresses',id:4 },
    { title:'kitchen Utensils' , image:kitchen , productLink:'/kitchen',id:5},
    { title:'Rainy Season is near' , image:rain , productLink:'/rain',id:6 },
    { title:'television' , image:tv , productLink:'/tv',id:7 },
    { title:'school' , image:school , productLink:'/school',id:8 },
    { title:'Get you blockbusters' , image:strange , productLink:'/movies',id:9 },
    { title:'Cosmetics' , image:controller , productLink:'/cosmetics',id:10 },
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
         
          <Link to={product.productLink}>
          <button type="button" class="btn btn-primary">Buy Now</button>
        
         
         </Link>   
         
       </div>
     </div>
     ))}
     
    </div>
  )
}

export default Cards