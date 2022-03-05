import React from "react";
import './Login.css';

const Login = () => {

    return (
        <div className="box_login">
            <div className="full_form_box_login">
                <div className="full_form_box_container" id="mid_form_box">    
                    <div className="form_box">EMAIL
                    </div>
                    <div className="form_box">PASSWORD
                    </div>
                </div>
                <div className="full_form_box_container">
                    <div className="full_form_box_line" id="login_button">login</div>
                </div>
            </div>
        </div>
    );
};

export default Login;