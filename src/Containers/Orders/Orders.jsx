import React, {useEffect, useState} from "react";
import './Orders.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";


const Orders = (props) => {

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");
    
    useEffect(()=> {

    if(props.passport?.token === ""){

        desiredView("/");
    }});

    return (
        <div className="orders_box animation_webpage_toright">                
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport
}))(Orders);