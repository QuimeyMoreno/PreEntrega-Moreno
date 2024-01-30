import arrayProductos from "../json/productos.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";




const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams(); //Capturar los parámetros de la url

    useEffect(() => {
        const promesa = new Promise((resolve) => {

            let newProductos = arrayProductos.find(item => item.id === parseInt(id));
            resolve(newProductos);

        })

        promesa.then(data => {
            setItem(data)
        })

    }, [id]);

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;