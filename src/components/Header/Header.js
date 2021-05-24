import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import hotel from '../../images/header.png';
import double from '../../images/Double.png';
import family from '../../images/Family.png';
import single from '../../images/Single.png';
import logo from '../../images/icons/logo.png';
import { UserContext } from '../../App';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Nav from './Nav';

const Header = () => {
    
    return (
        <div>
            {/* nav bar  */}
            <Nav></Nav>


            <div className=" hotel-img-carosel">
                <Carousel>
                    <div>
                        <img src={hotel} className="img-fluid" />
                        <p className="legend">Burj Al Arab takes hotel design to a new level of modern luxury, and has also redefined the meaning of exceptional hospitality, both in Dubai and around the</p>
                    </div>
                    <div>
                        <img src={double} className="img-fluid" />
                        <p className="legend">A double bed is a bed that is wide enough for two people to sleep in. One room has a king-sized double bed and the others</p>
                    </div>
                    <div>
                        <img src={single} className="img-fluid" />
                        <p className="legend">Burj Al Arab takes hotel design to a new level of modern luxury, and has also redefined the meaning of exceptional hospitality, both in Dubai and around the</p>
                    </div>
                </Carousel>
            </div>
        </div>

    );
};

export default Header;

