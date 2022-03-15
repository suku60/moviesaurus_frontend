import React, {useEffect, useState} from "react";
import './Home.css';
import NavigationButton from "../../Components/NavigationButton/NavigationButton";
import LoginRegisterButton from "../../Components/LoginRegisterButton/LoginRegisterButton";
import Sidebar from "../../Components/Sidebar/Sidebar";

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
        <div className="container_home">
            {/* <Sidebar/> */}
       <div className="box_home">
           <div className="box_home_top_view animation_webpage_toright">
               <p className="text_homeView animation_typewriter_description" id="description">All the movies and tv shows you can imagine</p>
               <p className="text_homeView animation_typewriter_join">join our club</p>
               <p className="text_homeView animation_typewriter">MOVIESAURUS</p>
               <NavigationButton viewNameDisplay={"login"} pathUrl={"/login"}/>
               <br/>
               <NavigationButton viewNameDisplay={"register"} pathUrl={"/register"}/>
               <div className="full_form_box_container" id="scroll_description"><a href="#movies_carrousel">scroll down or click here to see our latest movies.</a>
              </div>
           </div>
           <div className="box_home_bot_view" id="movies_carrousel">hello im the bot view for the latest movies
           </div>
           <LoginRegisterButton viewNameDisplay={"Not a member? Register here"} pathUrl={"/register"}/>
           </div>
           </div>
    )
}

export default Home;