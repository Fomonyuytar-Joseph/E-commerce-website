import React from 'react'
import './CartFooter.css'

function CartFooter() {
  return (
    <div className="main-footer myfooter">
    <div className="container">
      
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
  )
}

export default CartFooter