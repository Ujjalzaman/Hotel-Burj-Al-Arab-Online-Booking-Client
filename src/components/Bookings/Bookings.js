import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const logged = loggedInUser.email;
    useEffect(() => {
        fetch('https://morning-falls-56463.herokuapp.com/bookings?email='+logged, {
            method : 'GET',
            headers : {
                "Content-Type": "application/json()",
                authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
          

            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h3>you have {bookings.length} bookings </h3>
            {
                bookings.map(book => <li>{book.name} from: {(new Date(book.checkIn).toDateString('dd/MM/yy'))} to: {(new Date(book.checkOut).toDateString('dd/MM/yy'))}</li>)
            }
        </div>
    );
};

export default Bookings;
