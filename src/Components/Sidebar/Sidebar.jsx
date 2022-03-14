import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


import './Sidebar.css';
import {ReactComponent as HomeSvg} from '../../img/home.svg'
import {ReactComponent as ProfileSvg} from '../../img/profile.svg'
import {ReactComponent as MoviesSvg} from '../../img/movies.svg'
import {ReactComponent as LogoutSvg} from '../../img/logout.svg'
import {ReactComponent as OrdersSvg} from '../../img/orders.svg'

import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';
import SideButtonHome from '../SideButtonHome/SideButtonHome';
import SideButtonProfile from '../SideButtonProfile/SideButtonProfile';
import SideButtonLogout from '../SideButtonLogout/SideButtonLogout';
import SideButtonOrders from '../SideButtonOrders/SideButtonOrders';
import SideButtonMovies from '../SideButtonMovies/SideButtonMovies';
import SideButtonAdmin from '../SideButtonAdmin/SideButtonAdmin';

const Sidebar = (props) => {

    if(!props.passport?.token){

        return (
           <div className='box_sidebar animation_sidebar'>
               <div className="sidebar_item_container">
                   <SideButtonHome viewNameDisplay={""} pathUrl={"/"}/>
                   <SideButtonProfile viewNameDisplay={""} pathUrl={"/profile"}/>
                   <SideButtonOrders viewNameDisplay={""} pathUrl={"/orders"}/>
                   <SideButtonMovies viewNameDisplay={""} pathUrl={"/movies"}/>
                   <SideButtonAdmin viewNameDisplay={""} pathUrl={"/logout"}/>
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