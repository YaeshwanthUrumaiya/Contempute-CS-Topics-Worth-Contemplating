import { useContext } from "react";
import { currentSettingPage } from "./Settings";

function SettingsButton({settingName, theKey, setCurrentPage}){
    const value = useContext(currentSettingPage);
    return(
        <button className={value == theKey ? "settings-button settings-button-selected":"settings-button"} onClick={()=>{setCurrentPage(theKey)}}>{settingName}</button>
    )
}

export default function ListOfSettings({studyList,setCurrentPage}){
    const value = useContext(currentSettingPage);
    let list = studyList.map((list,key)=>
        <SettingsButton key={key} settingName={list["name"]} theKey={key} setCurrentPage={setCurrentPage}/>
    )
    return(
        <div>
            {list}
        </div>
    )
}