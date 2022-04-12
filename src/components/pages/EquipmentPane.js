import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import editIcon from '../images/icons8-quill-pen-64.png'
import redX from '../images/redX.png'

function TextInputHandler({itemAdder}) {
    const [textString, setTextString] = useState("");
    const onChange = e => {
      setTextString(e.target.value);
    };
    const onSubmit = (e) => {
      itemAdder(textString);
      setTextString("");
    }
    return <>
      <input
        class='equipmentInput'
        type='text'
        value={textString}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <button type="submit" onClick={onSubmit} >add</button>
    </>
}

export default function EquipmentPane({equipment, setEquipment}) {
  // you have the equipment variable which contains the current state of the
  // equipment list (it's an array so you can index and map over it) and
  // setEquipment() which is a function that you can pass either a new
  // value to or a function that mutates the current value. I sent you a link
  // that explains how to do this with spread syntax but you can also use
  // filter to remove items
  const [editing, setEditing] = useState(false);

  function handleSubmit(item) {
    setEquipment( equip => [...equip, item])
  }
  function EquipmentTopBar() {
    const toggleEditing = () => {setEditing(!editing)};
    return <div id="EquipmentTopBar">
      <img class="editButton" src={editIcon} alt = "Edit Equipment" onClick={toggleEditing} />
    </div>
  }


  function Equipment() {

    return <div id="Equipment">
        <h2>Equipment</h2>

        {editing ? <>
            <TextInputHandler
              itemAdder={handleSubmit}
             />
            <br/>
            <br/>
            {equipment.map(equip =>
              <div class = "del">
              <h2>{equip}</h2>
              <img class="redX" src={redX} alt="delete" />
              </div>
            )}
            </>
          : <>
          {equipment.map(equip =>
            <h2>{equip}</h2>
          )}
          </>
        }



    </div>
  }

  return <div id="EquipmentPane">
    <EquipmentTopBar/>
    <Equipment />


  </div>
}
