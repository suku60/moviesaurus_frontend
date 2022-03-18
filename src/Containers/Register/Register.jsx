import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
import './Register.css';
import {validations} from '../../utilities';

import CancelButton from "../../Components/CancelButton/CancelButton";

const Register = (props) => {

    let desiredView = useNavigate();

    // HOOKS HERE: These are the data that the website will be reading continiously

    const [userData, setUserData] = useState({
        name: "",
        birthdate: "",
        username: "",
        password: "",
        email: ""
    });

    const [validationMessage, setValidationMessage] = useState("");

    const [displayName, setDisplayName] = useState("");    
    const [displayBirth, setDisplayBirth] = useState("");    
    const [displayUser, setDisplayUser] = useState("");  
    const [displayPass, setDisplayPass] = useState("");  
    const [displayEmail, setDisplayEmail] = useState("");
    const [transparency, setTransparency] = useState("flex");

    
    const [displayRegisterButton, setDisplayRegisterButton] = useState("none");
    const [processingMessage, setProcessingMessage] = useState("none")
    const [hideForm, setHideForm] = useState("flex");

    const [displayWarmWelcome, setDisplayWarmWelcome] = useState("90");

    // useEffect: First one will execute itself when the app runs
    // second one will be updated everytime a hook gets data

    useEffect(()=> {

      if(props.passport?.token !== "" && props.passport?.rol === false){
  
          desiredView("/movies");
      }});
  
    useEffect(()=>{

    
  },[displayRegisterButton, displayWarmWelcome]);

    // HANDLER:

    const showRegisterButton = (e) => {
       if(userData.name !== "" && userData.birthdate !== "" && userData.username !== "" && userData.password !== "" && userData.email !== ""){
        setDisplayRegisterButton("flex"); 
      }else{
        setDisplayRegisterButton("none")
      }
    }

    const fillUserData = (e) => {
        setUserData({...userData,
        [e.target.name]: e.target.value})
    };

    const changeDisplayName = () => {
      if(displayName === "none"){
        setDisplayName("flex")
      }else{
        setDisplayName("none")
      }

    }

    const changeDisplayBirth = () => {
      if(displayBirth === "none"){
        setDisplayBirth("flex")
      }else{
        setDisplayBirth("none")
      }

    }

    const changeDisplayUser = () => {
      if(displayUser === "none"){
        setDisplayUser("flex")
      }else{
        setDisplayUser("none")
      }

    }

    const changeDisplayPass = () => {
      if(displayPass === "none"){
        setDisplayPass("flex")
      }else{
        setDisplayPass("none")
      }
    }

    const changeDisplayEmail = () => {
      if(displayEmail === "none"){
        setDisplayEmail("flex")
      }else{
        setDisplayEmail("none")
      }
    }

    // LOCAL COMPONENTS FUNCTIONS

    const sendUserData = async () =>{

      // setHideForm("none");

      // setDisplayRegisterButton("none")

      // setProcessingMessage("flex")

      setValidationMessage("");

      let errorDisplay = "";

      let rawUserData = Object.entries(userData);

      // Hola David, dejo esta parte del código comentada puesto que no quiero incluir la verificación de pass en mi registro, ya que quiero quitarle esta facilidad
      // a quienes se registren, y que se aseguren bien de que están escribiendo la password correctamente. 
      
      // Raw data user will be the array we will get after error check

      // --------------------   PASSWORD ERROR CHECKER

      // if(userData.password !== userData.password2){

      //   return (setValidationMessage("Both password fields must match"));

      // }else{
      //   setValidationMessage("");
      // }

      // -------------------- Birthdate function: 3 different inputs with 3 fields = 2(day)/2(month)/4(year)
      // all 3 combined make a whole date (find dataType that is useful for this)

      // if(userData.birthdate !== ){

      //   return (setValidationMessage("Both password fields must match"));

      // }else{
      //   setValidationMessage("");
      // }

      for(let field of rawUserData){

        // error / validations

        errorDisplay = validations(field[0],field[1]);

        if(errorDisplay !== "valid"){
          setValidationMessage(errorDisplay);
          return;

          // when the validations are not ok, we're not going to allow the register

        };
      };

      // Build the body for the post data send.

      let dataBody = {
        name: userData.name,
        birthdate: userData.birthdate,
        username: userData.username,
        password: userData.password,
        email: userData.email
      }

      try  {

        let dataResponse = await axios.post("http://localhost:3000/users/new", dataBody);
      
      setDisplayWarmWelcome("100");
        
      
      setHideForm("none");

      setDisplayRegisterButton("none")

      setProcessingMessage("flex")

      setTimeout(() => {
        desiredView("/login")
      }, 6600);

      }catch(errorDisplay) {
      
      }
      
    };

  return (
    <div className="box_register animation_webpage_toright">
        <div className="full_form_box animation_webpage_toright">
            <div className="full_form_box_container" id="complete_message" style={{display: hideForm}}>please complete form to register
            </div>
            <div className="full_form_box_container" id="tap_text" style={{display: hideForm}}>tap twice to fill the fields
            </div>
            <div className="full_form_box_container" id="mid_form_box" style={{display: hideForm}}>
                {/* {<pre>{JSON.stringify(userData, null,2)}</pre>} */}
                <div className="full_form_box_line">
                    <div className="form_box" style={{display : displayName}} onClick={()=>{changeDisplayName()}}>name
                    </div>
                    <div className="input_box">
                        <input type="name" name="name" id="input_name" title="name" 
                        autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}}/>
                        <div className="input_box_back" style={{display : transparency}}  onClick={()=>{changeDisplayName()}}>hide
                        </div>
                    </div>
                </div> 
                <div className="full_form_box_line">
                    <div className="form_box" style={{display : displayBirth}} onClick={()=>{changeDisplayBirth()}}>birthdate
                    </div>
                    <div className="input_box">
                    <input className="form_input" type="date" name="birthdate" id="input_birthdate" title="birthdate" 
                    autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}} />
                    <div className="input_box_back" style={{display : transparency}}  onClick={()=>{changeDisplayBirth()}}>hide
                    </div>
                </div>
                </div>
                <div className="full_form_box_line">
                    <div className="form_box" style={{display : displayUser}} onClick={()=>{changeDisplayUser()}}>username
                    </div>
                    <div className="input_box">
                        <input className="form_input" type="username" name="username" id="input_username" title="username" 
                        autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}} />
                        <div className="input_box_back" style={{display : transparency}}  onClick={()=>{changeDisplayUser()}}>hide
                        </div>
                    </div>
                </div> 
                <div className="full_form_box_line">
                    <div className="form_box" style={{display : displayPass}} onClick={()=>{changeDisplayPass()}}>password
                    </div>
                    <div className="input_box">
                    <input className="form_input" type="password" name="password" id="input_password" title="password" 
                    autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}} />
                    <div className="input_box_back" style={{display : transparency}}  onClick={()=>{changeDisplayPass()}}>hide
                    </div>
                </div>
                </div> 
                <div className="full_form_box_line">
                    <div className="form_box" style={{display : displayEmail}} onClick={()=>{changeDisplayEmail()}}>email
                    </div>
                    <div className="input_box">
                         <input className="form_input" type="email" name="email" id="input_email" title="email" 
                         autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}} />
                         <div className="input_box_back" style={{display : transparency}}  onClick={()=>{changeDisplayEmail()}}>hide
                         </div>
                    </div>
                </div> 
            </div> 
            <div className="full_form_box_container" id="bot_form_box">
                <div className="error_box">{<pre>{validationMessage}</pre>}</div>
                <div className="loading_circle_container" style={{display : processingMessage}}>
                  <div className="processing_message">processing</div>
                <div className="loading_circle animation_spin">
                    <div className="loading_circle_ring animation_spin">
                        <div className="loading_circle_inside animation spin"></div>
                        </div></div>
                    </div>
                <div className="full_form_box_line" id="register_button" onClick={()=>sendUserData()} onChange={(e)=>{showRegisterButton(e)}} style={{display : displayRegisterButton}}>register
                </div>
                <CancelButton viewNameDisplay={"cancel"} pathUrl={"/"}/>
            </div>
        </div>
        <div className="box_register_response" style={{zIndex : displayWarmWelcome}}>
            <div className="full_form_box_container" id="complete_message">welcome <div id="name_display">{userData.name}.</div><br/>
            your username is <div id="username_display">{userData.username}.</div><br/>
            </div>
            <div className="full_form_box_container" id="complete_message">you will be redirected to the main page
            </div>
            <div className="full_form_box_container" id="complete_message">login to confirm your account
            </div>
        </div>        
    </div>
  );
}

export default connect((state) => ({
  passport: state.passport
}))(Register);