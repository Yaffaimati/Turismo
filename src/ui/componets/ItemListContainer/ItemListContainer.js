import ItemCount from "../ItemCount/ItemCount"
import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import customFetch from "../../../assets/productos/customFech"
import productos from "../../../assets/productos/productos"

function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
      customFetch(3000, productos)
      .then(r => setItems(r))
  }, [items])


return (
  <div className>
      <ItemList products= {items}/>
  </div>
)
}
export default ItemListContainer