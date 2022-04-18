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

export default function FeatsTraitsPane({featsTraits, setFeatsTraits}) {


    const [editing, setEditing] = useState(false);

    function handleSubmit(item) {
        setFeatsTraits( fts => [...fts, item])
    }

    function deleteItem(fts) {
        setFeatsTraits((featList) => featList.filter((x) => x !== fts))
    }

    function FeatsTraitsTopBar() {
        const toggleEditing = () => (setEditing(!editing));
        return <div id = "FeatsTraitsTopBar">
            <img class="editButton" src={editIcon} alt = "Edit Features and Traits" onClick={toggleEditing} />
        </div>
    }

    function FeatsTraits() {
        return <div id="FeatsTraits">
            <h2>Features & Traits</h2>

            {editing ? <>
                <TextInputHandler itemAdder={handleSubmit} />
                <br />
                <br />
                {featsTraits.map(fts =>
                   <div class = "del">
                   <p>{fts}</p>
                   <img class="redX" onClick={() => deleteItem(fts)} src={redX} alt="delete" />
                   </div>     
                )}
                </>
            : <>
                {featsTraits.map(fts => 
                    <p>{fts}</p>
                )}
            </>
            
            }
        </div>
    }

    return <>
        <FeatsTraitsTopBar />
        <FeatsTraits />
    
    </>

}