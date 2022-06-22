import NavBars from "../navbar/NavBars"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1>Turismo </h1>
      </Link>
      <NavBars
        inHeader={true}
        laClase="navBars-header"
      />
    </header>
  )
}

export default Header