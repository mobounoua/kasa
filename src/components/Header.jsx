import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <img src= {logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>Accueil</li>  
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}> 
                        <li>A Propos </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}
export default Header