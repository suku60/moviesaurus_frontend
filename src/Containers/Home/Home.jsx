import React from "react";
import './Home.css';
import NavigationButton from "../../Components/NavigationButton/NavigationButton";

const Home = () => {

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