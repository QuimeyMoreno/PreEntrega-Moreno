import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
            
        }
    }

    useEffect(() =>{
        setItemStock(stock)
    }, [stock]);

    return (
        <>
            <div className="row my-1">
                <div className="">
                    <div className="btn-group details-contador" role="group" aria-label="Basic example">
                        <button type="button" className="btn font-carrito" onClick={decrementar}>-</button>
                        <button type="button" className="btn font-carrito">{counter}</button>
                        <button type="button" className="btn font-carrito" onClick={incrementar}>+</button>
                    </div>
                    <div className="detail-carrito">
                        {itemAdded ? <Link to={"/cart"} className="btn uppercase font-carrito ">Terminar mi Compra</Link> : <button type="button" className="btn uppercase font-carrito " onClick={addToCart}>Agregar al Carrito</button>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemCount;