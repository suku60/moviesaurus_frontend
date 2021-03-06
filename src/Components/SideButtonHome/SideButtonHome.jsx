import React from 'react';
import { useNavigate } from 'react-router-dom';


import {ReactComponent as HomeSvg} from '../../img/home.svg'
import './SideButtonHome.css';
import '../Sidebar/Sidebar.css'

const SideButtonHome = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_home_container" onClick={()=>pathFinder()}>
            {props.viewNameDisplay}
            <div className="icon_container">
                <HomeSvg/> 
            </div>
            <div className="icon_text"id="home_background">home
            </div>
        </div>
    )
};

export default SideButtonHome;