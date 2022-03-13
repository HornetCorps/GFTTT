import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import strLogo from '../images/img-12.png';
import dexLogo from '../images/img-13.png';
import conLogo from '../images/img-14.png';
import intLogo from '../images/img-15.png';
import wisLogo from '../images/img-16.png';
import chaLogo from '../images/img-17.png';
import armLogo from '../images/img-18.png';
import hitLogo from '../images/img-19.png';
import visLogo from '../images/img-20.png';

export default function BuildCharacter() {
    
    const [characterName, setCharacterName] = useState();
    const [charClass, setCharClass] = useState();
    const [level, setLevel] = useState();
    const [race, setRace] = useState();
    const [background, setBackground] = useState();
    const [alignment, setAlignment] = useState();
    const [experience, setExperience] = useState();
    const [playerName, setPlayerName] = useState();
    const [strength, setStrength] = useState();
    const [dexterity, setDexterity] = useState();
    const [constitution, setConstitution] = useState(); 
    const [intelligence, setIntelligence] = useState(); 
    const [wisdom, setWisdom] = useState(); 
    const [charisma, setCharisma] = useState();
    const [armorClass, setArmorClass] = useState();
    const [initiative, setInitiative] = useState();  
    const [speed, setSpeed] = useState();  
    const [acrobatics, setAcrobatics] = useState();  
    const [animalHandling, setAnimalHandling] = useState();  
    const [arcana, setArcana] = useState();  
    const [athletics, setAthletics] = useState();  
    const [deception, setDeception] = useState();  
    const [history, setHistory] = useState();  
    const [insight, setInsight] = useState();  
    const [intimidation, setIntimidation] = useState();  
    const [investigation, setInvestigation] = useState();  
    const [medicine, setMedicine] = useState();  
    const [nature, setNature] = useState();  
    const [perception, setPerception] = useState();    
    const [performance, setPerformance] = useState();  
    const [persuasion, setPersuasion] = useState();  
    const [religion, setReligion] = useState();  
    const [sleightOfHand,setSleightOfHand] = useState();  
    const [stealth, setStealth] = useState();
    const [survival, setSurvival] = useState();
    const [maxHitPoints, setMaxHitPoints] = useState();
    const [strThrow, setStrThrow] = useState();
    const [dexThrow, setDexThrow] = useState();    
    const [conThrow, setConThrow] = useState();    
    const [intThrow, setIntThrow] = useState();        
    const [wisThrow, setWisThrow] = useState();    
    const [chaThrow, setChaThrow] = useState();    
    const [darkVision, setDarkVision] = useState();    
    const [equipment, setEquipment] = useState();      
    const [personalityTraits, setPersonalityTraits] = useState();
    const [ideals, setIdeals] = useState(); 
    const [bonds, setBonds] = useState(); 
    const [flaws, setFlaws] = useState(); 
    const [featsTraits, setFeatsTraits] = useState();     

    async function onSubmit(e) {
        let buildCharacterSave = { characterName, charClass, level, race, background, alignment, experience,
                                    playerName, strength, dexterity, constitution, intelligence, wisdom, charisma,
                                    armorClass, initiative, speed, acrobatics, animalHandling, arcana, athletics,
                                    deception, history, insight, intimidation, investigation, medicine, nature,
                                    perception, performance, persuasion, religion, sleightOfHand, stealth, survival,
                                    maxHitPoints, strThrow, dexThrow, conThrow, intThrow, wisThrow, chaThrow, darkVision,
                                    equipment, personalityTraits, ideals, bonds, flaws, featsTraits
                                 };
        e.preventDefault();

        if ( characterName == null || charClass == null || level == null ||  race == null ||  background == null ||  alignment == null ||  experience == null || 
            playerName == null ||  strength == null ||  dexterity == null ||  constitution == null ||  intelligence == null ||  wisdom == null ||  charisma == null || 
            armorClass == null ||  initiative == null ||  speed == null ||  acrobatics == null ||  animalHandling == null ||  arcana == null ||  athletics == null || 
            deception == null ||  history == null ||  insight == null ||  intimidation == null ||  investigation == null ||  medicine == null ||  nature == null || 
            perception == null ||  performance == null ||  persuasion == null ||  religion == null ||  sleightOfHand == null ||  stealth == null ||  survival == null || 
            maxHitPoints  == null ||  strThrow == null ||  dexThrow == null ||  conThrow == null ||  intThrow == null ||  wisThrow == null ||  chaThrow == null ||  darkVision == null || 
            equipment == null ||  personalityTraits == null ||  ideals == null ||  bonds == null ||  flaws == null ||  featsTraits == null ) {
                window.alert("All fields required.");
                return;
            }

            window.alert("save sucessful");

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
                    <div id="box4">
                        <img class="statIcon" src={strLogo} alt="Strength" />
                        <h2>Strength</h2>
                        <input 
                            type="text"  
                            class ="stats"
                            onChange={(e) => {
                                setStrength(e.target.value);
                            }}
                        />
                        <br />
                        <img class="statIcon" src={dexLogo} alt="Dexterity" />
                        <h2>Dexterity</h2>
                        <input 
                            type="text"  
                            class ="stats"
                            onChange={(e) => {
                                setDexterity(e.target.value);
                            }}
                        />
                        <br />
                        <img class="statIcon" src={conLogo} alt="Constitution" />
                        <h2>Constitution</h2>
                        <input 
                            type="text" 
                            class ="stats"
                            onChange={(e) => {
                                setConstitution(e.target.value);
                            }}
                        />
                        <br />
                        <img class="statIcon" src={intLogo} alt="Intelligence" />
                        <h2>Intelligence</h2>
                        <input 
                            type="text" 
                            class ="stats"
                            onChange={(e) => {
                                setIntelligence(e.target.value);
                            }}
                        />
                        <br />
                        <img class="statIcon" src={wisLogo} alt="Wisdom" />
                        <h2>Wisdom</h2>
                        <input 
                            type="text"  
                            class ="stats"
                            onChange={(e) => {
                                setWisdom(e.target.value);
                            }}
                        />
                        <br />
                        <img class="statIcon" src={chaLogo} alt="Charisma" />
                        <h2>Charisma</h2>
                        <input 
                            type="text" 
                            class ="stats"
                            onChange={(e) => {
                                setCharisma(e.target.value);
                            }}
                        />
                    </div>
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
                        <div id="box6">
                            <h2 class="skillsTitle">Skills</h2>
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setAcrobatics(e.target.value);
                                }}
                            />
                            Acrobatics <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setAnimalHandling(e.target.value);
                                }}
                            />
                            Animal Handling <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setArcana(e.target.value);
                                }}
                            />
                            Arcana <br/>
                            <input 
                                type="text"  
                                class="skills"
                                onChange={(e) => {
                                    setAthletics(e.target.value);
                                }}
                            />
                            Athletics <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setDeception(e.target.value);
                                }}
                            />
                            Deception <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setHistory(e.target.value);
                                }}
                            />
                            History <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setInsight(e.target.value);
                                }}
                            />
                            Insight <br />
                            <input 
                                type="text"  
                                class="skills"
                                onChange={(e) => {
                                    setIntimidation(e.target.value);
                                }}
                            />
                            Intimidation <br/>
                            <input 
                                type="text"  
                                class="skills"
                                onChange={(e) => {
                                    setInvestigation(e.target.value);
                                }}
                            />
                            Investigation <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setMedicine(e.target.value);
                                }}
                            />
                            Medicine <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setNature(e.target.value);
                                }}
                            />
                            Nature <br />
                            <input 
                                type="text"  
                                class="skills"
                                onChange={(e) => {
                                    setPerception(e.target.value);
                                }}
                            />
                            Perception <br />
                            <input 
                                type="text"  
                                class="skills"
                                onChange={(e) => {
                                    setPerformance(e.target.value);
                                }}
                            />
                            Performance <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setPersuasion(e.target.value);
                                }}
                            />
                            Persuasion <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setReligion(e.target.value);
                                }}
                            />
                            Religion <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setSleightOfHand(e.target.value);
                                }}
                            />
                            Sleight of Hand <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setStealth(e.target.value);
                                }}
                            />
                            Stealth <br />
                            <input 
                                type="text" 
                                class="skills"
                                onChange={(e) => {
                                    setSurvival(e.target.value);
                                }}
                            />
                            Survival <br />
                        </div>
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
                        <h2 class="throwsTitle">Saving Throws</h2>
                        <input 
                            type="text" 
                            class="throws"
                            onChange={(e) => {
                                setStrThrow(e.target.value);
                            }}
                        /> 
                        STR<br />
                        <input 
                            type="text"  
                            class="throws"
                            onChange={(e) => {
                                setDexThrow(e.target.value);
                            }}
                        />
                        DEX<br />
                        <input 
                            type="text" 
                            class="throws"
                            onChange={(e) => {
                                setConThrow(e.target.value);
                            }}
                        /> 
                        CON <br />
                        <input 
                            type="text" 
                            class="throws"
                            onChange={(e) => {
                                setIntThrow(e.target.value);
                            }}
                        />
                        INT<br />
                        <input 
                            type="text"  
                            class="throws"
                            onChange={(e) => {
                                setWisThrow(e.target.value);
                            }}
                        /> 
                        WIS<br />
                        <input 
                            type="text" 
                            class="throws"
                            onChange={(e) => {
                                setChaThrow(e.target.value);
                            }}
                        />
                        CHA<br /><br />

                        <img class="statIcon" src={visLogo} alt="Darkvision" />
                        <h2>Darkvision</h2>
                        <input 
                            type="text" 
                            class="skills"
                            onChange={(e) => {
                                setDarkVision(e.target.value);
                            }}
                        /> FT.

                        <h2 class="equipmentTitle"> Equipment </h2>
                        <textarea 
                            class="equipment" 
                            cols="30" 
                            rows="10"
                            onChange={(e) => {
                                setEquipment(e.target.value);
                            }}
                        />


                        
                    </div>
                    <div id="box8">
                        <h2>Personality Traits</h2>
                        <textarea 
                            class="personalityTraits" 
                            cols="40" 
                            rows="4"
                            onChange={(e) => {
                                setPersonalityTraits(e.target.value);
                            }}
                        /> <br/ >
                        <h2>Ideals</h2>
                        <textarea 
                            class="ideals" 
                            cols="40" 
                            rows="4"
                            onChange={(e) => {
                                setIdeals(e.target.value);
                            }}
                        /> <br/ >
                        <h2>Bonds</h2>
                        <textarea 
                            class="bonds" 
                            cols="40" 
                            rows="4"
                            onChange={(e) => {
                                setBonds(e.target.value);
                            }}
                        /> <br/ >
                        <h2>Flaws</h2>
                        <textarea 
                            class="flaws" 
                            cols="40" 
                            rows="4"
                            onChange={(e) => {
                                setFlaws(e.target.value);
                            }}
                        /> <br/ >
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