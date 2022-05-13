import React, { useState } from 'react';
import '../../App.css';
import './AbScorePane.css';
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
import manualEntry from '../images/manualIcon.svg'
import incButton from '../images/inc.svg'
import decButton from '../images/dec.svg'

const rollScore = (() => {
  const d6 = (() => (1 + Math.floor(Math.random() * 6)));
  let rolls = [d6(), d6(), d6(), d6()];
  return rolls.sort().slice(1).reduce((sum, x) => sum + x, 0);
});

const modOf = ((x) => Math.floor((x - 10) / 2));

export default function AbScorePane({ str, dex, con, int, wis, cha }) {

  const [editing, setEditing] = useState(0);
  const scores = [
    { key: 0, name: "Strength", logo: strLogo, val: str[0], updater: str[1] },
    { key: 1, name: "Dexterity", logo: dexLogo, val: dex[0], updater: dex[1] },
    { key: 2, name: "Constitution", logo: conLogo, val: con[0], updater: con[1] },
    { key: 3, name: "Intelligence", logo: intLogo, val: int[0], updater: int[1] },
    { key: 4, name: "Wisdom", logo: wisLogo, val: wis[0], updater: wis[1] },
    { key: 5, name: "Charisma", logo: chaLogo, val: cha[0], updater: cha[1] }
  ];

  function swapScore(i, j) {
    const temp = scores[i].val;
    scores[i].updater(scores[j].val);
    scores[j].updater(temp);
  }

  function swapDown(i) {  // the visual direction down, not the lower index
    swapScore(i, (i+1) % 6);
  }

  function swapUp(i) {
    swapScore(i, (i-1+6) % 6);
  }

  function remainingPoints() {
    const costTable = {8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9};
    return 27 - scores
            .map((score)=> costTable[score.val])
            .reduce((sum, x)=> sum + x, 0);
  }

  function AbScoreTopBar() {
    const toggleEditing = () => { setEditing((curr) => (curr===0) ? 1 : 0) };

    const rollRandomScores = () => (
      scores.map(
        (score) => (score.updater.apply(null, [rollScore()]))));

    const manualMode = () => {setEditing(1);};

    const stdArrayMode = () => {
      setEditing(2);
      let i = 0;
      [15,14,13,12,10,8].map((n) => scores[i++].updater(n)); };

    const ptBuyMode = () => {
      setEditing(3);
      scores.map((s) => s.updater(8)); }; // start them all at 8

    const randomMode = () => {
      setEditing(4);
      rollRandomScores(); };

    return <div id="AbScoreTopBar">
      <img class="editButton" src={editIcon}
        alt="Edit Abilities"
        onClick={toggleEditing} />
      {(editing !== 0) && <>
        <img class="editButton" src={manualEntry} onClick={manualMode}/>
        <img class="editButton" src={stdArray} onClick={stdArrayMode}/>
        <img class="editButton" src={pointBuy} onClick={ptBuyMode}/>
        <img class="editButton" src={randIcon}
          alt="Roll Random Abilities"
          onClick={randomMode} />
      </>}
    </div>
  }

  function scoreView(score) {
    return <div class="AbScore">
      <div class="AbScoreMid">
        <img class="statIcon" src={score.logo} alt={score.name} />
        <h2>{score.val} ({modOf(score.val) > 0 && '+'}{modOf(score.val)})</h2>
        <h3>{score.name}</h3>
      </div>
    </div>
  }

  function scoreManual(score) {
    return <div class="AbScore">
      <img class="editButton" src={downArrow} onClick={() => swapDown(score.key)}/>
      <div class="AbScoreMid">
        <img class="statIcon" src={score.logo} alt={score.name} />
        <input
            type="number"
            min='1'
            max='20'
            class="stats"
            value={score.val}
            onChange={(e) => { score.updater.apply(null, [e.target.value]); }}
          />
        <h3>{score.name}</h3>
      </div>
      <img class="editButton" src={upArrow} onClick={() => swapUp(score.key)}/>
    </div>
  }

  function scoreStdArray(score) {
    return <div class="AbScore">
    <img class="editButton" src={downArrow} onClick={() => swapDown(score.key)}/>
      <div class="AbScoreMid">
        <img class="statIcon" src={score.logo} alt={score.name} />
        <h2>{score.val} ({modOf(score.val) > 0 && '+'}{modOf(score.val)})</h2>
        <h3>{score.name}</h3>
      </div>
      <img class="editButton" src={upArrow} onClick={() => swapUp(score.key)}/>
    </div>
  }

  function scorePtBuy(score) {
    const enoughPtsToInc = (n) => (remainingPoints() >= 2
                                || (remainingPoints() > 0 && n < 14));
    const inc = (n) => (enoughPtsToInc(n) ? Math.min(n+1, 15) : n);
    const dec = (n) => (Math.max(n-1, 8));

    return <div class="AbScore">
      <img class="editButton" src={decButton} onClick={() => score.updater(dec)}/>
      <div class="AbScoreMid">
        <img class="statIcon" src={score.logo} alt={score.name} />
        <h2>{score.val} ({modOf(score.val) > 0 && '+'}{modOf(score.val)})</h2>
        <h3>{score.name}</h3>
      </div>
      <img class="editButton" src={incButton} onClick={() => score.updater(inc)}/>
    </div>
  }

  function scoreRand(score) {
    return <div class="AbScore">
      <img class="editButton" src={downArrow} onClick={() => swapDown(score.key)}/>
      <div class="AbScoreMid">
        <img class="statIcon" src={score.logo} alt={score.name} />
        <h2>{score.val} ({modOf(score.val) > 0 && '+'}{modOf(score.val)})</h2>
        <h3>{score.name}</h3>
      </div>
      <img class="editButton" src={upArrow} onClick={() => swapUp(score.key)}/>
    </div>
  }

  function AbScores() {
    return <>
      {scores.map(
        (score) => (
          <>
            {[
              scoreView(score),
              scoreManual(score),
              scoreStdArray(score),
              scorePtBuy(score),
              scoreRand(score),
              ][editing]
            }
          </>
        )
      )}
      {(editing === 3) && <h3>Pts Remaining: {remainingPoints()}</h3>}
    </>;
  }

  return <div id="AbScorePane">
    <AbScoreTopBar />
    <AbScores />
  </div>
}
