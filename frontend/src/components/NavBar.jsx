import {Link} from 'react-router-dom';
import "../css/NavBar.css";
import {useUserContext} from "../contexts/UserContext";

function NavBar() {
    const {signed, signOut} = useUserContext();

    if (signed) {
        return <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <p>Welcome, User!</p>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/signout" className="nav-link" onClick={() => {signOut()}}>Sign Out</Link>
            </div>
        </nav>
    }

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            {}
            <Link to="/signin" className="nav-link">Sign In</Link>
        </div>
    </nav>
}

export default NavBar;