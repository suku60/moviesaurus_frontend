import React from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import './Header.css';

const Header = () => {
    return (
       <div className='box_header'>
           <NavigationButton viewNameDisplay={"Home"} pathUrl={"/"}/>
           <NavigationButton viewNameDisplay={"Login"} pathUrl={"/login"}/>
           <NavigationButton viewNameDisplay={"Register"} pathUrl={"/register"}/>
       </div>
    )
};

export default Header;