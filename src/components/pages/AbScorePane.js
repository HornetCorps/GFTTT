import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';
import strLogo from '../images/img-12.png';
import dexLogo from '../images/img-13.png';
import conLogo from '../images/img-14.png';
import intLogo from '../images/img-15.png';
import wisLogo from '../images/img-16.png';
import chaLogo from '../images/img-17.png';
import editIcon from '../images/icons8-quill-pen-64.png'
import randIcon from '../images/randomScoresIcon.svg'

const rollScore = (() => {
  const d6 = (() => (1+Math.floor(Math.random()*6)));
  let rolls = [d6(), d6(), d6(), d6()];
  return rolls.sort().slice(1).reduce((sum, x) => sum+x, 0);
});

const modOf = ((x) => Math.floor((x-10)/2));

export default function AbScorePane() {
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  const [editing, setEditing] = useState(false);

  const scores = [
    {name: "Strength", logo: strLogo, val: strength, updater: setStrength},
    {name: "Dexterity", logo: dexLogo, val: dexterity, updater: setDexterity},
    {name: "Constitution", logo: conLogo, val: constitution, updater: setConstitution},
    {name: "Intelligence", logo: intLogo, val: intelligence, updater: setIntelligence},
    {name: "Wisdom", logo: wisLogo, val: wisdom, updater: setWisdom},
    {name: "Charisma", logo: chaLogo, val: charisma, updater: setCharisma}
  ];

  function AbScoreTopBar() {
    const toggleEditing = () => {setEditing(!editing)};

    const rollRandomScores = () => (
      scores.map(
        (score) => (score.updater.apply(null, [rollScore()]))));

    return <div id="AbScoreTopBar">
      <img class="editButton" src={editIcon}
        alt="Edit Abilities"
        onClick={toggleEditing} />
      {editing &&
        <img class="editButton" src={randIcon}
          alt="Roll Random Abilities"
          onClick={rollRandomScores} />
      }
    </div>
  }

  function AbScores() {
    return <>
      {scores.map(
        (score) => (
          <>
          <br />
          <img class="statIcon" src={score.logo} alt={score.name} />
          <br />
          {editing ?
            <input
              type="number"
              class ="stats"
              value={score.val}
              onChange={(e) => { score.updater.apply(null, [e.target.value]); }}
            />
            :
            <h2>{score.val} ({modOf(score.val)>0 && '+'}{modOf(score.val)})</h2>
          }
          <h3>{score.name}</h3>
          </>
        )
      )}
    </>;
  }

  return <div id="AbScorePane">
          <AbScoreTopBar />
          <AbScores />
        </div>
}
