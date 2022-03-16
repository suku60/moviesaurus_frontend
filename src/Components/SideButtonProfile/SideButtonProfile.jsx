import React from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';


import {ReactComponent as ProfileSvg} from '../../img/profile.svg'
import './SideButtonProfile.css';
import '../Sidebar/Sidebar.css'

const SideButtonProfile = (props) => {

    console.log("props here", props.passport)
    let displayUsername = props.passport?.username;

    console.log("username is...", displayUsername)

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_home_container"onClick={()=>pathFinder()}>
            <div className="icon_container">
                <ProfileSvg/> 
            </div>
            <div className="icon_text" id="profile_background">{displayUsername}
            </div>
        </div>
    )
};

export default connect((state) => ({
    passport: state.passport
}))(SideButtonProfile);