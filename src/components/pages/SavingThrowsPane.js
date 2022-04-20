import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import profNone from '../images/rank-one.png';
import profFull from '../images/rank-four.png';
import editIcon from '../images/icons8-quill-pen-64.png'

export default function SavingThrowsPane({str, dex, con, int, wis, cha, getProfBonus}) {
  const savingThrows = [
    {name: "Strength", mod: str[0], val: str[1], updater: str[2]},
    {name: "Dexterity", mod: dex[0], val: dex[1], updater: dex[2]},
    {name: "Constitution", mod: con[0], val: con[1], updater: con[2]},
    {name: "Intelligence", mod: int[0], val: int[1], updater: int[2]},
    {name: "Wisdom", mod: wis[0], val: wis[1], updater: wis[2]},
    {name: "Charisma", mod: cha[0], val: cha[1], updater: cha[2]},
  ];
  const [editing, setEditing] = useState(false);

  function SavesTopBar() {
        const toggleEditing = () => {setEditing(!editing)};
        return <div id="SavingThrowsTopBar">
            <h2>Saving Throws</h2>
            <img class="editButton" src={editIcon}
                alt="Edit Abilities"
                onClick={toggleEditing} />
            </div>
  }

  function SaveItem(save)  {
    return <div class='SavingThrow'>

      {editing
        ? (save.val
          ? <img class='saveThrowIcon'
              onClick={(e) => {save.updater((v) =>(!v))}}
              src={profFull}/>
          : <img class='saveThrowIcon'
              onClick={(e) => {save.updater((v) =>(!v))}}
              src={profNone}/>)
        : (save.val
          ? <img class='saveThrowIcon' src={profFull}/>
          : <img class='saveThrowIcon' src={profNone}/>)
      }
      <h3 class='saveThrowBonus'>
        {(save.mod + ((save.val)?(getProfBonus()):(0))>0) ?? '+'}
        {save.mod + ((save.val)?(getProfBonus()):(0))}
      </h3>
      <h3 class='saveThrowName'>{save.name}</h3>
      </ div>
  }

  function SavesList() {
    return <div id='SavingThrowsList'>
      {savingThrows.map((save) => (SaveItem(save)))}
    </div>
  }

  return <div id="SavingThrowsPane">
    <SavesTopBar />
    <SavesList />
  <br />
  </div>
}
