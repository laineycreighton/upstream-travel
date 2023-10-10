//----- IMPORTS -----//
import { Link } from 'react-router-dom'

//CSS
import '../assets/css/NavBar.css';

//----- EXPORTS -----//
export default function NavBar() {
    return (
        <nav className="nav-bar">
            <h2>UpstreamTravel</h2>
            <Link className='home-link' to="/">Home</Link>
            <Link className='about-link' to="/about">About Us</Link>
        </nav>
    );
}