import React from 'react'
import './Checkout.css'


function Checkout({Total}) {
  return (
    <>
    <div class="mycontainer">
    <div class="card">
        <div class="payment-details">
            <h3>Payment Details</h3>
            <p>Complete your purchase by providing your payment details.</p>
        </div>
        <div class="input-text">
            <input type="text" placeholder="luke@skywalker.com"/>
            <span>Email</span>
        </div>
        <div class="input-text">
            <input type="text"  placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" />
            <span>Card Detail</span>
        </div>
       
        
        <div class="input-text">
            <input type="text" placeholder="Username"/>
            <span>Card Holder name</span>
        </div>
        <div class="billing">
            <span>Billing Address</span>
            <input type="text" placeholder="My location"/>
           
            <div class="zip-state">
                <div class="zip">
                    <input type="text" placeholder="ZIP"/>
                </div>
                <div class="state">
                    <select>
                           <option>Select Region</option>
                           <option>South West</option>
                           <option>North West</option>
                           <option> West</option>
                           <option>South </option>
                           <option>East</option>
                           <option>Far North</option>
                           <option>Center</option>
                           <option>Adamawa</option>
                           
                    </select>
                </div>
                
            </div>
        </div>
        <div class="input-text">
            <input type="text" placeholder="645455878"/>
            <span>Phone Number</span>
        </div>
        <div class="input-text">
            <input type="text" placeholder="BLACKWEDNESDAY"/>
            <span>Discount code</span>
        </div>
        <div class="summary">
            <div class="text-data">
                {/* <p>Subtotal</p>
                <p>Discount</p> */}
                {/* <p>VAT(20%)</p>
                <h5>Total</h5> */}
            </div>
            <div class="numerical-data">
                {/* <p>$19.00</p>
                <p>$5.00</p> */}
                {/* <p>$2.80</p>
                <h5>$16.80</h5> */}
            </div>
        </div>
        <div class="pay">
       
            <button>Pay {Total.toLocaleString('en-US')} FCFA</button>
        </div>
        <div class="secure">
            <i class="fa fa-lock"></i>
            <p> Payments are secured and encrypted</p>
        </div>
        
              
    </div>
    
    </div>
    </>
  )
}

export default Checkout