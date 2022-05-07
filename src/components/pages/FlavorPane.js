import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import editIcon from '../images/icons8-quill-pen-64.png'

function TextInputHandler({savePersonalityText, currPersonalityText,
                            saveIdealsText, currIdealsText,
                            saveBondsText, currBondsText,
                            saveFlawsText, currFlawsText}) {

    const [textStringPersonality, setTextStringPersonality] = useState("");
    const [textStringIdeals, setTextStringIdeals] = useState("");
    const [textStringBonds, setTextStringBonds] = useState("");
    const [textStringFlaws, setTextStringFlaws] = useState("");

    const onChangePersonality = e => {
      setTextStringPersonality(e.target.value);
    };

    const onChangeIdeals = e => {
      setTextStringIdeals(e.target.value);
    };

    const onChangeBonds = e => {
        setTextStringBonds(e.target.value);
    };

    const onChangeFlaws = e => {
        setTextStringFlaws(e.target.value);
    };

    const onSubmit = (e) => {
        if(textStringPersonality != ""){
            savePersonalityText(textStringPersonality);
            setTextStringPersonality("");
        }
        if(textStringIdeals != ""){
            saveIdealsText(textStringIdeals);
            setTextStringIdeals("");
        }
        if(textStringBonds != ""){
            saveBondsText(textStringBonds);
            setTextStringBonds("");
        }
        if(textStringFlaws != ""){
            saveFlawsText(textStringFlaws);
            setTextStringFlaws("");
        }
    }
    return <>
    <div class="flavors-form">
        Personality Traits
        <textarea
            class='flavors'
            placeholder={currPersonalityText || "Type here."}
            value={textStringPersonality} 
            onChange={onChangePersonality}
            onSubmit={onSubmit}
        />
        Ideals
        <textarea
            class='flavors'
            placeholder={currIdealsText || "Type here."}
            value={textStringIdeals} 
            onChange={onChangeIdeals}
            onSubmit={onSubmit}
        />
        Bonds
        <textarea
            class='flavors'
            placeholder={currBondsText || "Type here."}
            value={textStringBonds} 
            onChange={onChangeBonds}
            onSubmit={onSubmit}
        />
        Flaws
        <textarea
            class='flavors'
            placeholder={currFlawsText || "Type here."}
            value={textStringFlaws} 
            onChange={onChangeFlaws}
            onSubmit={onSubmit}
        />
    </div>
    <button class="flavorsButton" type="submit" onClick={onSubmit}>Update</button>
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
        {editing ?
        <>
            <TextInputHandler
                currPersonalityText={p[0]}
                savePersonalityText={p[1]}
                currIdealsText={i[0]}
                saveIdealsText={i[1]}
                currBondsText={b[0]}
                saveBondsText={b[1]}
                currFlawsText={f[0]}
                saveFlawsText={f[1]}
            />
        </>
        :
        <>
            Personality Traits
            <div class="flavors">{p[0]}</div>
            Ideals
            <div class="flavors">{i[0]}</div>
            Bonds
            <div class="flavors">{b[0]}</div>
            Flaws
            <div class="flavors">{f[0]}</div>
        </>
        }
    </>;
}

  return <div id="FlavorPane">
      <FlavorTopBar />
      <Flavor />
  </div>

}
