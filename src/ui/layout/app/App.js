
import Main from "../main/Main.js"
import Header from "../header/Header.js"
import Footer from "../footer/footer.js"

import { BrowserRouter, useNavigate } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App


