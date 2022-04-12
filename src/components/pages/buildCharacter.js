import React, {useState, useRef} from 'react';
import '../../App.css';
import './buildCharacter.css';
import AbScorePane from './AbScorePane.js';
import SkillsPane from './SkillsPane.js';
import SavingThrowsPane from './SavingThrowsPane.js';
import FlavorPane from './FlavorPane.js';
import EquipmentPane from './EquipmentPane.js';
import armLogo from '../images/img-18.png';
import hitLogo from '../images/img-19.png';
import visLogo from '../images/img-20.png';

export default function BuildCharacter() {
    const profBonus = (() => (2+Math.floor((level-1)/4)));

    const [characterName, setCharacterName] = useState('');
    const [charClass, setCharClass] = useState('');
    const [level, setLevel] = useState(1);
    const [race, setRace] = useState('');
    const [background, setBackground] = useState('');
    const [alignment, setAlignment] = useState('');
    const [experience, setExperience] = useState(0);
    const [playerName, setPlayerName] = useState('');

    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [constitution, setConstitution] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [wisdom, setWisdom] = useState(10);
    const [charisma, setCharisma] = useState(10);

    // made skills local to SkillsPane

    const [armorClass, setArmorClass] = useState(10);
    const [initiative, setInitiative] = useState(0);
    const [speed, setSpeed] = useState(30);
    const [maxHitPoints, setMaxHitPoints] = useState(0);

    const [darkVision, setDarkVision] = useState(0);
    // made saving throws local to SavingThrowsPane
    const [equipment, setEquipment] = useState([]);
    // made personalityTraits, ideals, bonds, flaws local to FlavorPane
    const [featsTraits, setFeatsTraits] = useState([]);

    const [fileDownloadUrl, setFileDownloadURL] = useState(null);
    const dofileDownload = useRef(null);
    const modOf = ((x) => Math.floor((x-10)/2));

    async function onSubmit(e) {
        let buildCharacterSave = { characterName, charClass, level, race, background, alignment, experience, playerName,
                                    strength, dexterity, constitution, intelligence, wisdom, charisma,
                                    armorClass, initiative, speed,
                                  //  acrobatics, animalHandling, arcana, athletics,
                                  //  deception, history, insight, intimidation, investigation, medicine, nature,
                                  //  perception, performance, persuasion, religion, sleightOfHand, stealth, survival,
                                    maxHitPoints, /*strThrow, dexThrow, conThrow, intThrow, wisThrow, chaThrow,*/ darkVision,
                                    equipment, /*personalityTraits, ideals, bonds, flaws,*/ featsTraits
                                 };

        let output = JSON.stringify(buildCharacterSave,
            null, 2);

        // Download it
        const blob = new Blob([output]);
        setFileDownloadURL(URL.createObjectURL(blob));
        dofileDownload.current.click();
        URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
        setFileDownloadURL("");
      /*  e.preventDefault();
        for (const key in buildCharacterSave) {
            if (buildCharacterSave[key] == null) {
                window.alert("All fields required.");
                return;
            }
        }
        console.log(typeof buildCharacterSave);

            await fetch("http://localhost:5000/api/buildCharacter-create", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(buildCharacterSave),
            })
            .catch(error => {
                window.alert(error);
                return;
            });

            window.alert("save sucessful");
*/
    }

    return <div className='buildCharacter'>

    <a className="hidden"
                        download={"character.json"}
                        href={fileDownloadUrl}
                        ref={dofileDownload}
                        />

        <h1> Build A Character</h1>
        <body>
            <div class="box-wrapper">
                <div id="box1">
                    Character Name:
                    <input
                        type="text"
                        class="characterName"
                        onChange={(e) => {
                            setCharacterName(e.target.value);
                        }}
                    />
                </div>
                <div id="box2">

                    Class:
                    <input
                        type ="text"
                        class="characterInfo"
                        onChange={(e) => {
                            setCharClass(e.target.value);
                        }}
                    />

                    Level:
                    <input
                        type ="text"
                        class="characterLevel"
                        onChange={(e) => {
                            setLevel(e.target.value);
                        }}
                    />
                    Race:
                    <input
                        type ="text"
                        class="characterInfo"
                        onChange={(e) => {
                            setRace(e.target.value);
                        }}
                    />
                    Background:
                    <input
                        type ="text"
                        class="characterInfo"
                        onChange={(e) => {
                            setBackground(e.target.value);
                        }}
                    />
                    Alignment:
                    <input
                        type ="text"
                        class="characterInfo"
                        onChange={(e) => {
                            setAlignment(e.target.value);
                        }}
                    />
                    Experience Points:
                    <input
                        type ="text"
                        class="characterExperience"
                        onChange={(e) => {
                            setExperience(e.target.value);
                        }}
                    />
                    Player Name:
                    <input
                        type ="text"
                        class="characterInfo"
                        onChange={(e) => {
                            setPlayerName(e.target.value);
                        }}
                    />
                </div>
                <div id="box3">
                    <AbScorePane
                      str={[strength, setStrength]}
                      dex={[dexterity, setDexterity]}
                      con={[constitution, setConstitution]}
                      int={[intelligence, setIntelligence]}
                      wis={[wisdom, setWisdom]}
                      cha={[charisma, setCharisma]}
                    />
                    <div id="middle-column">
                        <div id="box5">
                            <img class="statIcon" src={armLogo} alt="Armor Class" />
                            <h2>Armor Class</h2>
                            <input
                                type="text"
                                class="armorClass"
                                onChange={(e) => {
                                    setArmorClass(e.target.value);
                                }}
                            />
                            <h2>Initiative</h2>
                            <input
                                type="text"
                                class ="stats"
                                onChange={(e) => {
                                    setInitiative(e.target.value);
                                }}
                            />
                            <br />
                            <h2>Speed</h2>
                            <input
                                type="text"
                                class ="stats"
                                onChange={(e) => {
                                    setSpeed(e.target.value);
                                }}
                            />
                            <br />
                        </div>

                        <SkillsPane
                          str={modOf(strength)}
                          dex={modOf(dexterity)}
                          int={modOf(intelligence)}
                          wis={modOf(wisdom)}
                          cha={modOf(charisma)}
                          getProfBonus={profBonus}
                        />

                    </div>
                    <div id="box7">
                    <img class="statIcon" src={hitLogo} alt="MaxHitPoints" />
                        <h2>Max Hit Points</h2>
                        <input
                            type="text"
                            class="throws"
                            onChange={(e) => {
                                setMaxHitPoints(e.target.value);
                            }}
                        /> / 13

                        <img class="statIcon" src={visLogo} alt="Darkvision" />
                        <h2>Darkvision</h2>
                        <input
                            type="text"
                            class="skills"
                            onChange={(e) => {
                                setDarkVision(e.target.value);
                            }}
                        /> FT.

                        <SavingThrowsPane />

                        <EquipmentPane
                          equipment={equipment}
                          setEquipment={setEquipment}
                          />


                    </div>
                    <div id="box8">

                        <FlavorPane />

                        <h2>Features & Traits</h2>
                        <textarea
                            class="featuresandtraits"
                            cols="40"
                            rows="9"
                            onChange={(e) => {
                                setFeatsTraits(e.target.value);
                            }}
                        /> <br/ >
                    </div>
                </div>
                <div id="box9">
                    <button class="saveButton" onClick={onSubmit}>Save Character</button>
                    <button class="cancelButton">Cancel</button>
                </div>
            </div>
        </body>
    </div>
}
