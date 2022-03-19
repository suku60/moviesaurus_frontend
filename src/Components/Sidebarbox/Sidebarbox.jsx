import React, { useEffect, useState } from 'react';
import './Sidebarbox.css';

import { connect } from 'react-redux';

import SideButtonProfile from '../SideButtonProfile/SideButtonProfile';
import SideButtonLogout from '../SideButtonLogout/SideButtonLogout';
import SideButtonOrders from '../SideButtonOrders/SideButtonOrders';
import SideButtonMovies from '../SideButtonMovies/SideButtonMovies';
import SideButtonAdmin from '../SideButtonAdmin/SideButtonAdmin';

const Sidebarbox = (props) => { 

    let sidebarboxData = props.passport?.token;

    const [sidebarboxDisplay, setSidebarboxDisplay] = useState("none")


    useEffect(()=> {
        
    },[]);
    
    useEffect(() => {

       if(props.passport?.token !== undefined){
           
           setSidebarboxDisplay("flex")

        if(sidebarboxData === ""){
            setSidebarboxDisplay("none")
        }

    }
},[sidebarboxData]);
    
        return (
           <div className='box_sidebarbox ' style={{display : sidebarboxDisplay}}>
               <div className="sidebarbox_item_container">
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
    }))(Sidebarbox);
    