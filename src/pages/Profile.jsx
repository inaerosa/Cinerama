import React from 'react';
import './Profile.css'
import picture from './../img/foto.png'
import {useHistory} from 'react-router-dom'

import { Heart } from 'react-feather';
import Button from './../components/Button'

const Profile = (props) => {

    let fav = props.favList;
    const history = useHistory();
    
    const removeFavorite = (id) => {
        props.handleClickRemoval(id);
    } 


    return ( 
    <>
        <div>
            <div className="thumbnail">
        
                <img src={picture} alt="" />
                <h3><strong>user</strong></h3>
            </div>
            <div className="fav">
                <div className="lista">
                <div className="items_lista">
                       <h2>My Favorites</h2> 
                       {fav ? fav.map ((fav, key) => 
                            <div key={key}> 
                                <li>{fav.name} | {fav.status}</li>
                                <Button onClick= {()=> removeFavorite(fav)}><Heart id="heart" /></Button>
                               
                                </div>
                             ) : ""  }
                    </div>    
                </div>
            </div>
        </div>

    </> 
    );
}
 
export default Profile;