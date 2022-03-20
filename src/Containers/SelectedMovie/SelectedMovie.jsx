import React, {useEffect, useState} from "react";
import './SelectedMovie.css';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { LOGOUT } from "../../redux/types";
import { photo_url } from "../../utilities";
import  {addMonths}  from 'date-fns'


const SelectedMovie = (props) => {

    
    // let tiempo = Date()
    // console.log("esto es date", Date)

    let hours = ' 00:00:00';

    let desiredView = useNavigate("")
    
    const [processingMessage, setProcessingMessage] = useState("none");
    
    const [successDisplay, setSuccessDisplay] = useState("none")

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

        setProcessingMessage("flex")

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

        const timeCall = () => {
            if(bridge) {
              bridge.open('GET', time_url, true);
              bridge.send();
            }
        }

        timeCall()


        try {

            let timeResponse = await axios.get(time_url);

            try  {

                let addMovieResponse = await axios.post("http://localhost:3000/movies/new", addMovieData);
              
                // console.log("respuesta de la llamada al back con la peli", addMovieResponse)
                // console.log("m222", addMovieResponse.data?.id)
                // --------------------- MOVIE ID
    
                let correctDateData = timeResponse.data?.datetime;

                // console.log(correctDateData.split(" "))

                // console.log(" 1 this is the date we will work on:", correctDateData);

                let dateDataDefined = correctDateData.substr(0,10);

                // console.log("datedefinedwewillmodify", dateDataDefined);

                // console.log("datedefined#1", dateDataDefined.substr(0,4))
                
                // console.log("datedefined#2", dateDataDefined.substr(5,2))

                let month = parseInt(dateDataDefined.substr(5,2));

                let monthOver = month + 1; 
                
                if(monthOver === 13){
                    monthOver = 1
                }

                let monthOverString = monthOver.toString();

                let monthOverStringFinished = "0"+ monthOverString;

                let endDateDefined = dateDataDefined.substr(0,4) + "-" + monthOverStringFinished + "-" + dateDataDefined.substr(8,2);

                // console.log("endate", endDateDefined)

                let startDateClean = dateDataDefined + hours;

                let endDateClean = endDateDefined + hours;

                // ----------------- START & END DATE

                console.log("aquí empieza:", startDateClean,
                "aquí acabamos", endDateClean)

                const makeId = (length) => {
                    let result = '';
                    let numbers = '0123456789';
                    let numbersLength = numbers.length;
                    for ( let i = 0; i < length; i++ ) {
                      result += numbers.charAt(Math.floor(Math.random() * 
                 numbersLength));
                   }
                   return result;
                }


                let addOrderData = {
                    userId : props.passport?.id,
                    movieId : addMovieResponse.data?.id,
                    start_date : startDateClean,
                    end_date : endDateClean,
                    price : parseInt(makeId(1)) + 10,
                }

                // console.log("esta es la orden", addOrderData)

                let headersConfig = {
                    headers: { Authorization: `Bearer ${props.passport?.token}` }
                }
                
                try {

                    let addOrderResponse = await axios.post("http://localhost:3000/orders/new", addOrderData, headersConfig);

                    // console.log("order Response....", addOrderResponse)
              

                }catch(errorDisplay) {


                }

              }catch(errorDisplay) {
              
              }

        }catch(errorDisplay) {
          
        }

        
        
        setTimeout(() => {
            
            setProcessingMessage("none")
            
        setSuccessDisplay("flex");
              
        }, 1500);
        
        setTimeout(() => {
            
            setSuccessDisplay("none")
              
        }, 5500);
        
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
            <div className="success_message" style={{display : successDisplay}}>
                Success! Check your orders tab to see active orders
                    </div>        
            <div className="loading_circle_container" id="processing_onprofile" style={{display : processingMessage}}>
                  <div className="processing_message" id="processing_onprofile_message">processing</div>
                <div className="loading_circle animation_spin">
                    <div className="loading_circle_ring animation_spin">
                        <div className="loading_circle_inside animation spin"></div>
                        </div></div>
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