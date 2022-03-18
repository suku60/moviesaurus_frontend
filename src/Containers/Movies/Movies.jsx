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
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    
    const [ratedWidth, setRatedWidth] = useState(undefined);
    const [recommendedWidth, setRecommendedWidth] = useState(undefined);
    const [latestWidth, setLatestWidth] = useState(undefined);
    
    useEffect(()=> {

        showLatestMovies();
        showRecommendedMovies();

    if(props.passport?.token === ""){
        desiredView("/");
    }},[]);

    useEffect(()=> {

        if(props.passport?.token === ""){
            desiredView("/");
        }

    },[movies, recommendedMovies, props]);

    const openRatedBox = () => {
        if(ratedWidth === "80em"){
            
        setRatedWidth("10em")
        setRecommendedWidth("10em")
        setLatestWidth("80em")

        }else {
        setRatedWidth("80em")
        setRecommendedWidth("10em")
        setLatestWidth("10em")
        }
    }

    const openRecommendedBox = () => {
        if(recommendedWidth === "80em"){
            
        setRatedWidth("10em")
        setRecommendedWidth("10em")
        setLatestWidth("80em")
    
            }else {
        setRatedWidth("10em")
        setRecommendedWidth("80em")
        setLatestWidth("10em")
            }
    }

    const openLatestBox = () => {
        setRatedWidth("10em")
        setRecommendedWidth("10em")
        setLatestWidth("80em")
    }

    const showRatedMovies = async () => {

        try {

            let RatedResponse = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e53bbde3abe182705b021e68f89d3006&language=en-US&page=1");

            
            setRecommendedMovies(RatedResponse.data.results)


        }catch(error){
            console.log(error)
        }

    }


    const showRecommendedMovies = async () => {

        try {

            let RecommendedResponse = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e53bbde3abe182705b021e68f89d3006&language=en-US&page=1");

            
            setRecommendedMovies(RecommendedResponse.data.results)


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
            <div className="box_profile_inner2 animation_movies_container" id="box_top_rated" style={{width : ratedWidth}}>    
               <div className="movies_title" id="box_top_rated_title" onClick={()=>{openRatedBox()}}>most rated movies</div>
                   { recommendedMovies.map(recommended => {
                      return ( 
                       <div className="movie_card" key={recommended.id} onClick={()=>selectMovie(recommended)}>
                           <img className="movie_card_photo" src={photo_url + recommended.poster_path} alt={recommended.title}/>
                           <div className="movie_card_description">
                               <div className="movie_card_description_originaltitle">
                                   {recommended.original_title}
                               </div>
                               <div className="movie_card_description_releasedate">
                                   release date: {recommended.release_date}
                               </div>
                               <div className="movie_card_description_popularity">
                                   popularity among users: {Math.round(recommended.popularity/100)}/100
                               </div>
                               <div className="movie_card_description_overview">
                                   {recommended.overview}
                               </div>
                           </div>
                       </div>
                   )
               })}
               <div className="movies_data">
               </div>
           </div> 

           <div className="box_profile_inner2 animation_movies_container" id="box_recommended" style={{width : recommendedWidth}}>    
               <div className="movies_title" id="box_recommended_title" onClick={()=>{openRecommendedBox()}}>recommended</div>
                   { recommendedMovies.map(recommended => {
                      return ( 
                       <div className="movie_card" key={recommended.id} onClick={()=>selectMovie(recommended)}>
                           <img className="movie_card_photo" src={photo_url + recommended.poster_path} alt={recommended.title}/>
                           <div className="movie_card_description">
                               <div className="movie_card_description_originaltitle">
                                   {recommended.original_title}
                               </div>
                               <div className="movie_card_description_releasedate">
                                   release date: {recommended.release_date}
                               </div>
                               <div className="movie_card_description_popularity">
                                   popularity among users: {Math.round(recommended.popularity/100)}/100
                               </div>
                               <div className="movie_card_description_overview">
                                   {recommended.overview}
                               </div>
                           </div>
                       </div>
                   )
               })}
               <div className="movies_data">
               </div>
           </div> 

           <div className="box_profile_inner2 animation_movies_container" id="box_latest" style={{width : latestWidth}}>  
                <div className="movies_title" id="box_latest_title" onClick={()=>{openLatestBox()}}>latest movies</div>
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