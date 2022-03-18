import React, {useEffect, useState} from "react";
import './Movies.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";

import { photo_url } from "../../utilities";


const Movies = (props) => {

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");

    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {

        showLatestMovies();

    if(props.passport?.token === ""){
        desiredView("/");
    }},[]);

    useEffect(()=> {

        if(props.passport?.token === ""){
            desiredView("/");
        }

    },[movies, props]);

    const showLatestMovies = async () => {

        // steps: add some b&W movies @ backend to try this 
        
        try {

            let moviesResponse = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e53bbde3abe182705b021e68f89d3006&language=en-US&page=1");
            console.log("nos llegan estas movies:", moviesResponse)

            
            setMovies(moviesResponse.data.results)


            console.log("por aquí estamos movies",movies)
        }catch(error){
            console.log(error)
        }

    }

    const selectMovie = (film) => {
        console.log("this is the film we're clicking", film)

    }

    return (
        <div className="movies_box animation_webpage_toright">
            <div className="box_profile_inner2" id="redbackground">
               <div className="orders_title">latest movies</div>
               <div className="orders_data">
               </div>
           </div>

           <div className="box_profile_inner2" id="box_recommended">    
           <div className="movies_title" id="box_recommended_title">recommended</div>
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
                           </div>
                       </div>
                   )
               })}
               <div className="movies_data">
               </div>
           </div> 

           <div className="box_profile_inner2" id="box_newest">  
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
}))(Movies);