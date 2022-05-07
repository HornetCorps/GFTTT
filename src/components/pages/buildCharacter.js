import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import AbScorePane from './AbScorePane.js';
import SkillsPane from './SkillsPane.js';
import SavingThrowsPane from './SavingThrowsPane.js';
import FlavorPane from './FlavorPane.js';
import EquipmentPane from './EquipmentPane.js';
import ExportButton from '../ExportButton.js';
import ImportButton from '../ImportButton.js';
import FeatsTraitsPane from './FeatsTraitsPane';
import armLogo from '../images/img-18.png';
import hitLogo from '../images/img-19.png';
import visLogo from '../images/img-20.png';
import MiscPane from './MiscPane';

export default function BuildCharacter({userID}) {
    const profBonus = (() => (2+Math.floor((level-1)/4)));

    const [characterName, setCharacterName] = useState('');
    const [charClass, setCharClass] = useState('');
    const [level, setLevel] = useState(0);
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
            userID: userID.uid,
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

    function importChar(strJson) {
      const c = JSON.parse(strJson).character;
      setCharacterName(c.name);
      setCharClass(c.class);
      setLevel(c.level);
      setRace(c.race);
      setBackground(c.background);
      setAlignment(c.alignment);
      setExperience(c.experience);
      setPlayerName(c.player);
      setStrength(c.abilities.strength);
      setDexterity(c.abilities.dexterity);
      setConstitution(c.abilities.constitution);
      setIntelligence(c.abilities.intelligence);
      setWisdom(c.abilities.wisdom);
      setCharisma(c.abilities.charisma);
      setAcrobatics(c.skillProfs.acrobatics);
      setAnimalHandling(c.skillProfs.animalHandling);
      setArcana(c.skillProfs.arcana);
      setAthletics(c.skillProfs.athletics);
      setDeception(c.skillProfs.deception);
      setHistory(c.skillProfs.history);
      setInsight(c.skillProfs.insight);
      setIntimidation(c.skillProfs.intimidation);
      setInvestigation(c.skillProfs.investigation);
      setMedicine(c.skillProfs.medicine);
      setNature(c.skillProfs.nature);
      setPerception(c.skillProfs.perception);
      setPerformance(c.skillProfs.performance);
      setPersuasion(c.skillProfs.performance);
      setReligion(c.skillProfs.religion);
      setSleightOfHand(c.skillProfs.sleightOfHand);
      setStealth(c.skillProfs.stealth);
      setSurvival(c.skillProfs.survival);
      setArmorClass(c.ac);
      setInitiative(c.initiative);
      setSpeed(c.speed);
      setMaxHitPoints(c.maxHitPoints);
      setDarkVision(c.darkVision);
      setStrThrow(c.throwProfs.strength);
      setDexThrow(c.throwProfs.dexterity);
      setConThrow(c.throwProfs.constitution);
      setIntThrow(c.throwProfs.intelligence);
      setWisThrow(c.throwProfs.wisdom);
      setChaThrow(c.throwProfs.charisma);
      setEquipment(c.equipment);
      setPersonalityTraits(c.flavor.personalityTraits);
      setIdeals(c.flavor.ideals);
      setBonds(c.flavor.bonds);
      setFlaws(c.flavor.flaws);
      setFeatsTraits(c.feats);
    }

    async function onSubmit(e) {
        e.preventDefault();
        const buildCharacterSave = {userID: userID.uid,
                                    characterName: characterName,
                                    charClass: charClass,
                                    level: level,
                                    race: race};
        for (const key in buildCharacterSave) {
            if (!buildCharacterSave[key]) {
                window.alert("Character must have a name, class, and level to be saved");
                return;
            }
        }
            await fetch("http://localhost:5000/api/saveCharacter", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(buildCharacterSave),
            })
            .catch(error => {
                console.log(error);
                return;
            });
    }

    return <div className='buildCharacter'>
        <h1> Build A Character</h1>
        <body>
            <div class="box-wrapper">
                <MiscPane
                        cName = {[characterName, setCharacterName]}
                        cClass = {[charClass, setCharClass]}
                        cLevel = {[level, setLevel]}
                        cRace = {[race, setRace]}
                        cBackground = {[background, setBackground]}
                        cAlignment = {[alignment, setAlignment]}
                        cExperience = {[experience, setExperience]}
                        cPlayer = {[playerName, setPlayerName]}
                />
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
                                value={armorClass}
                                onChange={(e) => {
                                    setArmorClass(e.target.value);
                                }}
                            />
                            <h2>Initiative</h2>
                            <input
                                type="text"
                                value={initiative}
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
                                value={speed}
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
                            value={maxHitPoints}
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
                            value={darkVision}
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

                        <FeatsTraitsPane
                          featsTraits={featsTraits}
                          setFeatsTraits={setFeatsTraits}
                        />

                        <FlavorPane
                          p={[personalityTraits, setPersonalityTraits]}
                          i={[ideals, setIdeals]}
                          b={[bonds, setBonds]}
                          f={[flaws, setFlaws]}
                        />



                    <br/ >
                    </div>
                </div>
                <div id="box9">
                    <button class="saveButton" onClick={onSubmit}>Save</button>
                    <button class="cancelButton">Cancel</button>
                    <ExportButton data={getCharacterStruct()} />
                    <ImportButton importChar={importChar} />
                </div>
            </div>
        </body>
    </div>
}
