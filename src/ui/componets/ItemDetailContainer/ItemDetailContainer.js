import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { productos } from "../../../assets/productos/productos"
import { SkeletonCard } from "../../../assets/productos/ProductLoader"


const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  
  
    useEffect(() => {
  
      setLoading(true)  
  
    
  
      new Promise((res, rej) => {
        setTimeout(() => {
          res(productos.find(productos => productos.id  === id))
        }, 2000)
      })
        .then(respuesta => {
          setLoading(false)
          setItem(respuesta)
        })
  
    },[id])
  
  
    return (
      <>
        {loading? <SkeletonCard/> : <ItemDetail item={item} />}
      </>
    )
  }  

  export default ItemDetailContainer