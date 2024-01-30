const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn  position-relative">
                <i className="fa-solid fa-cart-shopping color-icon fs-6"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill  color-icon">
                    3+
                </span>
            </button>
            
        </div>
    )
}

export default CartWidget;