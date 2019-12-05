import React from 'react';
import './Accueil.css';
import './image.css';
import './image.svg';

const Accueil = () => {
    return(
        <div className="background">
            
            <div className="adminButton"><button className="sizeOfButtonAdmin">admin</button></div>
            <div className="userButton"><button className="sizeOfButtonUser">Xmax Calendar</button></div>

        </div>

    );


}

export default Accueil;