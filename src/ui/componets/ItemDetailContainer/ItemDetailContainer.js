import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList.js"
import {productos} from "../assets/productos/productos.js"
import { ProductLoader } from "../assets/producti/ProductLoader"
import ItemCount from "../ItemCount/ItemCount.js"

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()
  
    useEffect(() => {
  
      setLoading(true)
  
      new Promise((res, rej) => {
        setTimeout(() => {
          res(category ? productos.filter((producto)=>{
            
            return producto.category == category
  
          }) : productos)
        }, 2000)
      })
        .then(resultado => {
          setItems(resultado)
          setLoading(false)
        })
        .catch(() => {
          
        })
  
    }, [category])
  
  
  
    return (
      <>
        {loading ? <ProductLoader /> : <ItemList items={items} />}
      </>
    )
  }
export default ItemDetailContainer