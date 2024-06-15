import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ItemList.css'

const ItemList = ({product}) => {

    const navigate = useNavigate()

  return (
    <div className='card'>
        <h3>{product.title}</h3>
        <img src={product.image}/>
        <span>{product.description}</span>
        <span>{product.price}</span>
        <button onClick={()=>navigate("/detail/" + product.id)}>Detalle</button>
    </div>
  )
}

export default ItemList