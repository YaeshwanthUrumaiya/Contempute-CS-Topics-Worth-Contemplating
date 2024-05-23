import { useContext } from "react";
import { currentSettingPage } from "./Settings";

export default function SettingsDisplayer({studyList,toggleFinished}) {
    const currentPage = useContext(currentSettingPage);
    console.log(studyList[currentPage]);

    function ListOfSavedLessons() {
        let list = studyList[currentPage]["saveFile"]
        return(list.map((lesson,key)=>
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

    return(<>
        <h1>{studyList[currentPage]["name"]}</h1>
        <br />
        <br />
        <ListOfSavedLessons />
    </>)
}