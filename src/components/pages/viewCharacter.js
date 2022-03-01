import React from 'react';
import '../../App.css';
import './viewCharacter.css';
import strLogo from '../images/img-12.png';
import dexLogo from '../images/img-13.png';
import conLogo from '../images/img-14.png';
import intLogo from '../images/img-15.png';
import wisLogo from '../images/img-16.png';
import chaLogo from '../images/img-17.png';
import armLogo from '../images/img-18.png';
import hitLogo from '../images/img-19.png';
import visLogo from '../images/img-20.png';
export default function ViewCharacter() {
    return <div className='viewCharacter'>
        <h1> View your Character</h1>
        <body>
            <div class="box-wrapper">
                <div id="box1">
                    Character Name: Zenco
                    <input type="text" class="characterName"/>
                </div>
                <div id="box2">
                    Class: Red Mage
                    Level: 10
                    Race: Night Elf
                    Background: Gladiator
                    Alignment: Chaotic Mess
                    Experience Points: 5/10
                    Player Name: MageZenco
                </div>
                <div id="box3">
                    <div id="box4">
                        <img class="statIcon" src={strLogo} alt="Strength" />
                        <h2>Strength</h2>
                        4<br />
                        <img class="statIcon" src={dexLogo} alt="Dexterity" />
                        <h2>Dexterity</h2>
                        5<br />
                        <img class="statIcon" src={conLogo} alt="Constitution" />
                        6<h2>Constitution</h2>
                        <br />
                        <img class="statIcon" src={intLogo} alt="Intelligence" />
                        8<h2>Intelligence</h2>
                        <br />
                        <img class="statIcon" src={wisLogo} alt="Wisdom" />
                        9<h2>Wisdom</h2>
                        <br />
                        <img class="statIcon" src={chaLogo} alt="Charisma" />
                        10<h2>Charisma</h2>
                    </div>
                    <div id="middle-column">
                        <div id="box5">
                            <img class="statIcon" src={armLogo} alt="Armor Class" />
                            <h2>Armor Class</h2>
                            Heavy Armor
                            <h2>Initiative</h2>
                            -1<br />
                            <h2>Speed</h2>
                            -2<br />
                        </div>
                        <div id="box6">
                            <h2 class="skillsTitle">Skills</h2>
                            -1
                            Acrobatics <br />
                            +1
                            Animal Handling <br />
                            +0
                            Arcana <br/>
                            +5
                            Athletics <br />
                            +2
                            Deception <br />
                            +2
                            History <br />
                            +1
                            Insight <br />
                            +2
                            Intimidation <br/>
                            +0
                            Investigation <br />
                            +1
                            Medicine <br />
                            +0
                            Nature <br />
                            +3
                            Perception <br />
                            +2
                            Performance <br />
                            +4
                            Persuasion <br />
                            +0
                            Religion <br />
                            -1
                            Sleight of Hand <br />
                            -1*
                            Stealth <br />
                            +1
                            Survival <br />
                        </div>
                    </div>
                    <div id="box7">
                    <img class="statIcon" src={hitLogo} alt="MaxHitPoints" />
                        <h2>Max Hit Points</h2> 
                        7 / 13
                        <h2 class="throwsTitle">Saving Throws</h2>
                        +5
                        STR<br />
                        -1
                        DEX<br />
                        +4
                        CON <br />
                        +0
                        INT<br />
                        +1 
                        WIS<br />
                        +2
                        CHA<br /><br />

                        <img class="statIcon" src={visLogo} alt="Darkvision" />
                        <h2>Darkvision</h2>
                        13 FT.

                        <h2 class="equipmentTitle"> Equipment </h2>
                        Chain mail, great axe, 3 javelins, backpack, blanket,
                        tinderbox, 2 days of rations

                    </div>
                    <div id="box8">
                        <h2>Personality Traits</h2>
                        My flattery makes those I talk to feel wonderufl and important. Also I don't like to get dirty and I won't be caught alive. <br/ >
                        <h2>Ideals</h2>
                        Responsiblity is a strong value <br/ >
                        <h2>Bonds</h2>
                        Friends come before Familty <br/ >
                        <h2>Flaws</h2>
                        Procrastination <br/ >
                        <h2>Features & Traits</h2>
                        Second Wind
                        Fighting STYLES
                        Position of Privilege <br/ >
                    </div>
                </div>
                <div id="box9">
                    <button class="backButton">Back</button>
                </div>
            </div>
        </body>
    </div>
}