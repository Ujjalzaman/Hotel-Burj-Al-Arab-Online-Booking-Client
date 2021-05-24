import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Bookings.css';

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const logged = loggedInUser.email;
    useEffect(() => {
        fetch('https://morning-falls-56463.herokuapp.com/bookings?email=' + logged, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json()",
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })


            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            {bookings.length ?
                <div div className="container" >
                <div className="container p-5">
                    <h3 className="text-primary">YOUR BOOKING IS - {bookings.length}</h3>
                </div>
                {
                    bookings.map(book => <li className="booklist text-secondary">{book.name} from: {(new Date(book.checkIn).toDateString('dd/MM/yy'))} to: {(new Date(book.checkOut).toDateString('dd/MM/yy'))}</li>)
                }
                </div >
 
            :<div className="container">
                <p>Loading...</p>
            </div>

            }

        </div>

    );
};

export default Bookings;
