import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, removeItem, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col text-center">
                        <div className="col-md-12 d-flex justify-content-center align-items-center ">
                            <div className="border border-black">
                                <div className="py-2">
                                    <h1 className="m-3 composition-card uppercase fs-5">¡No se encontraron productos en el Carrito!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 d-flex justify-content-center align-items-center">
                    <div className="col-3 text-center">
                        <div className="detail-carrito ">
                            <Link to={"/"} className="btn uppercase font-carrito ">Volver a la página principal</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-12 cesta mt-4">
                    <div className="m-4">
                        <h5 className="uppercase">Cesta ({CantTotalProductos()})</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                {cart.map(product =>
                    <div key={product.id} className="col-3 margin-padding">
                        <div className="border-cesta m-0 p-0" >
                            <img src={product.image} className="card-img-top img-fluid" alt={product.description} />
                            <div className="card-body p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="m-2 composition-card">{product.title} </p>
                                    <a href="#" onClick={() => { removeItem(product.id) }}><i className="fa-solid fa-x color-icon"></i></a>
                                </div>
                                <p className="m-2 composition-card"><b>${product.price}</b></p>
                            </div>
                        </div>
                    </div>
                )
                }

            </div>
            <div className="row">
                <div className="col-lg-12 cesta">
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="m-3 pt-3">
                            <p className="uppercase letter">Total ${SumaTotalProductos()}</p>
                        </div>
                        <div className="estilos-continuar">
                            <div className="m-3 pt-3">
                                <Link to={"/checkout"} className="text-center text-light uppercase letter text-decoration-none">Continuar</Link>
                            </div>
                        </div>
                        <div className="estilos-vaciar">
                            <div className="m-3 pt-3">
                                <a href="#" className="text-decoration-none" onClick={() => { clear() }}>
                                    <p className="text-center text-dark uppercase letter">Vaciar</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
