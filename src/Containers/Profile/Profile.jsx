import React, {useEffect, useState} from "react";
import './Profile.css';
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT, MOVIESLOG } from "../../redux/types";
import { photo_url } from "../../utilities";


const Profile = (props) => {

    let headersConfig = {
        headers: { Authorization: `Bearer ${props.passport?.token}` }
    }

    let desiredView = useNavigate("")

    const [userData, setUserData] = useState({
        username: props.passport?.username,
        birthdate: props.passport?.birthdate,
        email: props.passport?.email
    });

    const [orders, setOrders] = useState([]);
    const [movies, setMovies] = useState([]);

    // console.log("usedata before everything", userData)

    const [displayName, setDisplayName] = useState("");
    const [displayBirth, setDisplayBirth] = useState("");
    const [displayEmail, setDisplayEmail] = useState("");

    const [active, setActive] = useState([]);

    
    const [profileWidth, setProfileWidth] = useState("30em");
    const [moviesWidth, setMoviesWidth] = useState("60em");
    const [ordersWidth, setOrdersWidth] = useState("10em");

    const [validationMessage, setValidationMessage] = useState("none");
    

    useEffect(()=> {

    showLatestMovies();

    if(props.passport?.token === ""){
        desiredView("/");
    }
    },[]);


    useEffect(()=> {

        if(props.passport?.token === ""){
            desiredView("/");
        }
        
        console.log("movies inside usefect", movies)

    },[orders, movies, props]);


    const fillUserData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    };

    const changeDisplayName = () => {
        if(displayName === "none"){
          setDisplayName("flex")
        }else{
          setDisplayName("none")
        }
  
      }

      const changeDisplayEmail = () => {
        if(displayEmail === "none"){
          setDisplayEmail("flex")
        }else{
          setDisplayEmail("none")
        }
  
      }

      const changeDisplayBirth = () => {
        if(displayBirth === "none"){
          setDisplayBirth("flex")
        }else{
          setDisplayBirth("none")
        }
  
      }

    const updateUserData = async () => {

        let dataBody = {
            username: userData.username,
            birthdate: userData.birthdate,
            email: userData.email

        }
        console.log("databody we're sending...", dataBody)

        let auth = {
            headers: { Authorization:`Bearer ${props.passport?.token}`}
        }

        try {
            let dataResponse = await axios.put(`http://localhost:3000/users/update/${props.passport?.id}`, dataBody, auth);
        
            // console.log("userdata antes de meterlo en redux", userData)
            if(dataResponse){
                // props.dispatch({type:UPDATE_PASSPORT, payload: userData})

                setValidationMessage("flex")
                setTimeout(() => {
                    setValidationMessage("none")
                    
                props.dispatch({ type: LOGOUT});

                  }, 3900);
            }
        } catch (error) {
            console.log("response failure here", error)
        }
    }

    const openProfile = () => {

        if(profileWidth === "80em"){
            
        setProfileWidth("30em")
        setMoviesWidth("10em")
        setOrdersWidth("60em")

        }else {
            
        document.getElementById("box_user").style.transition = ".8s";
        document.getElementById("box_user").style.animation = "animation_webpage_toright";   
        setProfileWidth("80em")
        setMoviesWidth("10em")
        setOrdersWidth("10em")
        }
    }

    const openOrders = () => {

        if(ordersWidth === "60em"){
            
        setProfileWidth("80em")
        setMoviesWidth("10em")
        setOrdersWidth("10em")

        }else {
            
        document.getElementById("box_orders_profile").style.transition = ".8s";
        document.getElementById("box_orders_profile").style.animation = "animation_webpage_toright";   

        setProfileWidth("30em")
        setMoviesWidth("10em")
        setOrdersWidth("60em")

        showActive()
        }
    }

    const openMovies = () => {
        
        document.getElementById("box_latest").style.transition = ".8s";
        document.getElementById("box_latest").style.animation = "animation_webpage_toright";   
        setOrdersWidth("10em")
        setProfileWidth("30em")
        setMoviesWidth("60em")
    }


    const showActive = async () => {

        try {

            let activeResponse = await axios.get(`http://localhost:3000/orders/show/active/${props.passport?.id}`, headersConfig);

            console.log("respuesta aqu", activeResponse)
            
            setActive(activeResponse.data)


        }catch(error){
            console.log(error)
        }

    }

    const showLatestMovies = async () => {

        // steps: add some b&W movies @ backend to try this 
        
        try {

            let moviesResponse = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e53bbde3abe182705b021e68f89d3006&language=en-US&page=1");
            console.log("nos llegan estas movies:", moviesResponse)

            
            setMovies(moviesResponse.data.results)


            console.log("por aquí estamos movies", movies)
        }catch(error){
            console.log(error)
        }

    }

    const selectMovie = (film) => {
        console.log("this is the film we're clicking", film)

        props.dispatch({type: MOVIESLOG, payload: film})


        desiredView("/movies/selected")
    }

    
    return (
        <div className="box_profile animation_webpage_toright">
           <div className="box_profile_inner2" id="box_user" style={{width : profileWidth}}>
               <div className="profile_button" onClick={()=>openProfile()}>expand/close</div>
                <div className="profile_title">your data</div>
                <div className="profile_data">
                name: {props.passport?.name}<br/>
                username: {props.passport?.username}<br/>
                email: {props.passport?.email}
                </div>
                <div className="update_profile">
                    <div className="profile_title">update your data here</div>
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayName}} onClick={()=>{changeDisplayName()}}>username
                        </div>
                        <div className="input_box">
                            <input type="username" name="username" id="input_name" title="username" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e)}} />
                            <div className="input_box_back"  id="hide_profile" onClick={()=>{changeDisplayName()}}>hide
                            </div>
                        </div>
                    </div>
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayBirth}} onClick={()=>{changeDisplayBirth()}}>birthdate
                        </div>
                        <div className="input_box">
                            <input type="date" name="birthdate" id="input_name" title="birthdate" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e)}} />
                            <div className="input_box_back"  id="hide_profile" onClick={()=>{changeDisplayBirth()}}>hide
                            </div>
                        </div>
                    </div>
                    <div className="full_form_box_login_line">
                        <div className="form_box_login" style={{display : displayEmail}} onClick={()=>{changeDisplayEmail()}}>email
                        </div>
                        <div className="input_box">
                            <input type="email" name="email" id="input_name" title="email" 
                            autoComplete="off" onChange={(e)=>{fillUserData(e)}} />
                            <div className="input_box_back"  id="hide_profile" onClick={()=>{changeDisplayEmail()}}>hide
                            </div>
                        </div>
                    </div>      
                    <div className="update_button" onClick={()=>{updateUserData()}}>update data</div>
                </div>
                <div className="validation_message" style={{display:validationMessage}}>your data was updated succesfully<br/>you will be logged out and redirected to our main page<br/>please log again</div>
                
           </div>
           
           <div className="box_profile_inner2" id="box_orders_profile" style={{width : ordersWidth}}>
            <div className="order_profile_button" onClick={()=>{openOrders()}}>active orders</div>
           <div className="orders_container">    
                       { active?.map(activeOrders => {
                          return ( 
                            <div className="order_card" key={activeOrders.id}>
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

           <div className="box_profile_inner2" id="box_latest" style={{width : moviesWidth}}>
               
           <div className="movies_title" onClick={()=>openMovies()}>latest movies</div>
               { movies?.map(film => {
                   return ( 
                       <div className="movie_card" key={film.id} onClick={()=>selectMovie(film)}>
                           <img className="movie_card_photo" src={photo_url + film.poster_path} alt={film.title}/>
                           <div className="movie_card_description">
                               <div className="movie_card_description_originaltitle">
                                   {film.original_title}
                               </div>
                               <div className="movie_card_description_releasedate">
                                   release date: {film.release_date}
                               </div>
                               <div className="movie_card_description_popularity">
                                   popularity among users: {Math.round(film.popularity/100)}/100
                               </div>
                               <div className="movie_card_description_overview">
                                   {film.overview}
                               </div>
                               <br/>
                               <div className="movie_card_watch_button" onClick={()=>selectMovie(film)}>
                                   watch
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
}))(Profile);