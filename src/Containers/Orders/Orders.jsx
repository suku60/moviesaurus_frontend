import React, {useEffect, useState} from "react";
import './Orders.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";


const Orders = (props) => {

    let headersConfig = {
        headers: { Authorization: `Bearer ${props.passport?.token}` }
    }

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");
    
    const [active, setActive] = useState([]);
    const [allorders, setAllorders] = useState([]);
    
    const [allordersWidth, setAllordersWidth] = useState(undefined);
    const [activeWidth, setActiveWidth] = useState("89em");
    
    useEffect(()=> {
        
        // showAllorders();
        // showActive();

    if(props.passport?.token === ""){

        desiredView("/");
    }});

    
    const openAllordersBox = () => {
        if(allordersWidth === "89em"){
            
        setAllordersWidth("10em")
        setActiveWidth("89em")

        }else {
            
        document.getElementById("allorders").style.transition = ".8s";
        document.getElementById("allorders").style.animation = "animation_webpage_toright";   
        setAllordersWidth("89em")
        setActiveWidth("10em")
        }
    }

    const openActiveBox = () => {
        if(activeWidth === "89em"){
            
        setAllordersWidth("89em")
        setActiveWidth("10em")
    
            }else {
                
        document.getElementById("activeOrders").style.transition = ".8s";
        document.getElementById("activeOrders").style.animation = "animation_webpage_toright";      
        setAllordersWidth("10em")
        setActiveWidth("89em")
            }
    }

    const showAllorders = async () => {

        try {

            let allordersResponse = await axios.get("http://localhost:3000/orders/show", headersConfig  );

            console.log("respuesta?", allordersResponse)

            
            setAllorders(allordersResponse.data)


        }catch(error){
            console.log(error)
        }

    }

    const showActive = async () => {

        try {

            let activeResponse = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e53bbde3abe182705b021e68f89d3006&language=en-US&page=1`);

            
            setActive(activeResponse.data.results)


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
               <div className="movies_title" id="allorders_title_click" onClick={()=>{showAllorders()}}>click to show all orders</div>
                   { allorders.map(orders => {
                      return ( 
                       <div className="movie_card" key={orders.id} onClick={()=>selectOrder(allorders)}>
                           <div className="order_number">{orders.id}</div>
                           <div className="order_user">{orders.userId}</div>
                          <div className="order_movie">{orders.movieId}</div>
                          <div className="order_start_date">{orders.start_date}</div>
                          <div className="order_end_date">{orders.end_date}</div>
                          <div className="order_price">{orders.price}

                          </div>
                          <div className="order_status">{orders.active}</div>
                       </div>
                   )
               })}
               <div className="movies_data">
               </div>
           </div> 

           <div className="box_profile_inner2 animation_movies_container" id="active" style={{width : activeWidth}}>    
               <div className="movies_title" id="active_title" onClick={()=>{openActiveBox()}}>active</div>
               <div className="movies_title" id="active_title_click" onClick={()=>{showActive()}}>click to show active orders</div>
                   { active.map(activeOrders => {
                      return ( 
                       <div className="movie_card" key={activeOrders.id} onClick={()=>selectOrder(active)}>
                           <div className="order_number">{activeOrders.id}</div>
                           <div className="order_user"></div>
                           <div className="order_movie"></div>
                           <div className="order_start_date"></div>
                           <div className="order_end_date"></div>
                           <div className="order_price">

                           </div>
                           <div className="order_status"></div>
                       </div>
                   )
               })}
               <div className="movies_data">
               </div>
           </div>                 
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport
}))(Orders);