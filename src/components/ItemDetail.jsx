import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-3 d-flex align-items-end ">
                    <div className="border border-black">
                        <div className="py-2">
                            <p className="m-3 composition-card">COMPOSICIÓN, CUIDADOS & ORIGEN</p>
                            <p className="m-3 composition-card">COMPOSICIÓN</p>
                            <p className="m-3 composition-card">{item.composition}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={item.image} alt={item.title} width={350} height={550} />
                </div>
                <div className="col-md-3 ">
                    <div className="border border-black">
                        <div className="py-2">
                            <p className="m-3 composition-card">{item.title}</p>
                            <p className="m-3 composition-card">{item.description}</p>
                            <p className="m-3 composition-card"><b>${item.price}</b></p>
                        </div>
                    </div>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;