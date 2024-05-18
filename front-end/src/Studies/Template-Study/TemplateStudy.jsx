import { useState, useEffect } from "react";
import Subject1 from "./Subject1/Subject1";

function TemplateStudy({update}){
    const [currentLesson, setCurrentLesson] = useState(0);
    const [displayLesson,setDisplayLesson] = useState(false);
    let subjects = [
        {
            "name": "Subject 1",
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia exercitationem eos asperiores.",
            "component": <Subject1 />,
            "lessons":[]
        },
    ]

    function toggleLessonPage(){
        if (displayLesson) {
            setDisplayLesson(false);
        } else {
            setDisplayLesson(true);
        }
    }

    // Alternate between lesson & studies
    function LessonPage({value}){
        return(subjects[value]["component"])
    }
    function StudiesOverview(){
        return(<>
            <div id="study-overview">
                <h1>Template Title</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non reprehenderit alias maxime temporibus! Distinctio, labore dolores quaerat rem blanditiis alias vero ipsa rerum ipsam! A commodi ullam sunt vero exercitationem.</p>
            </div>
            <div id="subject-menu">
                <div id="subject-menu-panel">
                    {subjects.map((subject,key)=><>
                        <div id="subject-tab" key={key}>
                            <div>
                                <button id="subject-icon" onClick={()=>{toggleLessonPage();setCurrentLesson(key)}}></button>
                                <hr />
                            </div>
                            <div>
                                <h2>{subject["name"]}</h2>
                                <p>{subject["description"]}</p>
                            </div>
                        </div>
                    </>)}
                    <div id="subject-tab">
                        <div>
                            <div id="subject-icon"></div>
                        </div>
                        <div>
                            <h2>Finish</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }

    useEffect(()=>{setDisplayLesson(false)},[update])

    return(<>
        {
            displayLesson? <LessonPage value={currentLesson} />:
            <StudiesOverview />
        }
    </>)
}

export default TemplateStudy