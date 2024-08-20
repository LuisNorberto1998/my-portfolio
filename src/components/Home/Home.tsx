"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
    return (
        <div id="inicio" className="card-home">
            <div className="card-home-image">
                <img src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" alt="Image profile" />
            </div>
            <div className="card-body">
                <div className="card-home-text">
                    <h3 className="gradient-text-inverse">Soy, Norberto</h3>
                    <h1 className="gradient-text">
                        <Typewriter words={["Front-end developer"]} loop={false} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} />
                        <span className="typewriter-cursor">|</span>
                    </h1>
                    <h5>
                        Apasionado por la programación y la comida, no soy
                        <br />
                        un <strong className="strong-text">robot</strong>, inquieto, con ganas de aprender <br />
                        constantemente y tomar <strong className="strong-text">vino</strong>.
                    </h5>
                </div>
                <div className="card-form">
                    <div className="input-wrapper">
                        <input className="ipnut-email" type="email" placeholder="luis_norberto1998@hotmail.com" disabled={true} />
                        <span className="material-symbols-outlined icon-email">mail</span>
                    </div>
                    <button className="btn-icon">
                        <span className="material-symbols-outlined icon">send</span>
                    </button>
                    <button className="btn-icon">
                        <span className="material-symbols-outlined icon">content_copy</span>
                    </button>
                    <button className="btn-icon">
                        <span className="material-symbols-outlined icon">download</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
