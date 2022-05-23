import React from 'react'
import gh2 from'./gh2.jpg'
import './Cart.css'

function Cart({cartItems ,onAdd ,onRemove}) {
    console.log(cartItems)
    var Total =  cartItems.reduce((a, c) => a + c.qty * c.price, 0);;
    console.log(Total)
    const {title}=cartItems
    console.log(title)
  return (
      <div>
       <div className='d-flex flex-row justify-content-around'>
       <div class=""><h4><b>Shopping Cart</b></h4></div>
       <div class="align-self-center text-right text-muted">{cartItems.length} items</div>

       </div>

       





    {cartItems.length === 0 && <div>Cart is empty</div>}
    {
        cartItems.map((item)=>(
          <div class="card" key={item.id}>
          <div class="row border-top border-bottom">
                           <div class="row main align-items-center">
                               <div class="col-2"><img class="img-fluid rounded-start height-auto pt-5 cartImage" src={item.image}/></div>
                               <div class="col-2">
                                   
                                   <div class="row">{item.title}</div>
                               </div>
                               <div class="col-2">
            <button className='qtyBtn'onClick={() => onRemove(item)}>-</button>{item.qty}<button className='qtyBtn' onClick={() => onAdd(item)}>+</button>
                               </div>
                               <div class="col">{item.qty} x ${item.price.toFixed(2)} </div>
                               <div className='col '><button className='qtyBtn' onClick={() => onRemove(item)} >x</button></div>
                           </div>
                       </div>
            </div>
   
        )
        
        )
    }
    
    {cartItems.length !== 0 && (
      <>
       <div class="row total" >
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">{Total}</div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                
      </>
    )}
    </div>
    
  )
}

export default Cart