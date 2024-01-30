import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div className="bg-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 mt-3 d-flex justify-content-center">
                        <Link className="nav-link " to={"/"}><Logo tamano={230} /></Link>
                    </div>
                    <div className="col-lg-9 my-3 d-flex justify-content-center align-items-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fs-7 fw-medium uppercase" to={"/productos"}>Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fs-7 fw-medium uppercase" to={"/categoria/buzos"}>Buzos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fs-7 fw-medium uppercase" to={"/categoria/remeras"}>Remeras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fs-7 fw-medium uppercase" to={"/categoria/pantalones"} >Pantalones</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fs-7 fw-medium uppercase" to={"/categoria/zapatillas"} >Zapatillas</NavLink>
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
