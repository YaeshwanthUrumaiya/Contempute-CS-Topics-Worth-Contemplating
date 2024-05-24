import { useState, useEffect } from "react"
import './Studies.css'
import DSA from "./DSA/DSA"

function Studies({studyPage,setStudyPage}){

    let studyPages = [
        {"name":"DSA", "component":<DSA />},
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