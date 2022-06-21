import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div>
      <h1>CartWidget</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit sint minima cum minus? Numquam deleniti facilis, officiis perferendis quis sed voluptas nisi ipsa, magni, temporibus odio a commodi maiores!</p>
      <Link to="/checkout">Proceder con la compra</Link>
    </div>
  )
}
export default CartWidget