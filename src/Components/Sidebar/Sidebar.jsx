import React, { useEffect, useState } from 'react';
import './Sidebar.css';

import { connect } from 'react-redux';

import SideButtonHome from '../SideButtonHome/SideButtonHome';
import SideButtonProfile from '../SideButtonProfile/SideButtonProfile';
import SideButtonLogout from '../SideButtonLogout/SideButtonLogout';
import SideButtonOrders from '../SideButtonOrders/SideButtonOrders';
import SideButtonMovies from '../SideButtonMovies/SideButtonMovies';
import SideButtonAdmin from '../SideButtonAdmin/SideButtonAdmin';

const Sidebar = (props) => { 

    const [sidebarDisplay, setSidebarDisplay] = useState("flex")

    
    useEffect(() => {

       if(props.passport?.token === undefined){
           setSidebarDisplay("flex")     

    }});
    

    // useEffect(()=>{

    //     if (props.passport?.token === ""){
    //         setSidebarDisplay("none")
    //     }else{
    //         setSidebarDisplay("flex")
    //     }

    // },[setSidebarDisplay])

        return (
           <div className='box_sidebar animation_sidebar' style={{display : sidebarDisplay}}>
               <div className="sidebar_item_container">
                   <SideButtonHome viewNameDisplay={""} pathUrl={"/"}/>
                   <SideButtonProfile viewNameDisplay={props.passport?.user.name} pathUrl={"/profile"}/>
                   <SideButtonOrders viewNameDisplay={""} pathUrl={"/orders"}/>
                   <SideButtonMovies viewNameDisplay={""} pathUrl={"/movies"}/>
                   <SideButtonAdmin viewNameDisplay={""} pathUrl={"/admin"}/>                   
                   <SideButtonLogout viewNameDisplay={""} pathUrl={"/logout"}/>
               </div>
           </div>
        )
    }
    

export default connect()(Sidebar);