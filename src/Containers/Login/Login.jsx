import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';
import LoginRegisterButton from "../../Components/LoginRegisterButton/LoginRegisterButton";

import NavigationButton from "../../Components/NavigationButton/NavigationButton";
import CancelButton from "../../Components/CancelButton/CancelButton";


const Login = () => {

        let desiredView = useNavigate();

        // Hooks

        const [userCredentials, setUserCredentials] = useState("");
        const [userData, setUserData] = useState({
            username: "",
            password: ""
        });
        const [errorMessage, setErrorMessage] = useState("");


        const fillUserData = (e) => {
            setUserData({
                ...userData,
                [e.target.name]: e.target.value
            })
        };

    return (
        <div className="box_login">
            <div className="full_form_box_login">
                <div className="full_form_box_container" id="mid_form_box">    
                   <div className="full_form_box_line">
                       <div className="form_box" id="box_username">
                       username</div>
                       <input className="form_input" type="username" name="username" id="input_username" title="username" 
                       autoComplete="off" onChange={(e)=>{fillUserData(e)}}/>
                    </div> 

                    <div className="full_form_box_line">
                       <div className="form_box" id="box_password">
                       password</div>
                       <input className="form_input" type="password" name="password" id="input_password" title="password" 
                       autoComplete="off" onChange={(e)=>{fillUserData(e)}}/>
                    </div> 
                </div>
                <div className="full_form_box_container">
                    <div className="full_form_box_line" id="login_button">login</div>
                    <LoginRegisterButton viewNameDisplay={"Not a member? Register here"} pathUrl={"/register"}/>
                    <CancelButton viewNameDisplay={"cancel"} pathUrl={"/"}/>
                </div>
            </div>
        </div>
    );
};

export default Login;