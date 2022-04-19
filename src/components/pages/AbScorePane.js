import React, { useState } from 'react';
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
import upArrow from '../images/arrow_up.svg'
import downArrow from '../images/arrow_down.svg'
import stdArray from '../images/standard_array.svg'
import pointBuy from '../images/point_buy.svg'

const rollScore = (() => {
  const d6 = (() => (1 + Math.floor(Math.random() * 6)));
  let rolls = [d6(), d6(), d6(), d6()];
  return rolls.sort().slice(1).reduce((sum, x) => sum + x, 0);
});

const modOf = ((x) => Math.floor((x - 10) / 2));

export default function AbScorePane({ str, dex, con, int, wis, cha }) {

  const [editing, setEditing] = useState(false);
  const scores = [
    { name: "Strength", logo: strLogo, val: str[0], updater: str[1] },
    { name: "Dexterity", logo: dexLogo, val: dex[0], updater: dex[1] },
    { name: "Constitution", logo: conLogo, val: con[0], updater: con[1] },
    { name: "Intelligence", logo: intLogo, val: int[0], updater: int[1] },
    { name: "Wisdom", logo: wisLogo, val: wis[0], updater: wis[1] },
    { name: "Charisma", logo: chaLogo, val: cha[0], updater: cha[1] }
  ];

  function swapScore(i, j) {
    const temp = scores[i].val;
    scores[i].updater(scores[j].val);
    scores[j].updater(temp);
  }

  function totalPoints() {
    const costTable = {8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9};
    return scores
            .map((score)=> costTable[score.val])
            .reduce((sum, x)=> sum + x, 0);
  }

  function AbScoreTopBar() {
    const toggleEditing = () => { setEditing(!editing) };

    const rollRandomScores = () => (
      scores.map(
        (score) => (score.updater.apply(null, [rollScore()]))));

    return <div id="AbScoreTopBar">
      <img class="editButton" src={editIcon}
        alt="Edit Abilities"
        onClick={toggleEditing} />
      {editing && <>
        <img class="editButton" src={randIcon}
          alt="Roll Random Abilities"
          onClick={rollRandomScores} />
        <img class="editButton" src={stdArray}/>
        <img class="editButton" src={pointBuy}/>
      </>}
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
                min='1'
                max='20'
                class="stats"
                value={score.val}
                onChange={(e) => { score.updater.apply(null, [e.target.value]); }}
              />
              :
              <h2>{score.val} ({modOf(score.val) > 0 && '+'}{modOf(score.val)})</h2>
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
