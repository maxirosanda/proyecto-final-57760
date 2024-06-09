import React, { useEffect, useState } from 'react'
import { collection,getDocs,getFirestore } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        (async ()=>{
            const db = getFirestore()
            const docsRef = collection(db,"products")
            const querySnapshop = await getDocs(docsRef)
            setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
        })()
    },[])

  return (
    <div>
        {products.map(product => <ItemList key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemListContainer