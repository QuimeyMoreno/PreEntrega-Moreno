import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            console.log("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles.");
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
                        <button type="button" className="btn uppercase font-carrito " onClick={onAdd}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemCount;