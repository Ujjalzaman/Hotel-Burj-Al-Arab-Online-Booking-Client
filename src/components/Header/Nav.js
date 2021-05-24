import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import hotel from '../../images/header.png';
import double from '../../images/Double.png';
import family from '../../images/Family.png';
import single from '../../images/Single.png';
import logo from '../../images/icons/logo.png';
import { UserContext } from '../../App';

const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
      
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src={logo} style={{ 'height': '50px' }} alt="" />
                    <a class="nabs navbar-brand ps-4 fw-bold text-uppercase"><Link to="/">Hotel Burj Al Arab</Link></a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-link navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/book">BOOK</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">BLOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">ABOUT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-uppercase" aria-current="page" href="#">Contact Us</a>
                            </li>


                        </ul>
                        <div class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item list-style-none">
                                    {loggedInUser.email ? <a class="nav-link active fs-5 text-success text-uppercase" aria-current="page" href="#">WELCOME {loggedInUser.name}</a>
                                        : <a class="nav-link active fs-5 text-primary text-uppercase" aria-current="page" href="/login">Login</a>
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
       
    );
};

export default Nav;