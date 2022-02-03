import React from 'react';
import '../../App.css';
import './play.css'
export default function Play() {
    return <div className='play'>
            <div className='character-info'>

                <div className='character-pic'></div>

                <h1>Character Info:</h1>
                <br/>
                <p>Name: Feng</p>
                <br/>
                <p>Class: Barbarian</p>
                <br/>
                <p>Race: Half-Orc</p>
                <br/>
                <p>Level: 2</p>
                <br/>
                <p>Exp: 5</p>
                <br/>
                <p>Alignment: Chaotic-Neutral</p>
                <br/>
                <h1>Stats: </h1>
                <br/>
                <p>str: 15 </p>
                <br/>
                <p>dex: 13</p>
                <br/>
                <p>con: 14</p>
                <br/>
                <p>int: 12</p>
                <br/>
                <p>wis: 12</p>
                <br/>
                <p>cha: 10</p>
            </div>
            <div className='map'>

            </div>
            <div className='chat-container'>
                <div className='chat-box'>
                    <p>[8:05 Player 1] Wow that was awesome!</p>
                    <br/>
                    <p>[8:05 Player 2] Great job team.</p>
                    <br/>
                    <p>[8:05 Player 3] Where are we?</p>
                    <br/>
                    <p>[8:05 Player 1] rolling 1d20 = 3</p>
                </div>
                <div className='chat-input'>
                    <form>
                        <p>Enter Text Here: </p>
                    </form>
                </div>
            </div>
            








    
    </div>
}