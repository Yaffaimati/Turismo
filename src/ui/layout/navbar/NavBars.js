import {NavLink} from "react-router-dom"

const NavBars = ({ inHeader, laClase }) => {

  return (
    <nav className={laClase}>
      <NavLink to="/cartwidget">cartwidget</NavLink>
      <NavLink to="/categoria/turismo">{inHeader ? "turismo" : "VGb"}</NavLink>
    </nav>
  )
}

export default NavBars
