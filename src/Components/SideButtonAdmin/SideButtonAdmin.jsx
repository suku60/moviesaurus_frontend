import React from 'react';
import { useNavigate } from 'react-router-dom';


import {ReactComponent as AdminSvg} from '../../img/admin.svg'
import './SideButtonAdmin.css';
import '../Sidebar/Sidebar.css'

const SideButtonAdmin = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_admin_container"onClick={()=>pathFinder()}>
        {props.viewNameDisplay}
            <div className="icon_container">
                <AdminSvg/> 
            </div>
            <div className="icon_text" id="admin_background">admin
            </div>
        </div>
    )
};

// admin button will have to appear only when an admin logs + 
// need to expand sidebar height when this happens

export default SideButtonAdmin;