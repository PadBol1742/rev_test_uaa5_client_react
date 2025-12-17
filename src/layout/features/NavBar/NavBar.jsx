import { Link } from 'react-router'

export default function NavBar() {
    return (
        <nav>
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
