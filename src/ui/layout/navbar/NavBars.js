
import CartWidget from "../../componets/CartWidget/CartWidget"

const NavBars = () => { return (
  <header>
      <nav class="navbar navbar-expand-lg bg-light">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">Turismo</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div class="navbar-nav">
         <a class="nav-link active" aria-current="page" href="#">Valle</a>
         <a class="nav-link" href="#">VGB</a>
         <a class="nav-link" href="#">Santa Rosa</a>
         <a class="nav-link disabled">Los Reartes</a>
       </div>
     </div>
     <CartWidget/>
   </div>
 </nav>
 
 
  </header>
 
 
 ) }
 
 export default NavBars