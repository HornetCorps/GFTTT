import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import editIcon from '../images/icons8-quill-pen-64.png'

export default function FlavorPane({p, i, b, f}) {
  const [personalityTraits, setPersonalityTraits] = useState("");
  //const [ideals, setIdeals] = i;
  //const [bonds, setBonds] = b;
  //const [flaws, setFlaws] = f;

  const [editing, setEditing] = useState(false);

  const flavors = [
      {name:"Personality Traits", val: personalityTraits, updater:setPersonalityTraits},
      {name:"Ideals", val:i, updater:i},
      {name:"Bonds", val:b, updater:b},
      {name:"Flaws", val:f, updater:f}
  ];

  function FlavorTopBar(){
        const toggleEditing = () => {setEditing(!editing)};
        return <div class="FlavorTopBar">
            <img class="editButton" src={editIcon}
                alt="Edit Abilities"
                onClick={toggleEditing} />
        </div>
  }

  function Flavor(){
        return<>
            {flavors.map(
                (flavor) => (
                    <>
                    <h3>{flavor.name}</h3>
                    {editing ?
                        <>
                        <input
                            class="flavors"
                            type="text"
                            value={flavor.val}
                            onChange={(e) => {flavor.updater.apply(null, [e.target.value]); }}
                        />
                        </>
                        :
                        <div class="flavors">{flavor.val}</div>
                    }
                    </>
                )
            )}
        </>;
  }

  return <div id="FlavorPane">
      <FlavorTopBar />
      <Flavor />
  </div>

}
