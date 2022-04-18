import React from 'react';
import '../../App.css';
import './inventory.css';
import { BuildButton } from '../BuildButton';
import { ViewButton } from '../ViewButton'

export default function Inventory() {

    const charList = [ 
        { 
            characterName: 'Chaerieth Casilltenirra', 
            charClass: 'Rogue', 
            level: 3, 
            race: 'Human'
        }, 
        { 
            characterName: 'Elijah Truthforest', 
            charClass: 'Rogue', 
            level: 2, 
            race: 'Human'
        }
    ]

    function CharacterList({ character }) { 
        return  (
            <div className='character'> 
                <div className='character-name'> 
                   {character.characterName}
                </div>
                <hr />
                <p>Level: {character.level}  |  {character.charClass}  |  {character.race}</p>
                <div className='button'>
                    <ViewButton >View</ViewButton>
                </div>
            </div> 
        )
    }

    function CharacterGallery() { 
        return ( 
            <div className='character-gallery'>
                {charList.map((character) => ( 
                    <CharacterList 
                        key={character.characterName}
                        character={character}
                    />
            ))}   
            </div>
        )
    }

    return <div className='inventory'>
        <h1>My Character</h1>
        <div class='characters-gallery'> 
            <CharacterGallery />
        </div>
        <div className='build-button'>
            <BuildButton>Build Character</BuildButton>
        </div>
    </div>
}