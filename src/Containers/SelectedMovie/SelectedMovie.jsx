import React, {useEffect, useState} from "react";
import './SelectedMovie.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";
import { photo_url } from "../../utilities";
import  {addMonths}  from 'date-fns'


const SelectedMovie = (props) => {

    
    let tiempo = Date()
    console.log("esto es date", Date)

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

        let bridge = new XMLHttpRequest();
        
        let time_url = "http://worldtimeapi.org/api/ip";
        

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

        const timeCall = () => {
            if(bridge) {
              bridge.open('GET', time_url, true);
              bridge.send();
            }
        }

        // let tiempo = Date()
        // console.log("esto es date", Date)

        timeCall()


        try {
            let timeResponse = await axios.get(time_url);
            console.log("this is the time", timeResponse)

            try  {

                let addMovieResponse = await axios.post("http://localhost:3000/movies/new", addMovieData);
              
                console.log("respuesta de la llamada al back con la peli", addMovieResponse)
                console.log("m222", addMovieResponse.data?.id)
    
                let correctDateData = timeResponse.data?.datetime;

                console.log(correctDateData.split(" "))

                console.log(" 1 this is the date we will work on:", correctDateData);

                let dateDataDefined = correctDateData.substr(0,10);

                console.log("datedefinedwewillmodify", dateDataDefined);

                console.log("datedefined#1", dateDataDefined.substr(0,4))
                
                console.log("datedefined#2", dateDataDefined.substr(5,2))

                
                console.log("datedefined#3", dateDataDefined.substr(8,2))

                addMonths = require('date-fns/addMonths');

                let endDate = addMonths(new Date(dateDataDefined.substr(0,4), dateDataDefined.substr(5,2), dateDataDefined.substr(8,2)), 1);

                console.log("2 de aquí un mes..", endDate)

                // const futureDate = new Date(dateDataDefined);

                // const month = addDays(myDate, 31);
                // console.log(monthsRollOver)
                // 2019-05-15

                let actualDate = dateDataDefined + " 00:00:00";


    
                
            //   let makeOrderData = {
    
            //     userId: props.passport?.id,
            //     movieId: addMovieResponse.data?.id,
            //     start_date: timeResponse.data?.datetime,
            //     end_date: DataTypes.DATE,
            //     price: DataTypes.INTEGER,
            //     active: DataTypes.BOOLEAN
    
              }catch(errorDisplay) {
              
              }

        }catch(errorDisplay) {
          
        }
      
        
        // try  {

        //     let addMovieResponse = await axios.post("http://localhost:3000/movies/new", addMovieData);
          
        //     console.log("respuesta de la llamada al back con la peli", addMovieResponse)
        //     console.log("m222", addMovieResponse.data?.id)

        //     // let correctDateData = timeResponse.data?.datetime;

            
        // //   let makeOrderData = {

        // //     userId: props.passport?.id,
        // //     movieId: addMovieResponse.data?.id,
        // //     start_date: timeResponse.data?.datetime,
        // //     end_date: DataTypes.DATE,
        // //     price: DataTypes.INTEGER,
        // //     active: DataTypes.BOOLEAN

        //   }catch(errorDisplay) {
          
        //   }
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