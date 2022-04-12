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

export default function SkillsPane({str, dex, int, wis, cha, getProfBonus, acro, anim, arca, athl, dece, hist,
                                    insi, inti, inve, medi, natu, perc, perf, pers, reli, slei, stea, surv}) {
    const [editing, setEditing] = useState(false);

    const proficiency = [
        {name: "Acrobattics", base: dex, val: acro[0], updater: acro[1]},
        {name: "Animal Handling", base: wis, val: anim[0], updater: anim[1]},
        {name: "Arcana", base: int, val: arca[0], updater: arca[1]},
        {name: "Atheletics", base: str, val: athl[0], updater: athl[1]},
        {name: "Deception", base: cha, val: dece[0], updater: dece[1]},
        {name: "History", base: int, val: hist[0], updater: hist[1]},
        {name: "Insight", base: wis, val: insi[0], updater: insi[1]},
        {name: "Intimidation", base: cha, val: inti[0], updater: inti[1]},
        {name: "Investigation", base: int, val: inve[0], updater: inve[1]},
        {name: "Medicine", base: wis, val: medi[0], updater: medi[1]},
        {name: "Nature", base: int, val: natu[0], updater: natu[1]},
        {name: "Perception", base: wis, val: perc[0], updater: perc[1]},
        {name: "Performance", base: cha, val: perf[0], updater: perf[1]},
        {name: "Persuasion", base: cha, val: pers[0], updater: pers[1]},
        {name: "Religion", base: int, val: reli[0], updater: reli[1]},
        {name: "Sleight of Hand", base: dex, val: slei[0], updater: slei[1]},
        {name: "Stealth", base: dex, val: stea[0], updater: stea[1]},
        {name: "Survival", base: wis, val: surv[0], updater: surv[1]},
    ];

    function SkillsTopBar() {
        const toggleEditing = () => {setEditing(!editing)};
        return <div class="SkillsTopBar">
            <h2 class="skillsTitle">Skills</h2>
            <img class="editButton" src={editIcon}
                alt="Edit Abilities"
                onClick={toggleEditing} />
            </div>
    }

    function positiveNum(num) {
        if (num > 0) {
            return "+" + num;
        } else {
            return num;
        }
    }

    function calculateSkillMod(profLevel, baseMod) {
            if (profLevel == PROFS.NONE) {
                return positiveNum(baseMod)
            } else if (profLevel == PROFS.HALF) {
                return positiveNum(baseMod + Math.floor(getProfBonus()/2));
            } else if (profLevel == PROFS.FULL) {
                return positiveNum(baseMod + getProfBonus())
            } else if (profLevel == PROFS.EXPT) {
                return positiveNum(baseMod + 2 * getProfBonus())
            }
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
                    {!editing && <div class='prof-bonus'>{calculateSkillMod(proficient.val, proficient.base)}</div>}
                    <>
                    <p class='skills-list'>{proficient.name}</p>
                    </>
                    <br/>
            </>}
        );
    }

    return <div id="SkillsPane">
        <div id="SkillsTopBar"><SkillsTopBar /></div>
        <SkillsList />
   </div>

}
