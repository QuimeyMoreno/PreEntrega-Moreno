import Logo from "./Logo";

const Footer = () => {
    return (
        <footer>
            <div className="border-footer alinear-footer">
                <div className="row mt-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        <Logo tamano={150}/>
                    </div>
                    <div className="col-md-12 text-center">
                        <p className="rights-reserved">
                            DEVELOPED BY QM © ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;