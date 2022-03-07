import React from "react";
import './Home.css';
import NavigationButton from "../../Components/NavigationButton/NavigationButton";

const Home = () => {

    return (
       <div className="box_home">
           <p className="text_homeView animation_typewriter_welcome_text">welcome extranger</p>
           <p className="text_homeView animation_typewriter">MOVIESAURUS</p>
           <NavigationButton viewNameDisplay={"Login"} pathUrl={"/login"}/>
           <br/>
           <NavigationButton viewNameDisplay={"Register"} pathUrl={"/register"}/>
       </div>
    )
}

export default Home;