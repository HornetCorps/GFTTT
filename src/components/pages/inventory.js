import React, {useState, useEffect} from 'react';
import '../../App.css';
import './inventory.css';
import { BuildButton } from '../BuildButton';
import { ViewButton } from '../ViewButton'

export default function Inventory({userID}) {
    const [charList, setCharList] = useState([]);

    useEffect(()=> {
      const getCharacterList = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/getCharacter/"+(userID.uid));
          if(!res.ok) throw Error("Failed to get data.");
          const chars = await res.json();
          setCharList(chars);
        } catch (err) {
          console.log(err);
        }
      }
      setTimeout(()=> getCharacterList(), 10);
    }, [userID]);

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
