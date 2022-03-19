import React from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';


import {ReactComponent as ProfileSvg} from '../../img/profile.svg'
import './SquareButtonProfile.css';
import '../Sidebar/Sidebar.css'

const SquareButtonProfile = (props) => {

    let displayUsername = props.passport?.username;

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_box_container_square" onClick={()=>pathFinder()}>
            <div className="icon_container_square">
                <ProfileSvg/> 
            </div>
            <div className="icon_text_square" id="profile_background_square">{displayUsername}
            </div>
        </div>
    )
};

export default connect((state) => ({
    passport: state.passport
}))(SquareButtonProfile);