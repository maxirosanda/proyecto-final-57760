import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import ItemCartContainer from './componets/ItemCartContainer/ItemCartContainer'
import Navbar from './componets/Navbar/Navbar'
import CartProvider from './context/cart/CartProvider'
import OrderContainer from './componets/OrderContainer/OrderContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<ItemCartContainer/>}/>
              <Route path='/orders' element={<OrderContainer/>}/>
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
