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

    let sidebarData = props.passport?.token;

    const [sidebarDisplay, setSidebarDisplay] = useState("none")

    // console.log("display before if", sidebarDisplay)

    useEffect(()=> {
        
    },[]);
    
    useEffect(() => {

       if(props.passport?.token !== undefined){
        //    console.log("consolelog de l .data.token dentro del if",props.passport?.data.token)
           
        //    console.log("consolelog de l token dentro del if",props.passport?.data.token) 
           setSidebarDisplay("flex")
        //    console.log("display inside if=", sidebarDisplay)

        if(sidebarData === ""){
            setSidebarDisplay("none")
        }

    }
},[sidebarData]);

    // useEffect(() => {

    //     if(props.passport?.data?.token !== undefined){
    //         setSidebarDisplay("flex")     
 
    //  }},[props.passport?.data?.token]);
     
    

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
                   {/* <SideButtonHome viewNameDisplay={""} pathUrl={"/"}/> */}
                   <SideButtonProfile viewNameDisplay={props.passport?.data?.name} pathUrl={"/profile"}/>
                   <SideButtonOrders viewNameDisplay={""} pathUrl={"/orders"}/>
                   <SideButtonMovies viewNameDisplay={""} pathUrl={"/movies"}/>
                   <SideButtonAdmin viewNameDisplay={""} pathUrl={"/admin"}/>                   
                   <SideButtonLogout viewNameDisplay={""} pathUrl={"/logout"}/>
               </div>
           </div>
        )
    }
    

    export default connect((state) => ({
        passport: state.passport
    }))(Sidebar);
    