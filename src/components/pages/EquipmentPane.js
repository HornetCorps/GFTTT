import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';

export default function EquipmentPane({equipment, setEquipment}) {
  // you have the equipment variable which contains the current state of the
  // equipment list (it's an array so you can index and map over it) and
  // setEquipment() which is a function that you can pass either a new
  // value to or a function that mutates the current value. I sent you a link
  // that explains how to do this with spread syntax but you can also use
  // filter to remove items
  return <>
    <h2 class="equipmentTitle"> Equipment </h2>
      <textarea
          class="equipment"
          cols="30"
          rows="10"
          onChange={(e) => {
              setEquipment(e.target.value);
          }}
      />
  </>
}
