import arrayProductos from "../json/productos.json"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { id } = useParams(); //Capturar los parámetros de la url

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            let newProductos = id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos;

            if (newProductos.length > 0) {
                resolve(newProductos);
            } else {
                reject("Error! No se encontraron productos!");
            }
        })

        promesa.then(data => {
            setProductos(data)
        })

    }, [id]);

    return (
        <div className="container">
            <div className="row my-4">

                {productos.map(item => (
                    <div key={item.id} className="col-md-3 my-2">
                        <div className="card border-0 text-center ">
                            <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                                <img src={item.image} className="card-img-top" alt={item.title} />
                                <div className="card-body lh-sm">
                                    <h5 className="card-title titulo-card">{item.title}</h5>
                                    <p className="card-text precio-card"><b>${item.price}</b></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer;