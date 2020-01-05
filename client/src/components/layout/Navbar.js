import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">    
                <ul className="nav">
                    <a className="nav-link active" href="/">Home</a>
                </ul>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/crud">CRUD project</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pic/Resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;