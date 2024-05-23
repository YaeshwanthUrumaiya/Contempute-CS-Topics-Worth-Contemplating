import { useState, useEffect } from "react"
import './Studies.css'
import MainStudy from "./MainStudy/MainStudy";
import SubStudy from "./SubStudy/SubStudy";

function Studies({studyPage,setStudyPage}){

    let studyPages = [
        {"name":"DSA", "component":<MainStudy />},
        {"name":"SUB", "component":<SubStudy />},
    ]

    function StudyButtonList(){
        let list = studyPages.map((study,key)=>
            <button onClick={()=>{setStudyPage(key)}} key={key} className={studyPage == key?"study-selected":" "}>
                {study["name"]}
            </button>
        )
        return(list)
    }

    function StudyOverviewDisplayer({studyPage}){
        return(studyPages[studyPage]["component"])
    }

    return(
        <div id="studies-page">
            <div id="studies-menu">
                <StudyButtonList />
            </div>
            <div id="study-overview">
                <StudyOverviewDisplayer studyPage={studyPage} />
            </div>
        </div>
    )
}

export default Studies