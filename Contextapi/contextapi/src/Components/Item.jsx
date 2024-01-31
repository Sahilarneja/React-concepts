import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../Context/Cart'

const Item = (props) => {
    const cart=useContext(cartContext);
    console.log("Cart",cart);
  return (
    <div className='item-card'>
        <h4>{props.name}</h4>
        <p>Price: ${props.price}</p>
        <button>Add to Cart</button>
      
    </div>
  )
}

export default Item
