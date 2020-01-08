import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{'fontFamily': 'Bitter, sans-serif'}}>
            <a href="/" className="navbar-brand">Jack Kim</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/*
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ml-auto">
                    <li activeClassName="active"><a href="/crud" className="nav-link" activeClassName="active">CRUD Project</a></li>
                    <li><a href="/pic/Resume.pdf" target="_blank" className="nav-link" activeClassName="active">Resume</a></li>
                </ul>
            </div>
            */}
        
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <a href="/crud" className="nav-link">CRUD Project</a>
                    </li>
                    <li>
                        <Link to="/pic/Resume.pdf" target="_blank" className="nav-link">
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;