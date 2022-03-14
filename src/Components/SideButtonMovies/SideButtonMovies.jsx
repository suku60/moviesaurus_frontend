import React from 'react';
import { useNavigate } from 'react-router-dom';


import {ReactComponent as MoviesScg} from '../../img/movies.svg'
import './SideButtonMovies.css';
import '../Sidebar/Sidebar.css'

const SideButtonMovies = (props) => {

    let desiredView = useNavigate();

    const pathFinder = () => {
        desiredView(props.pathUrl)
    }

    return (
        <div className="sidebar_home_container" onClick={()=>pathFinder()}>
        {props.viewNameDisplay}
            <div className="icon_container">
                <MoviesScg/> 
            </div>
            <div className="icon_text" id="movies_background">movies
            </div>
        </div>
    )
};

export default SideButtonMovies;