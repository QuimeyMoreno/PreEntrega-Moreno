import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        <div>
           {CantTotalProductos() > 0 ? <Link to={"/cart"}  className="btn position-relative">
                <i className="fa-solid fa-cart-shopping color-icon fs-6"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill  color-icon">
                {CantTotalProductos()}
                </span>
            </Link> :  ""} 
            
            
        </div>
    )
}

export default CartWidget;