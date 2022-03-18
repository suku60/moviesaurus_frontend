import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CancelButton.css';
import '../../css/main.css';


const CancelButton = (props) => {
    
    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
       <div className='box_cancel_button animation_any_button'onClick={()=>pathFinder()}>
           {props.viewNameDisplay}

       </div>
    )
};

export default CancelButton;