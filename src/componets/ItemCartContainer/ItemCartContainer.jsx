import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useNavigate } from 'react-router-dom'
import './ItemCartContainer.css'
import EmptyItems from '../EmptyItems/EmptyItems'

const ItemCartContainer = () => {

    const {cart,totalPriceCart} = useContext(CartContext)
    const navigate = useNavigate()

  return (
    <div className='cartContainer'>
        {cart.length === 0 ?
          <EmptyItems message="carrito vacio"/>
          :
          <>
            <div className='itemCartContainer'>
              {cart.map(item => <ItemCart key={item.id} item={item} />)}
            </div>
            <div className='checkout'>
              <p>Total: {totalPriceCart}</p>
              <button onClick={()=>navigate("/checkout")}>Finalizar compra</button>
            </div>
          </>

         }
     
    </div>
  )
}

export default ItemCartContainer