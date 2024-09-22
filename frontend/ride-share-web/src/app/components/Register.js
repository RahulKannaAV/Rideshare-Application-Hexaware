'use client'

import '../styles/login.css';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import RoleSelector from './RoleSelection';
import { useState } from 'react';
import Image from 'next/image';


const RegisterComponent = function() {
    const [role, setRole] = useState("");
    const router = useRouter();

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
        <h3 className='login-purpose'>Register User</h3>

        {/* Role */}
        <div className='role-div'>
            <RoleSelector avRoles={['Rider', 'Driver']} roleSelector={setRole}/>
        </div>


        {/* Registration Input Part */}
        <div>
            {/* Email ID */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="New Email ID goes here" 
                label="Email ID"
            />

            {/* First Name */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="First Name goes here" 
                label="First Name"
            />

            {/* Last Name */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="Last Name goes here" 
                label="Last Name"
            />

            {/* Password */}
            <TextField 
                sx={{
                    margin: "20px 15%",
                    width: "70%"
                }} 
                placeholder="New Password goes here" 
                label="Password"
                type='password'
            />


            {/* Login Button and Register Button*/}
            <div className='register-buttons'>
                <div className='login-submit'>
                    <Button variant="contained"> Submit </Button>
                </div>
            </div>

        </div>
    </div>)
}

export default RegisterComponent;
