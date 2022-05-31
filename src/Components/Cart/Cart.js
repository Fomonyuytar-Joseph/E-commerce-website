import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart({cartItems ,onAdd ,onRemove ,onDelete}) {
    console.log(cartItems)
    var Total =  cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    console.log(Total)
    const {title}=cartItems
    console.log(title)
  return (
      <div>
       <div className='d-flex flex-row justify-content-around'>
       <div class=""><h4><b>Shopping Cart</b></h4></div>
       <div class="align-self-center text-right text-muted">{cartItems.length} items</div>

       </div>

       





    {cartItems.length === 0 && <div style={{marginTop:'20px'}}>Cart is empty</div>}
    {
        cartItems.map((item)=>(
          <div class="card" key={item.id} style={{width:'100vw'}}>
          <div class="row border-top border-bottom">
                           <div class="row main align-items-center">
                               <div class="col-2"><img class="img-fluid rounded-start height-auto pt-5 cartImage" src={item.image} alt=''/></div>
                               <div class="col-2">
                                   
                                   <div class="row">{item.title}</div>
                               </div>
                               <div class="col-2">
            <button className='qtyBtn'onClick={() => onRemove(item)}>-</button>{item.qty}<button className='qtyBtn' onClick={() => onAdd(item)}>+</button>
                               </div>
                               <div class="col">{item.qty} x {item.price.toLocaleString('en-US')}  FCFA</div>
                               <div className='col '><button className='qtyBtn' onClick={() => onDelete(item)} >x</button></div>
                           </div>
                       </div>
            </div>
   
        )
        
        )
    }
    
    {cartItems.length !== 0 && (
      <>
       <div class="d-flex justify-content-around total" >
                        <div class="">TOTAL PRICE</div>
                        <div class=" text-right">{Total.toLocaleString('en-US')} FCFA</div>
                        <div> <button className='checkoutbtn'>
                        <Link to="/Checkout" style={{textDecoration:'none',color:'white'}}>
                           Checkout
                           </Link>
</button></div>
                    </div>
                    
                
      </>
    )}
    </div>
    
  )
}

export default Cart