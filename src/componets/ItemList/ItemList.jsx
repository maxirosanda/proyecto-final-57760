import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemList = ({product}) => {

    const navigate = useNavigate()

  return (
    <div>
        <h3>{product.title}</h3>
        <img src={product.image}/>
        <span>{product.precio}</span>
        <button onClick={()=>navigate("/detail/" + product.id)}>Detalle</button>
    </div>
  )
}

export default ItemList