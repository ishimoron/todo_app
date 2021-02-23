import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="container-fluid">
            <div className="navbar-brand">
                TodoApp
            </div>
            <div className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </div>
        </div>
    </nav>
)