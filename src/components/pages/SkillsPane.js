import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';

const PROFS = {
  NONE: 0,  // adds base skill mod only
  HALF: 1,  // adds base skill mod + floor(profBonus/2)
  FULL: 2,  // adds base skill mod + profBonus
  EXPT: 3,  // adds base skill mod + 2*profBonus
};

export default function SkillsPane() {
  // these mods are probably not used to calculate anything else on the
  // character sheet so we can probably get away with making them local
  // NOTE: you will skill need to pass the ability scores in here to use!
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

  // The base abilities for each skill are:
  // Strength: athletics
  // Dexterity: acrobatics, sleightOfHand, stealth
  // Constitution: none.
  // Intelligence: arcana, history, investigation, nature, religion
  // Wisdom: animalHandling, insight, medicine, perception, survival
  // Charisma: deception, intimidation, performance, persuasion


  // Recommended implementation:
  // make an array of skill names, vals, updaters, and base skill modifiers
  // make a single skill component
    // you can use an img button and just swap out the source based on the
    // current skills prof level using a ternary
  // make the "header" part with the skillsTitle and edit editButton
  // map over the skills list

  return <div id="SkillsPane">
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
}
