import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import editIcon from '../images/icons8-quill-pen-64.png'

export default function SavingThrowsPane({str, dex, con, int, wis, cha, getProfBonus}) {
  const [strMod, strThrow, setStrThrow] = str;
  const [dexMod, dexThrow, setDexThrow] = dex;
  const [conMod, conThrow, setConThrow] = con;
  const [intMod, intThrow, setIntThrow] = int;
  const [wisMod, wisThrow, setWisThrow] = wis;
  const [chaMod, chaThrow, setChaThrow] = cha;

  const [editing, setEditing] = useState(false);
  
  // Suggested implementation:
  // either use the input checkbox style directly or make a bool toggle
  // like the editButton and/or change the styling of the saving throw
  // name to indicate proficiency
  // you need to calculate the mod for each save based on:
  // Base Ability Mod + profBonus() but only add prof if they are proficient

  function SkillsTopBar() { 
        const toggleEditing = () => {setEditing(!editing)};
        return <div id="SavingThrowsTopBar">
            <h2>Saving Throws</h2>
            <img class="editButton" src={editIcon}
                alt="Edit Abilities"
                onClick={toggleEditing} />
            </div>
    }

  function profBonus() {
    
  }

  function getCheck() {
    var checkBox = document.getElementById("myCheck");
  }
  
  function SkillsCheckbox()  {
    return<>

    <> 
      <input
        type="checkbox"
        class="checks"
      />
      {editing ? <input
          type="text"
          class="throws"
          onChange={(e) => {
            setStrThrow(e.target.value);
          }}                    
          />: <text></text> }
      STR<br />
      
    <input
        type="checkbox"
        class="checks"
        onChange={(e) => {
            setDexThrow(e.target.value);
        }}
    />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setDexThrow(e.target.value);
        }}
    />DEX<br />
      
    <input
        type="checkbox"
        class="checks"
        onChange={(e) => {
            setConThrow(e.target.value);
        }}
    />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setConThrow(e.target.value);
        }}
    />CON<br />
      
    <input
        type="checkbox"
        class="checks"
        onChange={(e) => {
            setIntThrow(e.target.value);
        }}
    />    
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setIntThrow(e.target.value);
        }}
    />INT<br />
      
    <input
        type="checkbox"
        class="checks"
        onChange={(e) => {
            setWisThrow(e.target.value);
        }}
    />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setWisThrow(e.target.value);
        }}
    />WIS<br />

      
    <input
        type="checkbox"
        class="checks"
        onChange={(e) => {
            setChaThrow(e.target.value);
        }}
    />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setChaThrow(e.target.value);
        }}
    />CHA<br />      
    </>
      
    </>
  }

  
  
  return <div id="SavingThrowsPane">
    <SkillsTopBar/>
    <SkillsCheckbox/>
  <br />
  </div>
}
