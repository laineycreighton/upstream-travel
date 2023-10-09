//----- IMPORTS -----//
import { Link } from 'react-router-dom'

//CSS
import '../assets/css/NavBar.css';

//----- EXPORTS -----//
export default function NavBar() {
    return (
        <nav className="nav-bar">
            <h2>UpstreamTravel</h2>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    );
}