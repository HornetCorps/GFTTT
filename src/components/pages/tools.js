import React from 'react';
import '../../App.css';

export default function Tools() {
    return <div className='tools'>
        <h1>How to play DND</h1>
        <p>Dungeons and Dragons is a tabletop roleplaying game in which a Game Master and at least one Player Character work together to tell a collaborative story. The main goal of DND, as with any game, is to have fun while exploring the world that the DM presents you with. While you can essentially do anything in a DND game�and we really do mean anything�there are some rules you'll need to understand in order to make you character and play the game. We use a combination of Ability Scores, Skills, and Feats to quantify your characters capabilities and give you a sense of what your options are when presented with any situation in a game.</p>
        <h2>Abilities and Ability Checks</h2>
        <p>In order to Your characters strengths andc weaknesses are roughly quantified by <b>Ability Scores</b>, of which there are six. We'll describe each ability score in terms of how it relates to interacting with a tomato (strange, yes, but trust us that it will help) and then we'll give a brief description of what each score is used for.</p>
        <p><b>Strength</b> is the ability to crush a tomato or lift a box of tomatoes. We use the strength ability for things like melee weapon attacks, determining our carry weight, and when we perform athletic tasks.</p>
        <p><b>Dexterity</b> is the ability to throw a tomato accurately or dodge a tomato that someone throws at you. We use dexterity to calculate your Armor Class (how hard it is to hit you with an attack), perform ranged weapon attacks, and to move quietly or pick a lock.</p>
        <p><b>Constitution</b> is the ability eat a rotten tomato without getting sick. We use constitution to determine how tough our character is or how much damage they can sustain without falling unconcious.</p>
        <p><b>Intelligence</b> is knowing that the tomato is a fruit or knowing the scientific name of a tomato. It is used to recall information accurately or solve logical puzzles or problems.</p>
        <p><b>Wisdom</b> is knowing not to put a tomato in a fruit salad. Wisdom is also the ability used to determine if someone is being honest with you.</p>
        <p><b>Charisma</b> is being able to sell a tomato-based fruit salad. Charisma is your character's strength of personality, persuasiveness, and sometimes their physical attractiveness.</p>
        <p>So what do we use these scores for? Our app will guide you through the process of assigning points to these scores and calculating your modifiers. So, for now, just imagine that you have a positive or negative modifier assigned to each of these ability scores. Suppose your character wanted to tell a lie to get out of a sticky situation. Your DM would call for a Deception (Charisma) check. To make this check you start by rolling 20-sided die (d20) to see how luck you are. Then you add your Charisma modifier and, if you are especially good at Deception, you proficiency bonus to the number you rolled. This gives your total ability check. This check is compared against the Difficulty Class of the lie itself, determined by the DM. If your check is greater than or equal to the DC you pass and are able to lie successfully!</p>
        <p>Almost everything we do in DND is either roleplaying your character or making an ability check of some kind. If you understand how to roll a die and and can do basic addition then you DM (and our app!) will do the rest!</p>
    </div>
}