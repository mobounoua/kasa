import { NavLink } from "react-router-dom";

const Error404 = () =>{
    return (
        <div className="error404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div className="home-link">
            <NavLink to="/">
                <p>Retourner sur la page d’accueil</p>
            </NavLink>
            </div>
        </div>
    )
}
export default Error404