import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{'fontFamily': 'Bitter, sans-serif'}}>
            <a href="/" className="navbar-brand">Jack Kim</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <a href="/project" className="nav-link">PROJECTS</a>
                    </li>
                    {/*
                    이유는 모르겠는데 a 태그 대신 NavLink 쓰면 햄버거 메뉴가 저절로 안접힘 리다이렉트했을때
                    navbar-nav 붓스트랩에서 제공하는 css가 NavLink하고 연결되어 있지 않아서? 안되는거 같음
                    <li>
                        <a href="/crud" className="nav-link">CRUD Project</a>
                    </li>
                    */}
                    <li>
                        <Link to="/pic/Resume.pdf" target="_blank" className="nav-link">
                            RESUME
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;