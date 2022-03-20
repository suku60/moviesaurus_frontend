import React, {useEffect, useState} from "react";
import './Admin.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";
import { photo_url } from "../../utilities";


const Admin = (props) => {

    let headersConfig = {
        headers: { Authorization: `Bearer ${props.passport?.token}` }
    }

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");

    const [activeDisplay, setActiveDisplay] = useState("inactive")
    
    const [active, setActive] = useState([]);
    const [allorders, setAllorders] = useState([]);
    
    const [allordersWidth, setAllordersWidth] = useState(undefined);
    const [activeWidth, setActiveWidth] = useState("69em");
    
    useEffect(()=> {
        
        // showAllordersAdmin();
        // showActiveAdmin();

    if(props.passport?.token === ""){

        desiredView("/");
    }});

    
    const openAllordersBox = () => {
        if(allordersWidth === "69em"){
            
        setAllordersWidth("30em")
        setActiveWidth("69em")

        }else {
            
        document.getElementById("allorders").style.transition = ".8s";
        document.getElementById("allorders").style.animation = "animation_webpage_toright";   
        setAllordersWidth("69em")
        setActiveWidth("30em")
        }
    }

    const openActiveBox = () => {
        if(activeWidth === "69em"){
            
        setAllordersWidth("69em")
        setActiveWidth("30em")
    
            }else {
                
        document.getElementById("activeOrders").style.transition = ".8s";
        document.getElementById("activeOrders").style.animation = "animation_webpage_toright";      
        setAllordersWidth("30em")
        setActiveWidth("69em")
            }
    }

    const showAllordersAdmin = async () => {

        openAllordersBox()

        try {

            let allordersResponse = await axios.get(`http://localhost:3000/orders/show/`, headersConfig);

            console.log("respuesta?", allordersResponse)

            
            setAllorders(allordersResponse.data)

        }catch(error){
            console.log(error)
        }

    }

    const showActiveAdmin = async () => {

        
        openActiveBox()

        try {

            let activeResponse = await axios.get(`http://localhost:3000/orders/show/active/`, headersConfig);

            console.log("respuesta aqu", activeResponse)
            
            setActive(activeResponse.data)


        }catch(error){
            console.log(error)
        }

    }
    
    const selectOrder = (order) => {
        console.log("this is the order we're clicking", order)

    }

    

    return (
        <div className="orders_box animation_webpage_toright">
           <div className="box_profile_inner2 animation_movies_container" id="allorders" style={{width : allordersWidth}}>    
               <div className="movies_title" id="allorders_title" onClick={()=>{openAllordersBox()}}>all orders</div>               
               <div className="movies_title" id="allorders_title_click" onClick={()=>{showAllordersAdmin()}}>click to show all orders</div>
                   <div className="orders_container">
                       { allorders.map(orders => {
                           return ( 
                               <div className="order_card" key={orders.id} onClick={()=>selectOrder(allorders)}>
                                    <div className="order_user_number">
                                        <div className="order_user">user: {orders.user_name}</div>
                                        <div className="order_number">order nº:{orders.id}</div>
                                    </div>
                                    <div className="order_movie_price">
                                        <div className="order_movie">movie: {orders.movie_name}</div>
                                        <div className="order_price">price: {orders.price}
                                    </div>
                                    <div className="order_start_date">starting at: {orders.start_date}</div>
                                    <div className="order_end_date">ending at: {orders.end_date}</div>
                                    </div>
                                </div>
                                  )
                        })}
               <div className="movies_data">
               </div>
               </div>
           </div> 

           <div className="box_profile_inner2 animation_movies_container" id="active" style={{width : activeWidth}}>    
               <div className="movies_title" id="active_title" onClick={()=>{openActiveBox()}}>active</div>
               <div className="movies_title" id="active_title_click" onClick={()=>{showActiveAdmin()}}>click to show active orders</div>
                   <div className="orders_container">    
                       { active?.map(activeOrders => {
                          return ( 
                            <div className="order_card" key={activeOrders.id} onClick={()=>selectOrder(active)}>
                            <div className="order_user_number">
                                <div className="order_user">user: {activeOrders.user_name}</div>
                                <div className="order_number">order nº:{activeOrders.id}</div>
                            </div>
                            <div className="order_movie_price">
                                <div className="order_movie">movie: {activeOrders.movie_name}</div>
                                <div className="order_price">price: {activeOrders.price}
                            </div>
                            <div className="order_start_date">starting at: {activeOrders.start_date}</div>
                            <div className="order_end_date">ending at: {activeOrders.end_date}</div>
                            </div>
                         </div>
                       )
                    })}
                   <div className="movies_data">
                   </div>
                   </div>
           </div>                 
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport
}))(Admin);