import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';


import {ReactComponent as LogoutSvg} from '../../img/logout.svg'
import './SideButtonLogout.css';
import '../Sidebar/Sidebar.css'

const SideButtonLogout = (props) => {

    let desiredView = useNavigate();

    const [logoutAdviseDisplay, setLogoutAdviseDisplay] = useState("none")

    const logMeOut = () => {
        props.dispatch({ type: LOGOUT});

        setTimeout(()=> {
            setLogoutAdviseDisplay("flex")
            console.log("hola tengo que ser flex:", logoutAdviseDisplay)
            desiredView("/")
            
        }, 2000)
    }

    return (
        <div>
            <div className="sidebar_home_container" onClick={()=>logMeOut()}>
        {props.viewNameDisplay}
            <div className="icon_container">
                <LogoutSvg/> 
            </div>
            <div className="icon_text" id="logout_background">logout
            </div>
            </div>
            <div className="logout_advise" style={{display : logoutAdviseDisplay}}>logging out...</div>
        </div>
    )
};

export default connect((state) => ({
    passport: state.passport
}))(SideButtonLogout);