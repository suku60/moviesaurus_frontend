import React, {useEffect, useState} from "react";
import './SelectedMovie.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";
import { photo_url } from "../../utilities";

const SelectedMovie = (props) => {

    let hours = '00:00:00';

    let desiredView = useNavigate("")

    const [validationMessage, setValidationMessage] = useState("none");
    // const [watchMovie, setWatchMovie] = useState({});
    
    useEffect(()=> {

    if(props.passport?.token === ""){
        desiredView("/");
    }
    });

    const processOrder = async () => {

        // setWatchMovie({

        // })

        let addMovieData = {
            title : props.search?.movies?.original_title,
            year : props.search?.movies?.release_date,
            adult : false,
            popularity : props.search?.movies?.popularity,
            image : photo_url + props.search?.movies?.poster_path,
            description : props.search?.movies?.original_title,
        }

        // let makeOrderData = {

        //     userId: props.passport?.id,
        //     movieId: ,
        //     start_date: DataTypes.DATE,
        //     end_date: DataTypes.DATE,
        //     price: DataTypes.INTEGER,
        //     active: DataTypes.BOOLEAN
        // }

        // console.log ("la order aqui", makeOrderData)

        try {
            let timeResponse = await axios.post("http://worldtimeapi.org/api/ip");
            console.log("this is the time", timeResponse)
        }catch(errorDisplay) {
          
        }
      
        
        try  {

            let addMovieResponse = await axios.post("http://localhost:3000/movies/new", addMovieData);
          
            console.log("respuesta de la llamada al back con la peli", addMovieResponse)
            console.log("m222", addMovieResponse.data?.id)

            
        //   let makeOrderData = {

        //     userId: props.passport?.id,
        //     movieId: addMovieResponse.data?.id,
        //     start_date: DataTypes.DATE,
        //     end_date: DataTypes.DATE,
        //     price: DataTypes.INTEGER,
        //     active: DataTypes.BOOLEAN
          }catch(errorDisplay) {
          
          }
        }
          


        

    return (
        <div className="selectedMovie_box animation_webpage_toright">
            <div className="selected_inner_left">
                <img className="selected_photo" src={photo_url + props.search?.movies?.poster_path}/>
            </div>
            <div className="selected_inner_right">
                {props.search?.movies?.original_title}<br/>
                {props.search?.movies?.release_date}<br/>
                {props.search?.movies?.adult}<br/>
                {props.search?.movies?.popularity}<br/>
                {props.search?.movies?.overview}

                <div className="watch_now_button" onClick={()=>{processOrder()}}>
                    watch now
                </div>
                

            </div>
        </div>
    )
}

export default connect((state) => ({
    passport: state.passport,
    search: state.search
}))(SelectedMovie);