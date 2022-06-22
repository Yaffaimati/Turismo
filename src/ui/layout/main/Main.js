
import ItemListContainer from "../../componets/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../../componets/ItemDetailContainer/ItemDetailContainer"
import CartWidget from "../../componets/CartWidget/CartWidget"
import Checkout from "../../componets/Checkout/Checkout"
import {Routes,Route} from "react-router-dom"

const Main = () => {

  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cartwidget" element={<CartWidget/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </main>
  )
}
 
 export default Main