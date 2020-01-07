import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{'fontFamily': 'Bitter, sans-serif'}}>
            <a href="/" className="navbar-brand">Jack Kim</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ml-auto">
                    <li><a href="/crud" className="nav-link" style={{'color':'black'}}>CRUD Project</a></li>
                    <li><a href="/pic/Resume.pdf" target="_blank" className="nav-link" style={{'color':'black'}}>Resume</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;