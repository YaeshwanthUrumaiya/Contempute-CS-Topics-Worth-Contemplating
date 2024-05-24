import { createContext, useContext, useEffect, useState } from "react";
import "./Settings.css";
import { getData, isDataExist, storeData } from "../script";
import ListOfSettings from "./SettingsList";
import SettingsDisplayer from "./SettingDisplayer";

export const currentSettingPage = createContext(0);

export default function Settings(){
    const [studyList,setStudyList] = useState([
        {"name":"General","saveFile":[]},
        {"name":"DSA","saveFile":isDataExist("DSA")?getData("DSA"):[]},
    ])
    const [currentPage,setCurrentPage] = useState(0);
    const [pageUpdater,setPageUpdater] = useState(0);

    function toggleFinished(index){
        if (studyList[currentPage]["saveFile"][index]["finished"]) {
            studyList[currentPage]["saveFile"][index]["finished"] = false
        } else {
            studyList[currentPage]["saveFile"][index]["finished"] = true
        }
        saveProgress();
        setPageUpdater(pageUpdater + 1);
    }

    function saveProgress() {
        storeData(studyList[currentPage]["name"],studyList[currentPage]["saveFile"])
    }
    
    return(
        <div className="settings-page">
            <div className="settings-panel">
                <currentSettingPage.Provider value={currentPage}>
                    <div className="setting-list-section">
                        <h3>Settings</h3>
                        <hr />
                        <ListOfSettings studyList={studyList} setCurrentPage={setCurrentPage}></ListOfSettings>
                    </div>
                    <div className="the-settings">
                        <SettingsDisplayer studyList={studyList} toggleFinished={toggleFinished}/>
                    </div>
                </currentSettingPage.Provider>
            </div>
        </div>
    )
}