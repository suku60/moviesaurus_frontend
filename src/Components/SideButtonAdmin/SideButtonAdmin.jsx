import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import {ReactComponent as AdminSvg} from '../../img/admin.svg'
import './SideButtonAdmin.css';
import '../Sidebar/Sidebar.css'

const SideButtonAdmin = (props) => {

    let desiredView = useNavigate();
    let adminData = props.passport?.rol;

    console.log("checkadmindata", adminData)


    const [adminButton, setAdminButton] = useState("none")


    useEffect(()=> {
        
    },[]);
    
    useEffect(() => {

        console.log("rol before if...", props.passport?.rol)
       if(props.passport?.rol === false){
           
           setAdminButton("none")
       }else{
           setAdminButton("flex")
       }

    },[adminData]);

const pathFinder = () => {
    desiredView(props.pathUrl)
}


    return (
        <div className="sidebar_box_container_square" style={{display : adminButton}} onClick={()=>pathFinder()}>
        {props.viewNameDisplay}
            <div className="icon_container_square" id="admin_showoff_square">
                <AdminSvg/> 
            </div>
            <div className="icon_text_square" id="admin_background_square">admin
            </div>
        </div>
    )
};

// admin button will have to appear only when an admin logs + 
// need to expand sidebar height when this happens

export default connect((state) => ({
    passport: state.passport
}))(SideButtonAdmin);