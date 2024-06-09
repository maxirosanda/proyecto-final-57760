import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { collection,addDoc,getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const ItemCartContainer = () => {
    const {cart,totalPriceCart,clearCart} = useContext(CartContext)
    const navigate = useNavigate()

    const addOrder = async () => {

        const order = {
            buyer:{
                name:"Jose fernendez",
                phone:"123432552",
                email:"jose_fernandez@hotmail.com"
            },
            items:cart,
            total:totalPriceCart
        }

        const db = getFirestore()
        const docRef = collection(db,"orders")
        await addDoc(docRef,order)
        clearCart()
        navigate("/orders")

    }
  return (
    <div>
        {cart.map(item => <ItemCart key={item.id} item={item} />)}
        <p>Total: {totalPriceCart}</p>
        <button onClick={addOrder}>Finalizar compra</button>
    </div>
  )
}

export default ItemCartContainer