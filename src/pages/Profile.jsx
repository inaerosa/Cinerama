import React from 'react';
import './Profile.css'
import picture from './../img/foto.png'


const Profile = ({fav}) => {

    return ( 
    <>
        <div>
            <div className="thumbnail">
        
                <img src={picture} alt="" />
                <h3><strong>username</strong></h3>
            </div>
            <div className="fav">
                <div className="lista">
                <div className="items_lista">
                       <h2>My Favorites</h2> 
                       {fav ? fav.map (fav => <li>{fav.name}</li>) : ""  }
                       
                    </div>    
                </div>
            </div>
        </div>

    </> 
    );
}
 
export default Profile;