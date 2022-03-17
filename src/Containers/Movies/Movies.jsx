import React, {useEffect, useState} from "react";
import './Movies.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";


const Movies = (props) => {

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");
    
    useEffect(()=> {

    if(props.passport?.token === ""){

        desiredView("/");
    }});

    return (
        <div className="movies_box">
           

                
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport
}))(Movies);