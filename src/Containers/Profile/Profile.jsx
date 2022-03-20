import React, {useEffect, useState} from "react";
import './Profile.css';
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT, MOVIESLOG } from "../../redux/types";
import { photo_url } from "../../utilities";


const Profile = (props) => {

    let desiredView = useNavigate("")

    const [userData, setUserData] = useState({
        username: props.passport?.username,
        birthdate: props.passport?.birthdate,
        email: props.passport?.email
    });

    const [orders, setOrders] = useState([]);
    const [movies, setMovies] = useState([]);

    console.log("usedata before everything", userData)

    const [displayName, setDisplayName] = useState("");
    const [displayBirth, setDisplayBirth] = useState("");
    const [displayEmail, setDisplayEmail] = useState("");

    const [validationMessage, setValidationMessage] = useState("none");
    

    useEffect(()=> {

        getUserOrders();  
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

    const getUserOrders = async () => {

        try {

            let ordersResponse = await axios.get("http://localhost:3000/orders/show/active");
            console.log("nos llegan estas orders:", ordersResponse)

            setOrders(ordersResponse)

            console.log("por aquí estamos orders",orders)
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
           <div className="box_profile_inner2" id="box_user">
                <div className="profile_title">your data</div>
                <div className="profile_name">name: {props.passport?.name}</div>
                <div className="profile_username">username: {props.passport?.username}</div>
                
                <div className="profile_username">email: {props.passport?.email}</div>
                <br/>
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
           
           <div className="box_profile_inner2" id="box_orders_profile">
               <div className="orders_title">your active orders here</div>
               <div className="orders_data">
               </div>
           </div>

           <div className="box_profile_inner2" id="box_latest">
               
           <div className="movies_title">latest movies</div>
               { movies.map(film => {
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