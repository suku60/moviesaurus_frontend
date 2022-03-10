import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';
import LoginRegisterButton from "../../Components/LoginRegisterButton/LoginRegisterButton";


const Login = () => {

        let desiredView = useNavigate();

        // Hooks

        const [userCredentials, setUserCredentials] = useState("");
        const [userData, setUserData] = useState({
            username: "",
            password: ""
        });
        const [errorMessage, setErrorMessage] = useState("");

    
        const [displayLoginButton, setDisplayLoginButton] = useState("none")
        
        const [displayName, setDisplayName] = useState("");    
        const [displayPass, setDisplayPass] = useState("");

        useEffect(()=>{

        },[]); 
    
        
        useEffect(()=>{
    
        
      },[displayLoginButton]);
    
        // HANDLERS:
    
        const showLoginButton = (e) => {
           if(userData.name !== "" && userData.password !== ""){
            setDisplayLoginButton("flex"); 
          }else{
            setDisplayLoginButton("none")
          }
        }

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
      
          const changeDisplayPass = () => {
            if(displayPass === "none"){
              setDisplayPass("flex")
            }else{
              setDisplayPass("none")
            }
      
          }

    return (
        <div className="box_login">
            <div className="full_form_box_login">
                <div className="full_form_box_login_container" id="mid_form_box_login">    
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayName}} onClick={()=>{changeDisplayName()}}>name
                        </div>
                        <div className="input_box">
                            <input type="name" name="name" id="input_name_login" title="name" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e); showLoginButton(e)}}/>
                            <div className="input_box_back"  onClick={()=>{changeDisplayName()}}>hide
                            </div>
                        </div>
                    </div>  
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayPass}} onClick={()=>{changeDisplayPass()}}>password
                        </div>
                        <div className="input_box">
                            <input type="password" name="password" id="input_password_login" title="password" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e); showLoginButton(e)}} />
                            <div className="input_box_back"  onClick={()=>{changeDisplayPass()}}>hide
                            </div>
                        </div>
                    </div> 
                </div>
                    <div className="full_form_box_login_container">
                        <div className="full_form_box_login_line" id="login_button" style={{display : displayLoginButton}}>login
                        {/* need to add the function */}
                        </div>
                        <LoginRegisterButton viewNameDisplay={"Not a member? Register here"} pathUrl={"/register"}/>
                    </div>
            </div>
        </div>
    );
};

export default Login;