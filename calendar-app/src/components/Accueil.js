import React from 'react';
import './Accueil.css';

const Accueil = () => {
    return(
        <div className="background">
            
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