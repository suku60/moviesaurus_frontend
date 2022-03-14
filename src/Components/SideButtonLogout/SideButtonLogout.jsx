import React from 'react';
import { useNavigate } from 'react-router-dom';


import {ReactComponent as LogoutSvg} from '../../img/logout.svg'
import './SideButtonLogout.css';
import '../Sidebar/Sidebar.css'

const SideButtonLogout = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_home_container" onClick={()=>pathFinder()}>
        {props.viewNameDisplay}
            <div className="icon_container">
                <LogoutSvg/> 
            </div>
            <div className="icon_text" id="logout_background">logout
            </div>
        </div>
    )
};

export default SideButtonLogout;