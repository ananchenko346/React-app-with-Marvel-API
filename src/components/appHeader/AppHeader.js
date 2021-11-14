import './appHeader.scss';
import './navLink.css';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information catalog
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink end to="/" className="underline-one" style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'black' })}>Characters</NavLink></li>
                    /
                    <li><NavLink end to="/comics" className="underline-one" style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'black' })}>Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;