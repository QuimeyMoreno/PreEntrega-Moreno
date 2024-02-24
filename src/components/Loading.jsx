const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center loader">
                    <div className="newtons-cradle">
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;