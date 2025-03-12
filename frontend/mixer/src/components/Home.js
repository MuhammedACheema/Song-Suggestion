import React from "react";
import './Home.css'
import logo from './images/studio.jpg'

function Home(){
    return(
        <header>
            <h1>Welcome to DJ Mixer</h1>
            <h2>DJ Mixer, is an app that allows you to mix songs based on your emotion and the genre you like. DJ mixer also has a feauture that will allow you to input your own songs, and we will mix them for you</h2>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default Home;