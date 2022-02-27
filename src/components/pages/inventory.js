import React from 'react';
import '../../App.css';
import './inventory.css';
import { BuildButton } from '../BuildButton';
export default function Inventory() {
    return <div className='inventory'>
        <h1>Compendium</h1>
        <BuildButton>Build Character</BuildButton>
        
    </div>
}