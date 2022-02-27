import React from 'react';
import '../../App.css';
import './buildCharacter.css';
import strLogo from '../images/img-12.png';
import dexLogo from '../images/img-13.png';
import conLogo from '../images/img-14.png';
import intLogo from '../images/img-15.png';
import wisLogo from '../images/img-16.png';
import chaLogo from '../images/img-17.png';
import armLogo from '../images/img-18.png';
import hitLogo from '../images/img-19.png';
import visLogo from '../images/img-20.png';
export default function BuildCharacter() {
    return <div className='buildCharacter'>
        <h1> Build A Character</h1>
        <body>
            <div class="box-wrapper">
                <div id="box1">
                    Character Name: 
                    <input type="text" class="characterName"/>
                </div>
                <div id="box2">
                    Class: 
                    <input type ="text" label = "Class" class="characterInfo"></input>
                    Level: 
                    <input type ="text" label = "Level" class="characterLevel"></input>
                    Race: 
                    <input type ="text" label= "Race" class="characterInfo"></input>
                    Background:
                    <input type ="text" label = "Background" class="characterInfo"></input>
                    Alignment:
                    <input type ="text" label = "Alignment" class="characterInfo"></input>
                    Experience Points: 
                    <input type ="text" label = "Experience" class="characterExperience"></input>
                    Player Name: 
                    <input type ="text" label = "PlayerName" class="characterInfo"></input>
                </div>
                <div id="box3">
                    <div id="box4">
                        <img class="statIcon" src={strLogo} alt="Strength" />
                        <h2>Strength</h2>
                        <input type="text" label="Strength" class ="stats"></input><br />
                        <img class="statIcon" src={dexLogo} alt="Dexterity" />
                        <h2>Dexterity</h2>
                        <input type="text" label="Dexterity" class ="stats"></input><br />
                        <img class="statIcon" src={conLogo} alt="Constitution" />
                        <h2>Constitution</h2>
                        <input type="text" label="Constitution" class ="stats"></input><br />
                        <img class="statIcon" src={intLogo} alt="Intelligence" />
                        <h2>Intelligence</h2>
                        <input type="text" label="Intelligence" class ="stats"></input><br />
                        <img class="statIcon" src={wisLogo} alt="Wisdom" />
                        <h2>Wisdom</h2>
                        <input type="text" label="Wisdom" class ="stats"></input><br />
                        <img class="statIcon" src={chaLogo} alt="Charisma" />
                        <h2>Charisma</h2>
                        <input type="text" label="Charisma" class ="stats"></input>
                    </div>
                    <div id="middle-column">
                        <div id="box5">
                            <img class="statIcon" src={armLogo} alt="Armor Class" />
                            <h2>Armor Class</h2>
                            <input type="text" label="Armor Class" class="armorClass"></input>
                            <h2>Initiative</h2>
                            <input type="text" label="Intelligence" class ="stats"></input><br />
                            <h2>Speed</h2>
                            <input type="text" label="Intelligence" class ="stats"></input><br />
                        </div>
                        <div id="box6">
                            <h2 class="skillsTitle">Skills</h2>
                            <input type="text" label="Acrobatics" class="skills"></input>
                            Acrobatics <br />
                            <input type="text" label="Animal Handling" class="skills"></input>
                            Animal Handling <br />
                            <input type="text" label="Arcana" class="skills"></input>
                            Arcana <br/>
                            <input type="text" label="Athletics" class="skills"></input>
                            Athletics <br />
                            <input type="text" label="Deception" class="skills"></input>
                            Deception <br />
                            <input type="text" label="History" class="skills"></input>
                            History <br />
                            <input type="text" label="Insight" class="skills"></input>
                            Insight <br />
                            <input type="text" label="Intimidation" class="skills"></input>
                            Intimidation <br/>
                            <input type="text" label="Investigation" class="skills"></input>
                            Investigation <br />
                            <input type="text" label="Medicine" class="skills"></input>
                            Medicine <br />
                            <input type="text" label="Nature" class="skills"></input>
                            Nature <br />
                            <input type="text" label="Perception" class="skills"></input>
                            Perception <br />
                            <input type="text" label="Performance" class="skills"></input>
                            Performance <br />
                            <input type="text" label="Persuasion" class="skills"></input>
                            Persuasion <br />
                            <input type="text" label="Religion" class="skills"></input>
                            Religion <br />
                            <input type="text" label="Sleight of Hand" class="skills"></input>
                            Sleight of Hand <br />
                            <input type="text" label="Stealth" class="skills"></input>
                            Stealth <br />
                            <input type="text" label="Survival" class="skills"></input>
                            Survival <br />
                        </div>
                    </div>
                    <div id="box7">
                    <img class="statIcon" src={hitLogo} alt="MaxHitPoints" />
                        <h2>Max Hit Points</h2> 
                        <input type="text" label="MaxHitPoints" class="throws"></input> / 13
                        <h2 class="throwsTitle">Saving Throws</h2>
                        <input type="text" label="strThrow" class="throws"></input> 
                        STR<br />
                        <input type="text" label="dexThrow" class="throws"></input> 
                        DEX<br />
                        <input type="text" label="conThrow" class="throws"></input> 
                        CON <br />
                        <input type="text" label="intThrow" class="throws"></input> 
                        INT<br />
                        <input type="text" label="wisThrow" class="throws"></input> 
                        WIS<br />
                        <input type="text" label="chaThrow" class="throws"></input> 
                        CHA<br /><br />

                        <img class="statIcon" src={visLogo} alt="Darkvision" />
                        <h2>Darkvision</h2>
                        <input type="text" label="Arcana" class="skills"></input> FT.

                        <h2 class="equipmentTitle"> Equipment </h2>
                        <textarea class="equipment" cols="30" rows="10"></textarea>


                        
                    </div>
                    <div id="box8">
                        <h2>Personality Traits</h2>
                        <textarea class="personalityTraits" cols="40" rows="4"></textarea> <br/ >
                        <h2>Ideals</h2>
                        <textarea class="ideals" cols="40" rows="4"></textarea> <br/ >
                        <h2>Bonds</h2>
                        <textarea class="bonds" cols="40" rows="4"></textarea> <br/ >
                        <h2>Flaws</h2>
                        <textarea class="flaws" cols="40" rows="4"></textarea> <br/ >
                        <h2>Features & Traits</h2>
                        <textarea class="featuresandtraits" cols="40" rows="9"></textarea> <br/ >
                    </div>
                </div>
                <div id="box9">
                    <button class="saveButton">Save Character</button>
                    <button class="cancelButton">Cancel</button>
                </div>
            </div>
        </body>
    </div>
}