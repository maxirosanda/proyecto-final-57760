import React, { useEffect, useState } from 'react'
import { collection,getDocs,getFirestore,query,where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const ItemListContainer = () => {

    const [products,setProducts] = useState([])
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{

        (async ()=>{
            setLoading(true)
            const db = getFirestore()
           
            if(!id){
              const docsRef = collection(db,"products")
              const querySnapshop = await getDocs(docsRef)
              setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            }else{
              const docsRef = collection(db,"products")
              const q = query(docsRef,where("categoryId","==",id))
              const querySnapshop = await getDocs(q)
              setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            }
            setLoading(false)

      

        })()

    },[id])

    if(loading) return <LoadingSpinner/>

  return (
          <div className='cardContainer'>
            {products.map(product => <ItemList key={product.id} product={product}/>)}
          </div>

  )
}

export default ItemListContainer