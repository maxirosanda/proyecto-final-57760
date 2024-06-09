import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Productos</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/orders"><CartWidget/></Link>
    </nav>
  )
}

export default Navbar