import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartWidget.css'

const CartWidget = () => {
    const {totalCuantityCart} = useContext(CartContext)
  return (
    <div className='cartWidget'>
      <FontAwesomeIcon className='iconCart' icon="fa-solid fa-cart-shopping" />
       <span className='counter'>{totalCuantityCart}</span>
       </div>
  )
}

export default CartWidget