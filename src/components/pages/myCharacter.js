import React from 'react';
import '../../App.css';
import './myCharacter.css';
import { BuildButton } from '../BuildButton';
import profilePlaceHolder from '../images/profilePlaceHolder.jpg';

export default function MyCharacter({name, charClass, level}) {
    return <div class="my-character">
        <div class='character'>
            <div class='character-image-name'>
                <div id='character-image'>
                    <img class="profilePlaceHolder" src={profilePlaceHolder} alt="icon of a cute goblin" width='100'  height='100' />
                </div>
                <div id='character-name'>
                    <h1>{name}</h1>
                </div>
                <h2>Level {level} {charClass}</h2>
            </div>
            <div id='button'>
                <BuildButton>View</BuildButton>
                <BuildButton>Edit</BuildButton>
            </div>
        </div>
</div>
}
