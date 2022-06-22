import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div>
      <h1>CartWidget</h1>
      <p></p>
      <Link to="/checkout">Realizar su reserva</Link>
    </div>
  )
}
export default CartWidget