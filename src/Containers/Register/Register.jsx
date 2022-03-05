import React from "react";
import './Register.css';

const Register = () => {

    return (
        <div className="register_view">
        <div className="full_form_box">
          <div className="full_form_box_container">PLEASE COMPLETE THE FORM TO REGISTER</div>
          <div className="full_form_box_container" id="mid_form_box"><div className="full_form_box_line">
            {/* INPUTS HAVE TO BE RENAMED */}
          <div className="form_box">NAME</div>
          <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
          </div>
          <div className="full_form_box_line"><div className="form_box">BIRTHDATE</div>
          <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
          </div>
          <div className="full_form_box_line"><div className="form_box">USERNAME</div>
          <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
          </div>
          <div className="full_form_box_line"><div className="form_box">PASSWORD</div>
          <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
          </div>
          <div className="full_form_box_line"><div className="form_box">EMAIL</div>
          <input className="form_input" type="name" name="name" id="name" title="name" placeholder="Name:" autoComplete="off" /*missing somehting here*//>
          </div>
          </div>
          
          <div className="full_form_box_container">
          <div className="full_form_box_line" id="register_button">register me</div>
          </div>
          </div>
      </div>
    );
};

export default Register;