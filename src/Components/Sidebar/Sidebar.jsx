import React, { useEffect } from 'react';


import './Sidebar.css';

import {connect} from 'react-redux';

import SideButtonHome from '../SideButtonHome/SideButtonHome';
import SideButtonProfile from '../SideButtonProfile/SideButtonProfile';
import SideButtonLogout from '../SideButtonLogout/SideButtonLogout';
import SideButtonOrders from '../SideButtonOrders/SideButtonOrders';
import SideButtonMovies from '../SideButtonMovies/SideButtonMovies';
import SideButtonAdmin from '../SideButtonAdmin/SideButtonAdmin';

const Sidebar = (props) => {

    useEffect(()=>{

    })

    if(!props.passport?.token){

        return (
           <div className='box_sidebar animation_sidebar'>
               <div className="sidebar_item_container">
                   <SideButtonHome viewNameDisplay={""} pathUrl={"/"}/>
                   <SideButtonProfile viewNameDisplay={""} pathUrl={"/profile"}/>
                   <SideButtonOrders viewNameDisplay={""} pathUrl={"/orders"}/>
                   <SideButtonMovies viewNameDisplay={""} pathUrl={"/movies"}/>
                   <SideButtonAdmin viewNameDisplay={""} pathUrl={"/admin"}/>
                   <SideButtonLogout viewNameDisplay={""} pathUrl={"/logout"}/>
               </div>
           </div>
           
        )
    }else {
        return(
            <div className="box_sidebar_notlogged"></div>
        )
        
    }
};


export default Sidebar;