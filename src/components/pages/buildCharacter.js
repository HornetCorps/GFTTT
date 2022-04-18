import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import AbScorePane from './AbScorePane.js';
import SkillsPane from './SkillsPane.js';
import SavingThrowsPane from './SavingThrowsPane.js';
import FlavorPane from './FlavorPane.js';
import EquipmentPane from './EquipmentPane.js';
import ExportButton from '../ExportButton.js';
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
    const [acrobatics, setAcrobatics] = useState(0);
    const [animalHandling, setAnimalHandling] = useState(0);
    const [arcana, setArcana] = useState(0);
    const [athletics, setAthletics] = useState(0);
    const [deception, setDeception] = useState(0);
    const [history, setHistory] = useState(0);
    const [insight, setInsight] = useState(0);
    const [intimidation, setIntimidation] = useState(0);
    const [investigation, setInvestigation] = useState(0);
    const [medicine, setMedicine] = useState(0);
    const [nature, setNature] = useState(0);
    const [perception, setPerception] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [persuasion, setPersuasion] = useState(0);
    const [religion, setReligion] = useState(0);
    const [sleightOfHand, setSleightOfHand] = useState(0);
    const [stealth, setStealth] = useState(0);
    const [survival, setSurvival] = useState(0);

    const [armorClass, setArmorClass] = useState(10);
    const [initiative, setInitiative] = useState(0);
    const [speed, setSpeed] = useState(30);
    const [maxHitPoints, setMaxHitPoints] = useState(0);

    const [darkVision, setDarkVision] = useState(0);
    // made saving throws local to SavingThrowsPane
    const [strThrow, setStrThrow] = useState(false);
    const [dexThrow, setDexThrow] = useState(false);
    const [conThrow, setConThrow] = useState(false);
    const [intThrow, setIntThrow] = useState(false);
    const [wisThrow, setWisThrow] = useState(false);
    const [chaThrow, setChaThrow] = useState(false);

    const [equipment, setEquipment] = useState([]);

    const [personalityTraits, setPersonalityTraits] = useState('');
    const [ideals, setIdeals] = useState('');
    const [bonds, setBonds] = useState('');
    const [flaws, setFlaws] = useState('');

    const [featsTraits, setFeatsTraits] = useState([]);

    const modOf = ((x) => Math.floor((x-10)/2));

    function getCharacterStruct() {
      return {
            name: characterName, class: charClass, level: level, race: race,
            background: background, alignment: alignment, experience: experience,
            player: playerName,
            abilities: {
              strength: strength, dexterity: dexterity, constitution: constitution,
              intelligence: intelligence, wisdom: wisdom, charisma: charisma
            },
            skillProfs: {
              acrobatics: acrobatics, animalHandling: animalHandling,
              arcana: arcana, athletics: athletics, deception: deception,
              history: history, insight: insight, intimidation: intimidation,
              investigation: investigation, medicine: medicine, nature: nature,
              perception: perception, performance: performance, persuasion: persuasion,
              religion: religion, sleightOfHand: sleightOfHand, stealth: stealth,
              survival: survival
            },
            ac: armorClass, initiative: initiative, speed: speed,
            maxHitPoints: maxHitPoints, darkVision: darkVision,
            throwProfs: {
              strength: strThrow, dexterity: dexThrow, constitution: conThrow,
              intelligence: intThrow, wisdom: wisThrow, charisma: chaThrow
            },
            equipment: equipment,
            flavor: {
              personalityTraits: personalityTraits, ideals: ideals,
              bonds: bonds, flaws: flaws
            },
            feats: featsTraits
      };
    }
    async function onSubmit(e) {
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
        <h1> Build A Character</h1>
        <body>
            <div class="box-wrapper">
                <div id="box1">
                    Character Name:
                    <input
                        type="text"
                        class="characterName"
                        onChange={(e) => setCharacterName(e.target.value)}
                    />
                </div>
                <div id="box2">

                    Class:
                    <input
                        type ="text"
                        class="characterInfo"
                        onChange={(e) => {
                            setCharClass((_) => (e.target.value));
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
                          acro={[acrobatics, setAcrobatics]}
                          anim={[animalHandling, setAnimalHandling]}
                          arca={[arcana, setArcana]}
                          athl={[athletics, setAthletics]}
                          dece={[deception, setDeception]}
                          hist={[history, setHistory]}
                          insi={[insight, setInsight]}
                          inti={[intimidation, setIntimidation]}
                          inve={[investigation, setInvestigation]}
                          medi={[medicine, setMedicine]}
                          natu={[nature, setNature]}
                          perc={[perception, setPerception]}
                          perf={[performance, setPerformance]}
                          pers={[persuasion, setPersuasion]}
                          reli={[religion, setReligion]}
                          slei={[sleightOfHand, setSleightOfHand]}
                          stea={[stealth, setStealth]}
                          surv={[survival, setSurvival]}
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
                        <br />
                        <img class="statIcon" src={visLogo} alt="Darkvision" />
                        <h2>Darkvision</h2>
                        <input
                            type="text"
                            class="skills"
                            onChange={(e) => {
                                setDarkVision(e.target.value);
                            }}
                        /> FT.

                        <SavingThrowsPane
                          str={[modOf(strength), strThrow, setStrThrow]}
                          dex={[modOf(dexterity),dexThrow, setDexThrow]}
                          con={[modOf(constitution),conThrow, setConThrow]}
                          int={[modOf(intelligence),intThrow, setIntThrow]}
                          wis={[modOf(wisdom),wisThrow, setWisThrow]}
                          cha={[modOf(charisma),chaThrow, setChaThrow]}
                          getProfBonus={profBonus}
                          />

                        <EquipmentPane
                          equipment={equipment}
                          setEquipment={setEquipment}
                          />


                    </div>
                    <div id="box8">

                        <FlavorPane
                          p={[personalityTraits, setPersonalityTraits]}
                          i={[ideals, setIdeals]}
                          b={[bonds, setBonds]}
                          f={[flaws, setFlaws]}
                        />

                        <FeatsTraitsPane
                          featsTraits={featsTraits}
                          setFeatsTraits={setFeatsTraits}
                        />

                    <br/ >
                    </div>
                </div>
                <div id="box9">
                    <button class="saveButton" onClick={onSubmit}>Save Character</button>
                    <button class="cancelButton">Cancel</button>
                    <ExportButton data={getCharacterStruct()} />
                </div>
            </div>
        </body>
    </div>
}
