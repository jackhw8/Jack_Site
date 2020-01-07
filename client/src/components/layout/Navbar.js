import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light" style={{'fontWeight':'bold'}}>
            <a href="/" className="navbar-brand">Jack Kim</a>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>       

            <div className="navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li><a href="/crud" className="nav-link" style={{'color':'black'}}>CRUD Project</a></li>
                    <li><a href="/pic/Resume.pdf" target="_blank" className="nav-link" style={{'color':'black'}}>Resume</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;