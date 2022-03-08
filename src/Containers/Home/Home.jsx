import React, {useEffect, useState} from "react";
import './Home.css';
import NavigationButton from "../../Components/NavigationButton/NavigationButton";


const Home = () => {
// HOOKS

// useEffects

useEffect(()=>{

},[]); 


useEffect(()=>{

});

// handlers

// local functions

    // if(identification.token !== ""){
    //     return (
    //         <div>INTERFACE THAT ONLY LOGGED USERS CAN SEE</div>
    //     )
    // }else{
    //     return we have down here
    // }

    return (
       <div className="box_home">
           <p className="text_homeView animation_typewriter_description" id="description">All the movies and tv shows you can imagine</p>
           <p className="text_homeView animation_typewriter_join">join our club</p>
           <p className="text_homeView animation_typewriter">MOVIESAURUS</p>
           <NavigationButton viewNameDisplay={"login"} pathUrl={"/login"}/>
           <br/>
           <NavigationButton viewNameDisplay={"register"} pathUrl={"/register"}/>
       </div>
    )
}

export default Home;