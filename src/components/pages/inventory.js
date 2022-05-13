import React, {useState, useEffect} from 'react';
import '../../App.css';
import './inventory.css';
import { BuildButton } from '../BuildButton';
import { DeleteButton } from '../DeleteButton';

export default function Inventory({ userID, setInventoryData }) {
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

    async function onSubmit(character) {
        const buildCharacterSave = {userID: userID.uid,
                                    characterName: character.name,
                                    charClass: character.class,
                                    level: character.level,
                                    race: character.race};
            await fetch("http://localhost:5000/api/deleteCharacter", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(buildCharacterSave),
            })
            .catch(error => {
                console.log(error);
                return;
            });
    }

    function CharacterList({ character }) {
        return  (
            <div className='character'>
                <div className='character-name'>
                   {character.characterName}
                </div>
                <hr />
                <p>Level: {character.level}  |  {character.charClass}  |  {character.race}</p>
                <div className='button'>
                    <BuildButton
                        onClick={() => {setInventoryData({name: character.characterName, class: character.charClass, level: character.level, race: character.race })}}
                    >View</BuildButton>
                    <DeleteButton 
                        onClick={() => {onSubmit(character); setCharList((charList) => charList.filter((x) => x !== character))}}    
                    >Delete</DeleteButton>
                </div>
            </div>
        )
    }

    function CharacterGallery() {
        return (
            <div className='character-gallery'>
                {charList.map((character) => (
                    <CharacterList
                        character={character}
                    />
            ))}
            </div>
        )
    }

    return <div className='inventory'>
        <h1 data-testid="compendium-title">My Character</h1>
        <div class='characters-gallery'>
            <CharacterGallery />
        </div>
        <div className='build-button' data-testid="build-button">
            <BuildButton onClick={() => {setInventoryData({})}}>Build Character</BuildButton>
        </div>
    </div>
}
