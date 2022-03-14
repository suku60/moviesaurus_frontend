import React from 'react';
import { useNavigate } from 'react-router-dom';


import {ReactComponent as OrdersSvg} from '../../img/orders.svg'
import './SideButtonOrders.css';
import '../Sidebar/Sidebar.css'

const SideButtonOrders = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_home_container" onClick={()=>pathFinder()}>
        {props.viewNameDisplay}
            <div className="icon_container">
                <OrdersSvg/> 
            </div>
            <div className="icon_text" id="orders_background">orders
            </div>
        </div>
    )
};

export default SideButtonOrders;