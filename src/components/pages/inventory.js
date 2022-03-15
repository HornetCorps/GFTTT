import React from 'react';
import '../../App.css';
import './inventory.css';
import { BuildButton } from '../BuildButton';
import MyCharacter from './myCharacter';
import { ViewButton } from '../ViewButton'

export default function Inventory() {
    return <div className='inventory'>
        <h1>Compendium</h1>
        <BuildButton>Build Character</BuildButton>
        <div class='my-characters'> 
            <><MyCharacter /></>
        </div>
    </div>
}