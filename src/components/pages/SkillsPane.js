import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import editIcon from '../images/icons8-quill-pen-64.png'
import profNone from '../images/rank-one.png' 
import profHalf from '../images/rank-two.png' 
import profFull from '../images/rank-three.png' 
import profExpt from '../images/rank-four.png' 

const PROFS = {
  NONE: 0,  // adds base skill mod only
  HALF: 1,  // adds base skill mod + floor(profBonus/2)
  FULL: 2,  // adds base skill mod + profBonus
  EXPT: 3,  // adds base skill mod + 2*profBonus
};

const profList = [profNone, profHalf, profFull, profExpt]

export default function SkillsPane({str, dex, int, wis, cha}) {
    const [acrobatics, setAcrobatics] = useState(PROFS.NONE);
    const [animalHandling, setAnimalHandling] = useState(PROFS.NONE);
    const [arcana, setArcana] = useState(PROFS.NONE);
    const [athletics, setAthletics] = useState(PROFS.NONE);
    const [deception, setDeception] = useState(PROFS.NONE);
    const [history, setHistory] = useState(PROFS.NONE);
    const [insight, setInsight] = useState(PROFS.NONE);
    const [intimidation, setIntimidation] = useState(PROFS.NONE);
    const [investigation, setInvestigation] = useState(PROFS.NONE);
    const [medicine, setMedicine] = useState(PROFS.NONE);
    const [nature, setNature] = useState(PROFS.NONE);
    const [perception, setPerception] = useState(PROFS.NONE);
    const [performance, setPerformance] = useState(PROFS.NONE);
    const [persuasion, setPersuasion] = useState(PROFS.NONE);
    const [religion, setReligion] = useState(PROFS.NONE);
    const [sleightOfHand,setSleightOfHand] = useState(PROFS.NONE);
    const [stealth, setStealth] = useState(PROFS.NONE);
    const [survival, setSurvival] = useState(PROFS.NONE);
    const [editing, setEditing] = useState(false);


    function SkillsTopBar() { 
        const toggleEditing = () => {setEditing(!editing)};
        return <div class="SkillsTopBar">
            <h2 class="skillsTitle">Skills</h2>
            <img class="editButton" src={editIcon}
                alt="Edit Abilities"
                onClick={toggleEditing} />
            </div>
    }

    function SkillsList() {
       return proficiency.map((proficient) => { 
            return <>
                    {editing ? 
                    <img class='prof' src={profList[proficient.val]} 
                        onClick={(e) => {
                            proficient.updater((curr) => (curr + 1) % 4);
                        }}
                    />
                    : <img class='prof' src={profList[proficient.val]} 
                    />
                    }
                    {editing && <p class='skills-list'>{proficient.base}</p>}
                    <>
                    <p class='skills-list'>{proficient.name}</p>
                    </>
                    <br/>
            </>}
        );
    }

    const proficiency = [
        {name: "Acrobattics", base: dex, val: acrobatics, updater: setAcrobatics},
        {name: "Animal Handling", base: wis, val: animalHandling, updater: setAnimalHandling},
        {name: "Arcana", base: int, val: arcana, updater: setArcana},
        {name: "Deception", base: cha, val: deception, updater: setDeception},
        {name: "History", base: int, val: history, updater: setHistory},
        {name: "Insight", base: wis, val: insight, updater: setInsight},
        {name: "Intimidation", base: cha, val: intimidation, updater: setIntimidation},
        {name: "Investigation", base: int, val: investigation, updater: setInvestigation},
        {name: "Medicine", base: wis, val: medicine, updater: setMedicine},
        {name: "Nature", base: int, val: nature, updater: setNature},
        {name: "Perception", base: wis, val: perception, updater: setPerception},
        {name: "Performance", base: cha, val: performance, updater: setPerformance},
        {name: "Persuasion", base: cha, val: persuasion, updater: setPersuasion},
        {name: "Religion", base: int, val: religion, updater: setReligion},
        {name: "Sleight of Hand", base: dex, val: sleightOfHand, updater: setSleightOfHand},
        {name: "Stealth", base: dex, val: stealth, updater: setStealth},
        {name: "Survival", base: wis, val: survival, updater: setSurvival},
    ];

    return <div id="SkillsPane">
        <div id="SkillsTopBar"><SkillsTopBar /></div>
        <SkillsList /> 
   </div>
   
}
