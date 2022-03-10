import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css';
import {validations} from '../../utilities';
import CancelButton from "../../Components/CancelButton/CancelButton";

const Register = () => {

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
    const [displayRegisterButton, setDisplayRegisterButton] = useState("none");
    const [transparency, setTransparency] = useState("flex");

    // useEffect: First one will execute itself when the app runs
    // second one will be updated everytime a hook gets data

    useEffect(()=>{

    },[]); 

    
    useEffect(()=>{

    
  },[displayRegisterButton]);

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


    console.log(userData)

    // const changeDisplayRegisterButton = () => {
    //   if(userData.name !== "" && userData.birthdate !== "" && userData.username !== "" && userData.password !== "" && userData.email !== ""){
    //     setDisplayRegisterButton("flex")
    //   }else{
    //     setDisplayRegisterButton("none")
    //   }
    // }

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

      setValidationMessage("");

      let errorDisplay = "";

      console.log("ERRORDISPLAY1 HERE", errorDisplay)

      let rawUserData = Object.entries(userData);

      console.log("rawuserdata Inside senduserdata", rawUserData)


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

        console.log("RAWUSERDATA HERE", rawUserData)
        // error / validations
        errorDisplay = validations(field[0],field[1]);
console.log("ERROR DISPLAY", errorDisplay)
        if(errorDisplay !== "valid"){
          console.log("RAWUSERDATA HERE 2", rawUserData)
          setValidationMessage(errorDisplay);
          return;

          // when the validations are not ok, we're not going to allow the register

        };
      };

      console.log("si no aparezco no va bien ;(")

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
        
console.log("HELLO IM THE RESPONSE",dataResponse)

      setTimeout(() => {
        desiredView("/login")
      }, 1500);

      }catch(errorDisplay) {
      
      }
      
    };

    // const showInput =  () =>{

    // let box_element = 

    //   let input_element 

    //   let selectedBox = "box_" + boxName;


    //   // when activated, [1] detect div you're cliking 
    //   // [2] div clicked display = none
    //   // [3] div clicked has an input associated.
    //   // [4] associated input display: block
    //   // it will get a determined input (identified by name field) and will change it's css' style to display:flex, at the time that does the opposite for the name button.
    //   // or else we can show both and play with z index?
    //   // Make a small div sharing space with the input, duplicate second function, and you actually have a swith for the displays.

    // };

 // onClick={()=>showInput()} taken from the form boxes. Add laten when developed.

  
  return (
    <div className="box_register">
        <div className="full_form_box">
            <div className="full_form_box_container" id="complete_message">please complete form to register
            </div>
            <div className="full_form_box_container" id="tap_text">tap twice to fill the fields
            </div>
            <div className="full_form_box_container" id="mid_form_box">
                {<pre>{JSON.stringify(userData, null,2)}</pre>}
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
                    <input className="form_input" type="birthdate" name="birthdate" id="input_birthdate" title="birthdate" 
                    autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}} />
                    <div className="input_box_back" style={{display : transparency}}  onClick={()=>{changeDisplayBirth()}}>hide
                    </div>
                </div>
                </div>
                <div className="full_form_box_line">
                    <div className="form_box" id="form_birth" style={{display : displayBirth}} onClick={()=>{changeDisplayBirth()}}>ON DEVELOPEMENT
                    </div>
                    <div className="input_box">
                    <input className="form_input_small" type="birthdate2" name="birthdate_year" id="input_birth_year" placeholder="year" title="birthdate2" 
                    autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}} />
                    <input className="form_input_small" type="birthdate2" name="birthdate_month" id="input_birthdate2" placeholder="month" title="birthdate2" 
                    autoComplete="off" onChange={(e)=>{fillUserData(e); showRegisterButton(e)}} style={{display : transparency}} />
                    <input className="form_input_small" type="birthdate2" name="birthdate_day" id="input_birth_day" placeholder="day" title="birthdate2" 
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
                <div className="full_form_box_line" id="register_button" onClick={()=>sendUserData()} onChange={(e)=>{showRegisterButton(e)}} style={{display : displayRegisterButton}}>register
                </div>
                <CancelButton viewNameDisplay={"cancel"} pathUrl={"/"}/>
                <div className="error_box">{<pre>{validationMessage}</pre>}</div>
            </div>
        </div>
    </div>
  );
}

export default Register;
