import React from 'react';
import '../../App.css';
import './profile.css';
import profilePlaceHolder from '../images/profilePlaceHolder.jpg';

export default function Profile() {
    return <div class="profile">
        <div class="BoxWrapper">
            <div id="Box1">
                <img class="profilePlaceHolder" src={profilePlaceHolder} alt="icon of a cute goblin"/>
            </div>
            <div id="Box2">
                <div id="Box3">
                    <h2 class="DisplayName">Display Name:</h2>
                    <input type="text" label="dName" class="dName"></input>
                </div>
                <div id="Box4">
                   <p class="AboutMe">About Me:</p>
                   <textarea label="aboutMe" class="aboutMe" cols="40" rows="13"></textarea>
                </div>
            </div>
        </div>
    </div>
}