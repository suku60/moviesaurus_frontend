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
    
        const [displayLoginButton, setDisplayLoginButton] = useState("none");
        
        const [displayName, setDisplayName] = useState("");    
        const [displayPass, setDisplayPass] = useState("");

        
        const [displayValidResponse, setDisplayValidResponse] = useState("none");
        const [displayErrorResponse, setDisplayErrorResponse] = useState("none");
        const [displayLoginInputs, setDisplayLoginInputs] = useState("flex");

        useEffect(()=>{

        },[]); 
    
        
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

              // something the web will do when an user is loged: a warm welcome

              // console.log("1 usedata here", userData)

              // console.log("2 respoesta aqui", dataResponse)

              // console.log("2.1 token?", dataResponse.data?.token)

            if(dataResponse.data?.token !== undefined){

              console.log("3 esto es lo que metemos en redux, solo el data:", dataResponse)
              props.dispatch({type: LOGIN, payload: dataResponse.data})   
              
              setDisplayValidResponse("flex");
              setDisplayLoginInputs("none");

              setTimeout(() => {
                desiredView("/")
              }, 4500);

            }else{

              // console.log("4 resultado por aqui", dataResponse)

              setDisplayErrorResponse("flex")
              setDisplayLoginInputs("none");

              setTimeout(() => {
                setDisplayErrorResponse("none")
              setDisplayLoginInputs("flex");

              }, 1500);
            }

            }catch(errorDisplay) {

              // setDisplayErrorResponse("flex")
              // setDisplayLoginInputs("none");

              // setTimeout(() => {
              //   desiredView("/login")
              // }, 1500);
              
            }
            
          };

    return (
        <div className="box_login">
            <div className="full_form_box_login animation_webpage_toright" style={{display : displayLoginInputs}}>
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
               <div className="full_form_box_container_login" id="complete_message">welcome <div id="name_display">
               </div>
                <br/>
                your username is <div id="username_display">{userData.username}.</div><br/>
               <div className="full_form_box_container" id="complete_message">you will be redirected to the main page
               </div>
            </div>
            </div>
            <div className="box_login_response_error" style={{display : displayErrorResponse}}>
               wrong data, try to log in again
            </div>
        </div>
    );
};

export default connect()(Login);