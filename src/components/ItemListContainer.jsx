// import arrayProductos from "../json/productos.json"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); //Capturar los parámetros de la url


    // Dejo comentada las dos formas para usarlas para futuros proyectos! Gracias!!
    // Llamada a Productos desde el archivo JSON
    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         let newProductos = id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos;
            
    //         resolve(newProductos);

    //     })

    //     promesa.then(data => {
    //         setProductos(data)
    //     })

    // }, [id]);


     // Subida de Productos a nuestra collection "items"
    //   useEffect(() => {
    //      const db = getFirestore();
    //      const itemsCollection = collection(db, "items");

    //      arrayProductos.forEach(producto => {
    //          addDoc(itemsCollection, producto);
    //      });

    //      
    //  }, []) 

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setProductos(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);


    return (
        <div className="container">
            <div className="row my-4">
           
            {loading ? <Loading /> : productos.map(item => (
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