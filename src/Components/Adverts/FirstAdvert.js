import React from 'react'
import "./FirstAdvert.css"
import shoe3 from './images/shoe3.jpg' 




function FirstAdvert() {
  return (
    <div className='Parent'>
        <p>
            Get the best Shoes made by you favourite brands
        </p>
        <p> Get 50% off all products</p>
        <img  src={shoe3} alt='A nike shoe'/>
        
        <button>Shop Now </button>
    </div>
  )
}

export default FirstAdvert