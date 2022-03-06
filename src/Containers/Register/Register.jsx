import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css';
import {validations} from '../../utilities';

const Register = () => {

    let desiredView = useNavigate();

    // HOOKS HERE: These are the data that the website will be reading continiously

    const {userData, setUserData} = useState({
        name: "",
        birthdate: "",
        username: "",
        password: "",
        email: ""
    });

    const [validationMessage, setValidationMessage] = useState("");

    // useEffect: First one will execute itself when the app runs
    // second one will be updated everytime a hook gets data

    useEffect(()=>{

    },[]); 

    
    useEffect(()=>{

    },[]);

    // HANDLER:

    const fillUserData = (e) => {
        setUserData({...userData,
        [e.target.name]: e.target.value})
    };

    const sendUserData = async = () =>{

      // We're going to declare empty errors and the array that will include the field's data.

      setValidationMessage("");

      let errorDisplay = "";

      let rawUserData = Object.entries(userData);

      // Raw data user will be the array we will get after error check

      if(userData.password !== userData.password2){

        return (setValidationMessage("Both password fields must match"));

      }else{
        setValidationMessage("");
      }

      for(let field of rawUserData){
        // error / validations
        errorDisplay = validations[field[0],field[1]]
      }





    };


      return(
        <div></div>
      );

    // return (
    //     <div className="register_view">
    //     <div className="full_form_box">
    //       <div className="full_form_box_container">PLEASE COMPLETE THE FORM TO REGISTER</div>
    //       <div className="full_form_box_container" id="mid_form_box"><div className="full_form_box_line">
    //         {/* INPUTS HAVE TO BE RENAMED */}
    //       <div className="form_box">NAME</div>
    //       <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
    //       </div>
    //       <div className="full_form_box_line"><div className="form_box">BIRTHDATE</div>
    //       <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
    //       </div>
    //       <div className="full_form_box_line"><div className="form_box">USERNAME</div>
    //       <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
    //       </div>
    //       <div className="full_form_box_line"><div className="form_box">PASSWORD</div>
    //       <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
    //       </div>
    //       <div className="full_form_box_line"><div className="form_box">EMAIL</div>
    //       <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
    //       </div>
    //       </div>
          
    //       <div className="full_form_box_container">
    //       <div className="full_form_box_line" id="register_button">register me</div>
    //       </div>
    //       </div>
    //   </div>
    // );
};

export default Register;
