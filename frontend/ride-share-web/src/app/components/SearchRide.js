'use client'

import '../styles/login.css';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import RoleSelector from './RoleSelection';
import { useState } from 'react';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import Image from 'next/image';


const SearchRide = function() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState("");

    console.log(date, time);

    function updateDate(evt) {
        let dateString = evt.$d.toLocaleDateString("en-GB");
        setDate(dateString);
    }

    function updateTime(evt) {
        let timeString = evt.$d.toLocaleTimeString();
        setTime(timeString);
    }

    function findRides() {
        console.log("Finding rides now")
    }
   
    return (
    <div>
        {/* Logo */}
        <Image className='form-logos'
                src="/./hexaware_logo.jpg"
                width={200}
                height={100}
                alt="Rideshare app logo"/>

        {/* Main Heading */}
        <h1 className="login-heading">Rideshare Application</h1>
        {/* Purpose Heading */}
        <h3 className='login-purpose'>Search Rides</h3>

        {/* Registration Input Part */}
        <div>

            <div className='datetime-pick'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date of Trip"
                        onChange={(e) => updateDate(e)}/>
                 </LocalizationProvider>
            </div>

            <div className='datetime-pick'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="Time of Trip"
                    onChange={(d) => updateTime(d)}/>
                </LocalizationProvider>
            </div>


            {/* Email ID */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="Source goes here" 
                label="Source"
            />

            {/* First Name */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="Destination goes here" 
                label="Destination"
            />

            {/* Last Name */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="Time goes here" 
                label="Time"
            />

            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="Date goes here" 
                label="Date"
            />




            {/* Login Button and Register Button*/}
            <div className='register-buttons'>
                <div className='login-submit'>
                    <Button variant="contained" onClick={findRides}> Find Rides </Button>
                </div>
            </div>

        </div>
    </div>)
}

export default SearchRide;
