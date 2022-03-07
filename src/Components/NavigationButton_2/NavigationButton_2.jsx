import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationButton_2.css';

const NavigationButton_2 = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
       <div className='box_navigationbutton_2' onClick={()=>pathFinder()}>
           {props.viewNameDisplay}

       </div>
    )
};

export default NavigationButton_2;