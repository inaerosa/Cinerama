import React, { useState } from 'react';

import Subscribe from './../components/Subscribe'
import Modal from './../components/Modal'
import './Login.css'

const Login = (props) => {
    const fav = props.fav;
    console.log(fav);
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
      <>
            <div className="login">
                <div className="container-login">
                    <div className="content-login">
                    <h1>Seja bem-vindo!</h1>
                    <p>Entre para salvar seus filmes favoritos</p>
                    <input type="email" name="email" id="email" placeholder="E-mail" size="30"/>
                    <input type="password" name="senha" id="senha" placeholder="Senha" size="30"/>
                    <button>Entrar</button>
                    <button id="btn-subscribe" onClick={() => {setIsModalVisible(true) }}>Quero me Cadastrar</button>
                            {isModalVisible ? (
                                <Modal onClose={() => setIsModalVisible(false)}>
                                    <Subscribe/>
                                </Modal>
                            ) : null}
                    
                    </div>
                </div>
                <div id="titulo">
                    <h1>Cinerama</h1>
                    <p>Seu portal de filmes</p>
                   
                </div>
               
            </div>
    </>
 
    );
}
 
export default Login;