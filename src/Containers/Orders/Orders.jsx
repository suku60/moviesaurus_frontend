import React, {useEffect, useState} from "react";
import './Orders.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";

import { photo_url } from "../../utilities";


const Orders = (props) => {

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");
    
    const [activeMovies, setActiveMovies] = useState([]);
    const [allordersMovies, setAllordersMovies] = useState([]);
    
    const [allordersWidth, setAllordersWidth] = useState(undefined);
    const [activeWidth, setActiveWidth] = useState("80em");
    
    useEffect(()=> {

    if(props.passport?.token === ""){
        
        showAllordersMovies();
        showActiveMovies();

        desiredView("/");
    }});

    
    const openAllordersBox = () => {
        if(allordersWidth === "80em"){
            
        setAllordersWidth("10em")
        setActiveWidth("80em")

        }else {
            
        document.getElementById("box_top_rated").style.transition = ".8s";
        document.getElementById("box_top_rated").style.animation = "animation_webpage_toright";   
        setAllordersWidth("80em")
        setActiveWidth("10em")
        }
    }

    const openActiveBox = () => {
        if(activeWidth === "80em"){
            
        setAllordersWidth("80em")
        setActiveWidth("10em")
    
            }else {
                
        document.getElementById("box_recommended").style.transition = ".8s";
        document.getElementById("box_recommended").style.animation = "animation_webpage_toright";      
        setAllordersWidth("10em")
        setActiveWidth("80em")
            }
    }

    const showAllordersMovies = async () => {

        try {

            let allordersResponse = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e53bbde3abe182705b021e68f89d3006&language=en-US&page=1");

            
            setAllordersMovies(allordersResponse.data.results)


        }catch(error){
            console.log(error)
        }

    }


    const showActiveMovies = async () => {

        try {

            let activeResponse = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=e53bbde3abe182705b021e68f89d3006&language=en-US&page=1`);

            
            setActiveMovies(activeResponse.data.results)


        }catch(error){
            console.log(error)
        }

    }
    
    const selectOrder = (order) => {
        console.log("this is the order we're clicking", order)

    }

    return (
        <div className="orders_box animation_webpage_toright">
           <div className="box_profile_inner2 animation_movies_container" id="box_top_rated" style={{width : allordersWidth}}>    
               <div className="movies_title" id="box_top_rated_title" onClick={()=>{openAllordersBox()}}>all orders</div>
                   { allordersMovies.map(allorders => {
                      return ( 
                       <div className="movie_card" key={allorders.id} onClick={()=>selectOrder(allorders)}>
                           <img className="movie_card_photo" src={photo_url + allorders.poster_path} alt={allorders.title}/>
                           <div className="movie_card_description">
                               <div className="movie_card_description_originaltitle">
                                   {allorders.original_title}
                               </div>
                               <div className="movie_card_description_releasedate">
                                   release date: {allorders.release_date}
                               </div>
                               <div className="movie_card_description_popularity">
                                   popularity among users: {Math.round(allorders.popularity/100)}/100
                               </div>
                               <div className="movie_card_description_overview">
                                   {allorders.overview}
                               </div>
                           </div>
                       </div>
                   )
               })}
               <div className="movies_data">
               </div>
           </div> 

           <div className="box_profile_inner2 animation_movies_container" id="box_recommended" style={{width : activeWidth}}>    
               <div className="movies_title" id="box_recommended_title" onClick={()=>{openActiveBox()}}>active</div>
                   { activeMovies.map(active => {
                      return ( 
                       <div className="movie_card" key={active.id} onClick={()=>selectOrder(active)}>
                           <img className="movie_card_photo" src={photo_url + active.poster_path} alt={active.title}/>
                           <div className="movie_card_description">
                               <div className="movie_card_description_originaltitle">
                                   {active.original_title}
                               </div>
                               <div className="movie_card_description_releasedate">
                                   release date: {active.release_date}
                               </div>
                               <div className="movie_card_description_popularity">
                                   popularity among users: {Math.round(active.popularity/100)}/100
                               </div>
                               <div className="movie_card_description_overview">
                                   {active.overview}
                               </div>
                           </div>
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