'use client'

import '../styles/login.css';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import RoleSelector from './RoleSelection';
import { useState } from 'react';

const LoginComponent = function() {
    const [role, setRole] = useState("");
    const router = useRouter();
    console.log(role)

    return (
    <div>
        {/* Main Heading */}
        <h1 className="login-heading">Rideshare Application</h1>
        {/* Purpose Heading */}
        <h3 className='login-purpose'>Login Page</h3>

        {/* Role */}
        <div className='role-div'>
            <RoleSelector avRoles={['Admin', 'Rider', 'Driver']} roleSelector={setRole}/>
        </div>

        {/* Login Input Part */}
        <div>
            {/* Email ID */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="Email ID goes here" 
                label="Email ID"
            />

            {/* Password */}
            <TextField 
                sx={{
                    margin: "25px 15%",
                    width: "70%"
                }} 
                placeholder="Password goes here" 
                label="Password"
                type='password'
            />


            {/* Login Button and Register Button*/}
            <div className='login-buttons'>
                <div className='login-submit'>
                    <Button variant="contained"> Submit </Button>
                </div>
                <div className='login-register-btn'>
                    <p>New to join?</p>
                    <Button variant="contained"
                            onClick={() => router.push("/auth/register")}
                        >Register
                    </Button>
                </div>
            </div>

        </div>
    </div>)
}

export default LoginComponent;
