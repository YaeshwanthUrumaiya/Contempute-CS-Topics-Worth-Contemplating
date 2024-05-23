import { useState, useEffect, createContext, act } from "react"
import { getData, isDataExist, storeData } from "../script";
import Lesson1 from "./Lesson1";
import Lesson2 from "./Lesson2";
import Lesson3 from "./Lesson3";

export const theActiveLesson = createContext(null);
export const finishedLesson = createContext(null);

function MainStudy(){
    const [pageUpdater,setPageUpdater] = useState(0);
    const [overviewMode,setOverviewMode] = useState(true);
    const [activeLesson,setActiveLesson] = useState(0);
    const [lessonPages,setLessonPages] = useState([
        {
            "name":"Stack",
            "subject":"Data Structure",
            "description":"Let's learn about lesson 1.",
            "finished":false,
            "component":<Lesson1 setOverviewMode={setOverviewMode} toggleFinished={toggleFinished}/>
        },
        {
            "name":"Lesson 2",
            "subject":"Data Structure",
            "description":"Let's learn about lesson 2.",
            "finished":false,
            "component":<Lesson2 setOverviewMode={setOverviewMode} toggleFinished={toggleFinished}/>
        },
        {
            "name":"Lesson 3",
            "subject":"Data Structure",
            "description":"Let's learn about lesson 2.",
            "finished":false,
            "component":<Lesson3 setOverviewMode={setOverviewMode} toggleFinished={toggleFinished}/>
        },
    ]);
    const studyName = "MainStudy"

    console.log(`activeLesson is ${activeLesson}`)

    function getCurrentLessonData(){
        return(lessonPages[activeLesson]["finished"])
    }

    function progressSaver(){
        let tempArray = []
        for (let index in lessonPages) {
            tempArray.push({
                "name":lessonPages[index]["name"],
                "subject":lessonPages[index]["subject"],
                "description":lessonPages[index]["description"],
                "finished":lessonPages[index]["finished"]
            })
        }
        storeData(studyName,tempArray)
    }

    function progressLoader(){
        let tempArray = getData(studyName);
        for (let index in tempArray) {
            changeLessonPages(
                index,
                tempArray[index]["name"],
                tempArray[index]["subject"],
                tempArray[index]["description"],
                tempArray[index]["finished"],
                lessonPages[index]["component"]
            )
        }
        setPageUpdater(pageUpdater + 1)
    }

    function changeLessonPages(index,name,subject,description,finished,component) {
        let theArray = lessonPages;
        theArray[index]["name"] = name;
        theArray[index]["subject"] = subject;
        theArray[index]["description"] = description;
        theArray[index]["finished"] = finished;
        theArray[index]["component"] = component;
        setLessonPages(theArray)
    }

    function toggleFinished(index){
        console.log(`activeLesson in toggle is ${activeLesson}`);
        if (lessonPages[index]["finished"] == true) {
            changeLessonPages(
                index,
                lessonPages[index]["name"],
                lessonPages[index]["subject"],
                lessonPages[index]["description"],
                false,
                lessonPages[index]["component"]
            )
        } else {
            changeLessonPages(
                index,
                lessonPages[index]["name"],
                lessonPages[index]["subject"],
                lessonPages[index]["description"],
                true,
                lessonPages[index]["component"]
            )
        }
        progressSaver();
    }

    function changeToLesson(index){
        console.log("changeToLesson:")
        console.log(index)
        setActiveLesson(index);
        setOverviewMode(false);
    }

    function StudyOverview() {
        return(
            <div id="overview-page">
                <h1>Study 1</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum nostrum veniam fugiat accusantium autem deleniti dicta excepturi voluptas minima, nam repellendus laboriosam deserunt libero asperiores, voluptatum ab delectus sit?</p>
                <button onClick={()=>{setOverviewMode(false)}}>Learn now</button>
            </div>
        )
    }

    function LessonsMenu(){
        return(
            <div id="lessons-menu">
                <ListOfLessons />
            </div>
        )
    }

    function ListOfLessons(){
        let list = lessonPages.map((thePages,key)=>
            <LessonButton thePages={thePages} theKey={key} key={key} />
        )
        return(list)
    }

    function LessonButton({thePages,theKey}){
        return(
            <div className="lesson-button-wrapper">
                <div className={lessonPages[theKey]["finished"]?"div-lesson-finished":"div-lesson-unfinished"}>
                    <button className={`lesson-button ${lessonPages[theKey]["finished"]?"lesson-button-finished":""}`} onClick={()=>{changeToLesson(theKey)}}></button>
                    {theKey + 1 == lessonPages.length?<></>:<hr />}
                </div>
                <div>
                    <span className="subject-title">{thePages["subject"]}</span>
                    <h2>{thePages["name"]}</h2>
                    <p>{thePages["description"]}</p>
                </div>
            </div>
        )
    }

    function LessonDisplayer({activeLesson}){
        return(
            lessonPages[activeLesson]["component"]
        )
    }

    useEffect(()=>{
        progressLoader();
    },[])

    return(<>
        {
            overviewMode?<><StudyOverview /><LessonsMenu /></>:
            <theActiveLesson.Provider value={activeLesson}>
                <finishedLesson.Provider value={lessonPages[activeLesson]["finished"]}>
                    <LessonDisplayer activeLesson={activeLesson}/>
                </finishedLesson.Provider>
            </theActiveLesson.Provider>
        }
    </>)
}

export default MainStudy