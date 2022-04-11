import React, {useState} from 'react';
import '../../App.css';
import './buildCharacter.css';

export default function FlavorPane() {
  const [personalityTraits, setPersonalityTraits] = useState('');
  const [ideals, setIdeals] = useState('');
  const [bonds, setBonds] = useState('');
  const [flaws, setFlaws] = useState('');

  // Suggested implementation
  // add the edit button and swap between textarea's and formatted display text
  // you could make use of a map here if you want as well
  return <>
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
  </>
}
