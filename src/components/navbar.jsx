import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/img/logo.jpg'

export const NavBar = () => {
    return (
        <header className="th-header">
            <div className="container th-container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="header-logo" >
                            <Link to="/">
                                <img src={logo} alt="CabJun" className='w-[100px] h-[100px]'/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-auto">
                        <nav className="main-menu onepage-nav mobile-menu-active">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/OurServices">Services</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                        {/* <button className="th-menu-toggle d-inline-block d-lg-none">☵</button> */}
                    </div>
                </div>
            </div>
        </header>
    );
};
