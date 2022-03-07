import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegisterButton.css';

const LoginRegisterButton = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
       <div className='box_LoginRegisterButton' onClick={()=>pathFinder()}>
           {props.viewNameDisplay}

       </div>
    )
};

export default LoginRegisterButton;