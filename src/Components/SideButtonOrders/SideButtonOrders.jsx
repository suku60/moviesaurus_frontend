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
        <div className="sidebar_box_container_square" onClick={()=>pathFinder()}>
        {props.viewNameDisplay}
            <div className="icon_container_square">
                <OrdersSvg/> 
            </div>
            <div className="icon_text_square" id="orders_background_square">orders
            </div>
        </div>
    )
};

export default SideButtonOrders;