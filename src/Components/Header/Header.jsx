import React from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import './Header.css';

const Header = () => {
    return (
       <div className='box_header'>
           <NavigationButton viewNameDisplay={"Home"} pathUrl={"/"}/>
       </div>
    )
};

export default Header;