import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';

export default function SavingThrowsPane() {
  const [strThrow, setStrThrow] = useState(false);
  const [dexThrow, setDexThrow] = useState(false);
  const [conThrow, setConThrow] = useState(false);
  const [intThrow, setIntThrow] = useState(false);
  const [wisThrow, setWisThrow] = useState(false);
  const [chaThrow, setChaThrow] = useState(false);

  // Suggested implementation:
  // either use the input checkbox style directly or make a bool toggle
  // like the editButton and/or change the styling of the saving throw
  // name to indicate proficiency
  // you need to calculate the mod for each save based on:
  // Base Ability Mod + profBonus() but only add prof if they are proficient

  return <>
    <h2 class="throwsTitle">Saving Throws</h2>
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setStrThrow(e.target.value);
        }}
    />
    STR<br />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setDexThrow(e.target.value);
        }}
    />
    DEX<br />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setConThrow(e.target.value);
        }}
    />
    CON <br />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setIntThrow(e.target.value);
        }}
    />
    INT<br />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setWisThrow(e.target.value);
        }}
    />
    WIS<br />
    <input
        type="text"
        class="throws"
        onChange={(e) => {
            setChaThrow(e.target.value);
        }}
    />
    CHA<br /><br />
  </>
}
