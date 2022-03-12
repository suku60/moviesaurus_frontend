import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';
import LoginRegisterButton from "../../Components/LoginRegisterButton/LoginRegisterButton";


const Login = () => {

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

        
        const [displayErrorLogin, setDisplayErrorLogin] = useState("90");

        useEffect(()=>{

        },[]); 
    
        
        useEffect(()=>{
    
        
      },[displayLoginButton, displayErrorLogin]);
    
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

              console.log(dataBody, dataResponse)

              console.log("eltokenaquí, ---------------------------------",  dataResponse.data.token)

            if(dataResponse == "valid"){
              
              setTimeout(() => {
                desiredView("/")
              }, 1500);
            }else{
              
              setDisplayErrorLogin("100");

              setTimeout(() => {
                desiredView("/login")
              }, 2500);

            }

            }catch(errorDisplay) {
            
            }
            
          };

    return (
        <div className="box_login">
            <div className="full_form_box_login animation_webpage_toright">
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
                        {/* need to add the function */}
                        </div>
                        <LoginRegisterButton viewNameDisplay={"Not a member? Register here"} pathUrl={"/register"}/>
                </div>
            </div>
            <div className="box_login_response" style={{zIndex : displayErrorLogin}}>
            <div className="full_form_box_container_login" id="complete_message">welcome <div id="name_display">{userData.name}.</div><br/>
            your username is <div id="username_display">{userData.username}.</div><br/>
            </div>
            <div className="full_form_box_container" id="complete_message">you will be redirected to the main page

            </div>
        </div> 
        </div>
    );
};

export default Login;