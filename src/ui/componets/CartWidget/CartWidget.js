import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const CartWidget = (props) => {

    return (
       <header> <nav>
             <div className="shop">
            <AiOutlineShoppingCart color="white" size={25} />
            <p>4</p>
        </div>
             <span className = "material-symbols-outlined"> shopping_cart </span>  
        </nav>
    </header>)
}
export default CartWidget 

