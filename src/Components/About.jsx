import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
//rafce
const About = () =>{
    return (
        <div>
            <h1>About us page</h1>
            <p>This is namaste react tutorial</p>
            <Outlet/>
            <Profile/>
        </div>
    );
}
export default About;
