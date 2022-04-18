import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import editIcon from '../images/icons8-quill-pen-64.png'

function TextInputHandler({saveText, currText}) {
    const [textString, setTextString] = useState("");
    const onChange = e => {
      setTextString(e.target.value);
    };
    const onSubmit = (e) => {
        if(textString != ""){
            saveText(textString);
            setTextString("");
        }
    }
    return <>
    <div class="flavors-form">
        <textarea
            class='flavors'
            placeholder={currText || "Type here."}
            value={textString} 
            onChange={onChange}
            onSubmit={onSubmit}
        />
        <button class="flavorsButton" type="submit" onClick={onSubmit}>Update</button>
    </div>
    </>
}

export default function FlavorPane({p, i, b, f}) {
  const [personalityTraits, setPersonalityTraits] = p;
  const [ideals, setIdeals] = i;
  const [bonds, setBonds] = b;
  const [flaws, setFlaws] = f;

  const [editing, setEditing] = useState(false);

  const flavors = [
      {name:"Personality Traits", val:p[0], updater:p[1]},
      {name:"Ideals", val:i[0], updater:i[1]},
      {name:"Bonds", val:b[0], updater:b[1]},
      {name:"Flaws", val:f[0], updater:f[1]}
  ];

  function FlavorTopBar(){
        const toggleEditing = () => {setEditing(!editing)};
        return <div class="FlavorTopBar">
            <img class="editButton" src={editIcon}
                alt="Edit Information"
                onClick={toggleEditing} />
        </div>
  }

  function Flavor(){
        return<>
            {editing ? "Click update and then exit edit mode to see changes" : ""}
            {flavors.map(
                (flavor) => (
                    <>
                    <h3>{flavor.name}</h3>
                    {editing ?
                        <>
                        <TextInputHandler
                            currText={flavor.val}
                            saveText={flavor.updater}
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
