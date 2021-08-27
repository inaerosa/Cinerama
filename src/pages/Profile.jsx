import React from 'react';
import './Profile.css'
import picture from './../img/foto.png'

const Profile = (props) => {

    let fav = props.favList;

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
                            <br></br>
                            <div id="content-fav">
                                {fav ? fav.map((fav, key) =>
                                    <div id="fav" key={key}>
                                        <div class="content-movie">
                                            <li>{fav.name} | {fav.status}</li>
                                            <button id="btn-remove" onClick={() => removeFavorite(fav)}>Remove</button>
                                        </div>
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;