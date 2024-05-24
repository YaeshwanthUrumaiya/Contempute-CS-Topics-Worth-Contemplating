import { useContext, useState } from "react";
import { currentSettingPage } from "./Settings";
import { isDarkmode, theDarkMode } from "../App";
import yaes from "../assets/yaes.jpg"
import fren from "../assets/dawg.jpeg"
import { getData } from "../script";

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
        return(<>
            <h1>General Settings</h1>
            <br />
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