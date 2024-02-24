//import arrayProductos from "../json/productos.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";




const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); //Capturar los parámetros de la url

    // Dejo comentada las dos formas para usarlas para futuros proyectos! Gracias!!
    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {

    //         let newProductos = arrayProductos.find(item => item.id === parseInt(id));
    //         resolve(newProductos);

    //     })

    //     promesa.then(data => {
    //         setItem(data)
    //     })

    // }, [id]);

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id]);

    return (
        <>
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer;