import { useContext, useState } from "react";
import { currentSettingPage } from "./Settings";
import { isDarkmode, theDarkMode } from "../App";
import yaes from "../assets/yaes.jpg"
import fren from "../assets/dawg.jpeg"
import { getData, storeData } from "../script";
import deer from "../assets/deer.png"
import lion from "../assets/lion.png"
import bear from "../assets/bear.png"

export default function SettingsDisplayer({studyList,toggleFinished}) {
    const darkMode = useContext(theDarkMode);
    const currentPage = useContext(currentSettingPage);
    const theIsDarkmode = useContext(isDarkmode);

    function ListOfSavedLessons() {
        let theList = studyList[currentPage]["saveFile"];
        return(theList.map((lesson,key)=>
            <SavedLessons lessonInformation={lesson} theKey={key} key={key} />
        ))
    }

    function SavedLessons({lessonInformation,theKey}) {
        return(
            <div className="saved-lessons">
                <div>
                    <h3>{lessonInformation["name"]}</h3>
                    <p>{lessonInformation["description"]}</p>
                </div>
                <div>
                    <button onClick={()=>{toggleFinished(theKey)}}>{lessonInformation["finished"]?"Finished":"Not Finished"}</button>
                </div>
            </div>
        )
    }

    function StudySettings() {
        return(<>
            <h1>{studyList[currentPage]["name"]}</h1>
            <br />
            <br />
            {
                studyList[currentPage]["saveFile"].length == 0?
                <p>Finish a lesson to show this studies' settings.</p>:
                <ListOfSavedLessons />
            }
        </>)
    }

    function GeneralSettings() {
        const [selectedProfile,setSelectedProfile] = useState(getData("profile"));
        const [profileName,setProfileName] = useState(getData("profile-name"));

        function changeProfile(index){
            setSelectedProfile(index)
            storeData("profile",index)
        }
        
        function changeProfileName(name){
            setProfileName(name);
            storeData("profile-name", name)
        }

        return(<>
            <h1>General Settings</h1>
            <br />
            <div className="profile-settings">
                <div className="profiles">
                    <div className={`profile-wrapper ${selectedProfile == 0?"profile-selected":""}`} onClick={()=>{changeProfile(0)}}>
                        <img src={deer} alt="" />
                    </div>
                    <div className={`profile-wrapper ${selectedProfile == 1?"profile-selected":""}`} onClick={()=>{changeProfile(1)}}>
                        <img src={lion} alt="" />
                    </div>
                    <div className={`profile-wrapper ${selectedProfile == 2?"profile-selected":""}`} onClick={()=>{changeProfile(2)}}>
                        <img src={bear} alt="" />
                    </div>
                </div>
                <div className="profile-name">
                    <h3>Name</h3>
                    <input type="text" placeholder="Full Name" onChange={event=>{changeProfileName(event.target.value)}} defaultValue={profileName} />
                </div>
            </div>
            <div className="saved-lessons">
                <div>
                    <h3>Darkmode</h3>
                </div>
                <div>
                    <button onClick={()=>{darkMode()}}>{theIsDarkmode?"ON":"OFF"}</button>
                </div>
            </div>
            <br />
            <div>
                <h1>About</h1>
                <br />
                <div className="profile">
                    <div>
                        <img src={fren} alt="" />
                    </div>
                    <div>
                        <h2>Frenlie Tjandra Yuliswan</h2>
                        <p>Front end developer.</p>
                    </div>
                </div>
                <div className="profile">
                    <div>
                        <img src={yaes} alt="" />
                    </div>
                    <div>
                        <h2>Yaeshwanth Urumaiya</h2>
                        <p>Back end developer.</p>
                    </div>
                </div>
            </div>
        </>)
    }

    return(<>
        {
            currentPage == 0? <GeneralSettings />:
            <StudySettings />
        }
    </>)
}