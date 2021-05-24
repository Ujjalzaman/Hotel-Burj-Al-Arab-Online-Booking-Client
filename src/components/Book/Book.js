import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Bookings from '../Bookings/Bookings';
import Header from '../Header/Header';

const Book = () => {
    const { bedType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckIn = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };
    const handleCheckOut = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };
    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...selectedDate };
        fetch('https://morning-falls-56463.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <Header></Header>

            <div style={{ textAlign: 'center' }}>
                <div className="container p-5 mb-5">
                    <h2>Hey! {loggedInUser.name}</h2>
                    <h1>Let's book a {bedType} Room.</h1>
                    <p>Want a <Link to="/home">different room?</Link> </p>
                </div>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format=" dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Chech In Date picker inline"
                            value={selectedDate.checkIn}
                            onChange={handleCheckIn}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Check out Date picker dialog"
                            format="dd/MM/yyyy"
                            value={selectedDate.checkOut}
                            onChange={handleCheckOut}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                    </Grid>
                    <Button onClick={handleBooking} variant="contained" color="primary">
                        Book Now
                    </Button>

                </MuiPickersUtilsProvider>
                <Bookings></Bookings>

            </div>
        </div>
    );
};

export default Book;