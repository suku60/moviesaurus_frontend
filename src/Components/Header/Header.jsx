import React, { useEffect, useState } from "react";
import axios from 'axios';
import NavigationButton from '../NavigationButton/NavigationButton';
import './Header.css';

// We're going to make the state of the header change when we're logged
// Hooks 

// const [credentials, setCredentials] = useState("");
// const [errorMessage, setErrorMessage] = useState("");



const Header = () => {

    // User with token return/view => Develop

    // User with no token return/view

    return (
       <div className='box_header'>
           <NavigationButton viewNameDisplay={"Home"} pathUrl={"/"}/>
           <NavigationButton viewNameDisplay={"Login"} pathUrl={"/login"}/>
           <NavigationButton viewNameDisplay={"Register"} pathUrl={"/register"}/>
       </div>
    )
};

export default Header;