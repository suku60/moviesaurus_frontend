import React, {useEffect, useState} from "react";
import './Profile.css';

import { connect } from "react-redux";


const Profile = (props) => {

    const [userData, setUserData] = useState({
        username: ""
    });

    const [displayLoginButton, setDisplayLoginButton] = useState("none");

    const [displayName, setDisplayName] = useState("");    


    const fillUserData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    };

    const changeDisplayName = () => {
        if(displayName === "none"){
          setDisplayName("flex")
        }else{
          setDisplayName("none")
        }
  
      }

    return (
        <div className="box_profile">
           <div className="box_profile_inner2" id="box_user">
                <div className="profile_title">your data</div>
                <div className="profile_name">{props.passport?.name}</div>
                <div className="profile_username">{props.passport?.username}</div>
                <br/>
                <div className="update_profile">
                    <div className="profile_title">update your name here</div>
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayName}} onClick={()=>{changeDisplayName()}}>name
                        </div>
                        <div className="input_box">
                            <input type="username" name="username" id="input_name" title="username" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e)}}/>
                            <div className="input_box_back"  id="hide_profile" onClick={()=>{changeDisplayName()}}>hide
                            </div>
                        </div>
                    </div>  
                </div>
                
           </div>
           
           <div className="box_profile_inner2" id="box_orders">
               <div className="orders_title">your active orders here</div>

               <div className="orders_data">

               </div>

                
           </div>
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport
}))(Profile);