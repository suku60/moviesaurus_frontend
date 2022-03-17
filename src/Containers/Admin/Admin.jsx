import React, {useEffect, useState} from "react";
import './Admin.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";


const Admin = (props) => {

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");
    
    useEffect(()=> {

    if(props.passport?.rol === undefined || props.passport?.rol === false){
        desiredView("/");
    }});

    return (
        <div className="box_orders">
           

                
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport
}))(Admin);