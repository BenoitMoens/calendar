import React from 'react';
import './Accueil.css';
import { NavLink} from "react-router-dom";
import ParentTimer from './ParentTimer';


const Accueil = () => {
    return(
        <div className="background">
            <ParentTimer/>
            <div className="adminButton">
                <button className="sizeOfButtonAdmin">
                <NavLink className="center-text" activeClassName="active" exact to="/Admin">admin</NavLink>
                </button>
            </div>


            <div className="userButton">
           
                <button className="sizeOfButtonUser">
                <NavLink className="center-text" activeClassName="active" exact to="/Calendar">Xmas Calendar</NavLink>
                </button>
            </div>
            
            <div className="adminButton"><button className="sizeOfButtonAdmin">admin</button></div>
            <iframe width="200" height="150" 
            src="https://www.youtube.com/embed/KQ-7O3fhAuQ" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>

            </iframe>
            <div className="userButton"><button className="sizeOfButtonUser">Xmax Calendar</button></div>

        </div>

    );


}

export default Accueil;