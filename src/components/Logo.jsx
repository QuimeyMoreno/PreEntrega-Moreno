import LogoQuimey from "../assets/Logo.png";

const Logo = ({tamano}) => {
    return(
        <img src={LogoQuimey} alt="Logo Quimey" width={tamano} />
    )
}

export default Logo;