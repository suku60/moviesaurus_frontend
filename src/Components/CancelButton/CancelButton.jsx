import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CancelButton.css';

const CancelButton = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
       <div className='box_cancelButton' onClick={()=>pathFinder()}>
           {props.viewNameDisplay}

       </div>
    )
};

export default CancelButton;