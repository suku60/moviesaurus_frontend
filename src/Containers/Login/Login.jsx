import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import './Login.css';
import LoginRegisterButton from "../../Components/LoginRegisterButton/LoginRegisterButton";


import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

const Login = (props) => {


        let desiredView = useNavigate();

        // Hooks

        const [userData, setUserData] = useState({
            username: "",
            password: ""
        });

        const [errorMessage, setErrorMessage] = useState("");
    
        const [displayLoginButton, setDisplayLoginButton] = useState("none")
        
        const [displayName, setDisplayName] = useState("");    
        const [displayPass, setDisplayPass] = useState("");

        
        const [displayValidResponse, setDisplayValidResponse] = useState("none");
        const [displayErrorResponse, setDisplayErrorResponse] = useState("none");
        const [displayLoginInputs, setDisplayLoginInputs] = useState("flex");

        useEffect(()=> {
//  aquí iba esto: if(props.passport?.token !== "" && props.passport?.rol === false) // pero, al parecer, hace que pete la memoria
          if(props.passport?.token !== ""){
      
              desiredView("/movies");
          }});
      
        useEffect(()=>{    
        
      },[displayLoginButton, displayValidResponse, displayErrorResponse, displayLoginInputs]);
    
        // HANDLERS:
    
        const showLoginButton = (e) => {
           if(userData.username !== "" && userData.password !== ""){
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

          // Local components functions

          const userLogin = async () =>{

            let dataBody = {
              username: userData.username,
              password: userData.password
            }
      
            try  {
      
              let dataResponse = await axios.post("http://localhost:3000/users/login", dataBody);

              console.log("this is dataresponse", dataResponse)

            if(dataResponse.data?.token !== undefined){

              props.dispatch({type: LOGIN, payload: dataResponse.data})   
              
              setDisplayValidResponse("flex");
              setDisplayLoginInputs("none");

              setTimeout(() => {
                desiredView("/profile")
              }, 100);

            }else{

              setDisplayErrorResponse("flex")
              setDisplayLoginInputs("none");

              setTimeout(() => {
                setDisplayErrorResponse("none")
              setDisplayLoginInputs("flex");

              }, 1500);
            }

            }catch(errorDisplay) {

              setErrorMessage(errorDisplay)
            }
            
          };

    return (
        <div className="box_login animation_webpage_toright">
            <div className="full_form_box_login" style={{display : displayLoginInputs}}>
                <div className="full_form_box_login_container" id="mid_form_box_login">    
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayName}} onClick={()=>{changeDisplayName()}}>username
                        </div>
                        <div className="input_box">
                            <input type="username" name="username" id="input_name" title="username" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e); showLoginButton(e)}}/>
                            <div className="input_box_back"  onClick={()=>{changeDisplayName()}}>hide
                            </div>
                        </div>
                    </div>  
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayPass}} onClick={()=>{changeDisplayPass()}}>password
                        </div>
                        <div className="input_box">
                            <input type="password" name="password" id="input_password" title="password" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e); showLoginButton(e)}} />
                            <div className="input_box_back"  onClick={()=>{changeDisplayPass()}}>hide
                            </div>
                        </div>
                    </div> 
               </div>
                <div className="full_form_box_login_container">
                        <div className="full_form_box_login_line" id="login_button" style={{display : displayLoginButton}} onClick={()=>{userLogin()}}>login
                        </div>
                      <LoginRegisterButton viewNameDisplay={"Not a member? Register here"} pathUrl={"/register"}/>
                </div>
            </div>
            <div className="box_login_response" style={{display : displayValidResponse}}>
               <div className="full_form_box_container_login" id="complete_message_login">login succesfull<div id="name_display">
               </div>
                <br/>
                welcome <div id="username_display">{userData.username}.</div><br/>
               <div className="full_form_box_container" id="complete_message_login">you will be redirected to the main page
               </div>
            </div>
            </div>
            <div className="box_login_response_error" style={{display : displayErrorResponse}}>
               wrong data, try to log in again
            </div>
        </div>
    );
};

export default connect((state) => ({
  passport: state.passport
}))(Login);