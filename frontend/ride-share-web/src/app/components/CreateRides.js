'use client'

import '../styles/login.css';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CreateRide = function() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState("");
    const router = useRouter();

    console.log(date, time);

    function updateDate(evt) {
        let dateString = evt.$d.toLocaleDateString("en-GB");
        setDate(dateString);
    }

    function updateTime(evt) {
        let timeString = evt.$d.toLocaleTimeString();
        setTime(timeString);
    }

    function createRide() {
        console.log("Creating rides now");
        router.push("/rider/ride_detail/1");

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
        <h3 className='login-purpose'>Create Ride</h3>

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





            {/* Login Button and Register Button*/}
            <div className='register-buttons'>
                <div className='login-submit'>
                    <Button variant="contained" onClick={createRide}> Create </Button>
                </div>
            </div>

        </div>
    </div>)
}

export default CreateRide;
