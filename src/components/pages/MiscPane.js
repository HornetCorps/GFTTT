import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import editIcon from '../images/icons8-quill-pen-64.png'

function TextInputHandler({saveCharText, currCharText, savePlayerText, currPlayerText,
                            currClassText, saveClassText, currRaceText, saveRaceText,
                            currBackgroundText, saveBackgroundText, currAlignmentText, saveAlignmentText,
                            currLevelText, saveLevelText, currExperienceText, saveExperienceText,}){
    
    const [textStringCharacter, setTextStringCharacter] = useState("");
    const [textStringPlayer, setTextStringPlayer] = useState("");
    const [textStringClass, setTextStringClass] = useState("");
    const [textStringRace, setTextStringRace] = useState("");
    const [textStringBackground, setTextStringBackground] = useState("");
    const [textStringAlignment, setTextStringAlignment] = useState("");
    const [textStringLevel, setTextStringLevel] = useState("");
    const [textStringExperience, setTextStringExperience] = useState("");

    const onChangeCharacter = e => {
      setTextStringCharacter(e.target.value);
    };

    const onChangePlayer = e => {
        setTextStringPlayer(e.target.value);
    };

    const onChangeClass = e => {
        setTextStringClass(e.target.value);
    };

    const onChangeRace = e => {
        setTextStringRace(e.target.value);
    };

    const onChangeBackground = e => {
        setTextStringBackground(e.target.value);
    };

    const onChangeAlignment = e => {
        setTextStringAlignment(e.target.value);
    };

    const onChangeLevel = e => {
        setTextStringLevel(e.target.value);
    };

    const onChangeExperience = e => {
        setTextStringExperience(e.target.value);
    };

    const onSubmit = (e) => {
        if(textStringCharacter != ""){
            saveCharText(textStringCharacter);
            setTextStringCharacter("");
        }
        if(textStringPlayer != ""){
            savePlayerText(textStringPlayer);
            setTextStringPlayer("");
        }
        if(textStringClass != ""){
            saveClassText(textStringClass);
            setTextStringClass("");
        }
        if(textStringRace != ""){
            saveRaceText(textStringRace);
            setTextStringRace("");
        }
        if(textStringBackground != ""){
            saveBackgroundText(textStringBackground);
            setTextStringBackground("");
        }
        if(textStringAlignment != ""){
            saveAlignmentText(textStringAlignment);
            setTextStringAlignment("");
        }
        if(textStringLevel != ""){
            saveLevelText(textStringLevel);
            setTextStringLevel("");
        }
        if(textStringExperience != ""){
            saveExperienceText(textStringExperience);
            setTextStringExperience("");
        }
    }

    return <> 
        Character Name:
        <input
            id="miscPaneCharacterName"
            class='miscInput'
            placeholder={currCharText || "Type here."}
            type='text'
            value={textStringCharacter}
            onChange={onChangeCharacter}
            onSubmit={onSubmit}
        />
        <br></br>
        Player Name:
        <input
            id="miscPanePlayerName"
            class='miscInput'
            placeholder={currPlayerText || "Type here."}
            type='text'
            value={textStringPlayer}
            onChange={onChangePlayer}
            onSubmit={onSubmit}
        />
        <br></br>
        Class:
        <input
            id="miscPaneClass"
            style={{marginRight:"20px"}}
            class='miscInput'
            placeholder={currClassText || "Type here."}
            type='text'
            value={textStringClass}
            onChange={onChangeClass}
            onSubmit={onSubmit}
        />
        Race:
        <input
            id="miscPaneRace"
            style={{marginRight:"20px"}}
            class='miscInput'
            placeholder={currRaceText || "Type here."}
            type='text'
            value={textStringRace}
            onChange={onChangeRace}
            onSubmit={onSubmit}
        />
        Background:
        <input
            style={{marginRight:"20px"}}
            class='miscInput'
            placeholder={currBackgroundText || "Type here."}
            type='text'
            value={textStringBackground}
            onChange={onChangeBackground}
            onSubmit={onSubmit}
        />
        Alignment:
        <input
            class='miscInput'
            placeholder={currAlignmentText || "Type here."}
            type='text'
            value={textStringAlignment}
            onChange={onChangeAlignment}
            onSubmit={onSubmit}
        />
        <br></br>
        Level:
        <input
            id="miscPaneLevel"
            style={{marginRight:"20px"}}
            class='miscInput'
            placeholder={currLevelText || "Type here."}
            type='text'
            value={textStringLevel}
            onChange={onChangeLevel}
            onSubmit={onSubmit}
        />
        Experience Points:
        <input
            class='miscInput'
            placeholder={currExperienceText || "Type here."}
            type='text'
            value={textStringExperience}
            onChange={onChangeExperience}
            onSubmit={onSubmit}
        />
        <br></br>
        <button id="miscPaneUpdate" class='miscInputButton' type="submit" onClick={onSubmit} >Update</button>
    </>
    
}

export default function MiscPane({cName, cClass, cLevel, cRace, cBackground, cAlignment, cExperience, cPlayer}){
    const [characterName, setCharacterName] = cName;
    const [charClass, setCharClass] = cClass;
    const [level, setLevel] = cLevel;
    const [race, setRace] = cRace;
    const [background, setBackground] = cBackground;
    const [alignment, setAlignment] = cAlignment;
    const [experience, setExperience] = cExperience;
    const [playerName, setPlayerName] = cPlayer;

    const [editing, setEditing] = useState(false);

    function Misc(){
        const toggleEditing = () => {setEditing(!editing)};

        return<>
            {editing ?
                        <>
                        <TextInputHandler
                            currCharText={cName[0]}
                            saveCharText={cName[1]}
                            currPlayerText={cPlayer[0]}
                            savePlayerText={cPlayer[1]}
                            currClassText={cClass[0]}
                            saveClassText={cClass[1]}
                            currRaceText={cRace[0]}
                            saveRaceText={cRace[1]}
                            currBackgroundText={cBackground[0]}
                            saveBackgroundText={cBackground[1]}
                            currAlignmentText={cAlignment[0]}
                            saveAlignmentText={cAlignment[1]}
                            currLevelText={cLevel[0]}
                            saveLevelText={cLevel[1]}
                            currExperienceText={cExperience[0]}
                            saveExperienceText={cExperience[1]}
                        />
                        <img 
                            class="editButton" 
                            src={editIcon}
                            alt="Edit Information"
                            onClick={toggleEditing} 
                        />
                        {/*comment here
                            Character Name:
                            <TextInputHandler
                                currText={cName[0]}
                                saveText={cName[1]}
                            />
                            <br></br>
                            Player Name:
                            <TextInputHandler
                                currText={cPlayer[0]}
                                saveText={cPlayer[1]}
                            />
                            <br></br>
                            Class:
                            <TextInputHandler
                                currText={cClass[0]}
                                saveText={cClass[1]}
                            />
                            Race:
                            <TextInputHandler
                                currText={cRace[0]}
                                saveText={cRace[1]}
                            />
                            Background:
                            <TextInputHandler
                                currText={cBackground[0]}
                                saveText={cBackground[1]}
                            />
                            Alignment:
                            <TextInputHandler
                                currText={cAlignment[0]}
                                saveText={cAlignment[1]}
                            />
                            <br></br>
                            Level:
                            <TextInputHandler
                                currText={cLevel[0]}
                                saveText={cLevel[1]}
                            />
                            Experience Points:
                            <TextInputHandler
                                currText={cExperience[0]}
                                saveText={cExperience[1]}
                            />
                            <br></br>
                            <img 
                                class="editButton" 
                                src={editIcon}
                                alt="Edit Information"
                                onClick={toggleEditing} 
                            />
                        */}
                        </>
                        :
                        <>
                            <span style={{marginRight:"20px"}}>Character Name: {cName}</span>
                            <br></br>
                            <span>Player Name: {cPlayer}</span>
                            <br></br>
                            <span style={{marginRight:"50px"}}>Class: {cClass}</span>
                            <span style={{marginRight:"50px"}}>Race: {cRace}</span>
                            <span style={{marginRight:"50px"}}>Background: {cBackground}</span>
                            <span style={{marginRight:"50px"}}>Alignment: {cAlignment}</span>
                            <br></br>
                            <span style={{marginRight:"83px"}}>Level: {cLevel}</span>
                            <span>Experience Points: {cExperience}</span>
                            <br></br>
                            <img
                                id="miscPaneEdit"
                                class="editButton" 
                                src={editIcon}
                                alt="Edit Information"
                                onClick={toggleEditing} 
                            />
                        </>
            } 
        </>
  }

    return <div id="MiscPane" data-testid="misc-pane">
        <Misc />
    </div>
}