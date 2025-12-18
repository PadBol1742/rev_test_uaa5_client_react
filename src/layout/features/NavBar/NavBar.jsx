import { Link } from 'react-router'
import clsx from "clsx";


export default function NavBar({color}) {
    return (
        <nav className={clsx(["nav-bar"], color)}>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/destination">Nos Destinations</Link>
                </li>

            </ul>
        </nav>
    )
}
