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

const Sidebar = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    if(!props.passport?.token){

        return (
           <div className='box_sidebar animation_sidebar'>
               <div className="sidebar_item_container">
                   <SideButtonHome/>
                   <div className="sidebar_profile_container">
                       <div className="icon_container">
                           <ProfileSvg/> </div>
                     <div className="icon_text">profile</div>
                   </div>    
                   <div className="sidebar_orders_container">
                   <div className="icon_container">
                       <OrdersSvg/> </div>
                 <div className="icon_text">orders</div>
                   </div>
                   <div className="sidebar_movies_container">
                     <div className="icon_container">
                         <MoviesSvg/> </div>
                     <div className="icon_text">movies</div>
                   </div>
                   <div className="sidebar_logout_container">
                  <div className="icon_container">
                      <LogoutSvg/> </div>
                 <div className="icon_text">logout</div>
                   </div>
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