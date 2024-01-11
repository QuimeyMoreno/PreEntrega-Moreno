import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="bg-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 my-3 d-flex justify-content-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-light fs-7 fw-medium uppercase" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-7 fw-medium" href="#">Buzos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-7 fw-medium" href="#">Remeras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-7 fw-medium" >Pantalones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-7 fw-medium" >Zapatillas</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-end align-items-center">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBar;
