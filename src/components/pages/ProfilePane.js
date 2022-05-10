import React, {useState} from 'react';
import '../../App.css';
import './profile.css';
import editIcon from '../images/icons8-quill-pen-64.png';
import profilePlaceHolder from '../images/profilePlaceHolder.jpg';
import redX from '../images/redX.png'



function TextInputHandler({saveName, currName, saveAboutMe, currAboutMe}) {

    const [textStringAboutMe, setTextStringAboutMe] = useState("");
    const [textStringName, setTextStringName] = useState("");

    const onChangeAboutMe = e => {
        setTextStringAboutMe(e.target.value);
    }

    const onChangeName = e => {
        setTextStringName(e.target.value);
    }

    const onSubmitAboutMe = (e) => {
        if(textStringAboutMe != ""){
            saveAboutMe(textStringAboutMe);
            setTextStringAboutMe("");
        }
        if(textStringName != ""){
            saveName(textStringName);
            setTextStringName("");
        }
    }
    return <>
        <h2>Name(s): </h2>
        <textarea
            class='aboutMe'
            placeholder={currName || "Type Here."}
            value={textStringName}
            onChange={onChangeName}
            onSubmit={onSubmitAboutMe}
        />
        <h2>About Me:</h2>
        <textarea
            class='aboutMe'
            placeholder={currAboutMe || "Type Here."}
            value={textStringAboutMe}
            onChange={onChangeAboutMe}
            onSubmit={onSubmitAboutMe}
        />
        <button class="AboutMeButton" type="submit" onClick={onSubmitAboutMe}>Update</button>
    </>

}


export default function ProfilePane({pN, aM}) {

    const [editing, setEditing] = useState(false);
    const [editingAboutMe, setEditingAboutMe] = useState(false);
    const [aboutMe, setAboutMe] = aM;
    const [profileName, setProfileName] = pN;

    const a = [
        {name:"About Me", val:aM[0], updater:aM[1]}
    ]

    const n = [
        {name:"Profile Name", val:pN[0], updater:pN[1]}
    ]

    function ProfileTopBar() {
        const toggleEditing = () => {setEditing(!editing)};
        return <div id="ProfileTopBar">
            <img class="editButton" src={editIcon} alt = "Edit Profile Name" onClick={toggleEditing} />
        </div>
    }


    function AboutMe() {
        return < div class="aboutMeForm">
            {editing ?
            <>
                <TextInputHandler
                    currAboutMe={aM[0]}
                    saveAboutMe={aM[1]}
                    currName={pN[0]}
                    saveName={pN[1]}
                />
            </>
            : <>
                <h2>Name(s):</h2>
                <div>{pN[0]}</div>
                <h2>About Me:</h2>
                <div>{aM[0]}</div>
            </>
            }
        
        
        </div>;

    }

    return <div>
        <div class="BoxWrapper">
            <div id="Box1">
                <img class="profilePlaceHolder" src={profilePlaceHolder} alt="icon of a cute goblin"/>
            </div>
            <div id="Box2">
                <div id="Box3">
                <ProfileTopBar />
                <AboutMe />
                </div>
            </div>
        </div>
    </div>
}