import React, { useEffect, useState } from 'react';
import './Sidebar.css';

import { connect } from 'react-redux';
import { photo_url } from '../../utilities';

const Sidebar = (props) => { 



    const [sidebarDisplay, setSidebarDisplay] = useState("flex")
    const [selectedMovie, setSelectedMovie] = useState([]);

    
    console.log(props.search?.movies)

    useEffect(()=> {
        // if(props.search?.movies !== {} || undefined){

        //     console.log(props.search)
               
        //        setSidebarDisplay("none")
    
    
        // }
        
    },[props.search?.movies]);
    
    useEffect(() => {
        
        setSelectedMovie([props.search?.movies])

        console.log(selectedMovie)

        // console.log("1")

        // if(props.search?.movies !== {} || undefined){

        //     console.log(props.search?.movies)
        //     console.log("2")
               
        //        setSidebarDisplay("none")
    
    
        // }else{
        //     setSidebarDisplay("flex")
        //     console.log("3")

        // }
    
        // console.log("4")
},[props.search?.movies]);

console.log("5")

        return (
           <div className='box_sidebar animation_sidebar' style={{display : sidebarDisplay}}>
               {/* <div className="box_profile_inner2" id="box_latest">
               
               <div className="movies_title">latest movies</div>
                   { selectedMovie.map(selectedFilm => {
                       return ( 
                           <div className="movie_card" key={selectedFilm.id} >
                               <img className="movie_card_photo" src={photo_url + selectedFilm.poster_path} alt={selectedFilm.title}/>
                               <div className="movie_card_description">
                                   <div className="movie_card_description_originaltitle">
                                       {selectedFilm.original_title}
                                   </div>
                                   <div className="movie_card_description_releasedate">
                                       release date: {selectedFilm.release_date}
                                   </div>
                                   <div className="movie_card_description_popularity">
                                       popularity among users: {Math.round(selectedFilm.popularity/100)}/100
                                   </div>
                                   <div className="movie_card_description_overview">
                                       {selectedFilm.overview}
                                   </div>
                                   <br/>
                                   <div className="movie_card_watch_button">
                                       watch
                                   </div>
                               </div>
                           </div>
                       )
                   })}
                   <div className="movies_data">
                   </div>
               </div> */}
               
           </div>
        )
    }
    

    export default connect((state) => ({
        passport: state.passport,
        search: state.search.movie
    }))(Sidebar);
    