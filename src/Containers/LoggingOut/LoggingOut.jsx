import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';

import '../../css/main.css';
 
 
const loggingOut = () => {
 s
    let navigate = useNavigate();
 
    useEffect(()=>{
        // let data = {

        // }
    props.dispatch({type: LOGOUT});

        setTimeout(() => {
           navigate("/");
        }, 1000);
 
    },[])
 
 
    return (
        <div className=''>logging out</div>
    )
}

export default connect((state)=>({
    passport: state.passport
}))(loggingOut);