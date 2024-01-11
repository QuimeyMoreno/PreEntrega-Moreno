const ItemListContainer = ({ greeting }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="alert alert-dark text-center my-3 py-3 bg-header text-light" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;