import {Link,NavBarsLink} from "react-router-dom"

const NavBars = ({ inHeader, laClase }) => {

  return (
    <nav className={laClase}>
      <NavBarsLink to="/cartwidget">cartwidget</NavBarsLink>
      <NavBarsLink to={inHeader ? "/categoria/jewelery" : "http://facebook.com"}>{inHeader ? "jewelery" : "facebook"}</NavBarsLink>
      <NavBarsLink to="/categoria/electronics">{inHeader ? "electronics" : "instagram"}</NavBarsLink>
      <NavBarsLink to="/categoria/clothing">{inHeader ? "clothing" : "linkedin"}</NavBarsLink>
    </nav>
  )
}

export default NavBars
