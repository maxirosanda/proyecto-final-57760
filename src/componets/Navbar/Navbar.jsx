import React,{useState,useEffect} from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import CustomSelect from '../CustomSelect/CustomSelect'
import { getFirestore,collection,getDocs } from 'firebase/firestore'

const Navbar = () => {

  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    (async ()=>{
        const db = getFirestore()
        const docsRef = collection(db,"categories")
        const querySnapshop = await getDocs(docsRef)
        setCategories(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
    })()
  },[])

  const handleCategorySelected = (id) => {
    if(id === "N66GkpmoU08ZdYtjQUBK"){
      navigate("/")
    }else{
      navigate("/category/" + id)
    }
   
  }

  return (
    <nav className='navbar'>
      <div className='links'>
          <Link className='link' to="/">Productos</Link>
          <Link className='link' to="/orders">Ordenes</Link>
          <Link className='link' to="/cart"><CartWidget/></Link>
      </div>
        {(location.pathname === "/" || location.pathname.includes("/category"))  &&
            <CustomSelect 
            handleCategorySelected={handleCategorySelected} 
            categories={categories}
            />
      }
  
    </nav>
   
  )
}

export default Navbar