import React from 'react';
import { useNavigate } from 'react-router-dom';


import {ReactComponent as ProfileSvg} from '../../img/profile.svg'
import './SideButtonProfile.css';
import '../Sidebar/Sidebar.css'

const SideButtonProfile = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_home_container"onClick={()=>pathFinder()}>
            <div className="icon_container">
                <ProfileSvg/> 
            </div>
            <div className="icon_text" id="profile_background">{props.viewNameDisplay}
            </div>
        </div>
    )
};

export default SideButtonProfile;