import { useState, useEffect, createContext, act } from "react"
import { getData, isDataExist, storeData } from "../script";
import DataStructureIntro from "./DataStructureIntro";
import DSAStack from "./DSA-Stack";
import DSAStackImplementation from "./DSA-Stack-Implementation";
import DSAUsingStackClass from "./DSA-Using-Stack-Class";
import DSAQueue from "./DSA-Queue";
import DSAQueueImplementation from "./DSA-Queue-Implementation";
import DSAUsingQueueClass from "./DSA-Using-Queue-Class";
import DSALinkedList from "./DSA-Linked-List";
import DSALinkedListImplementation from "./DSA-Linked-List-Implementation";
import DSAFinish from "./DSA-Finish";

export const theActiveLesson = createContext(null);
export const finishedLesson = createContext(null);

export default function DSA(){
    const [pageUpdater,setPageUpdater] = useState(0);
    const [overviewMode,setOverviewMode] = useState(true);
    const [activeLesson,setActiveLesson] = useState(0);
    const [lessonPages,setLessonPages] = useState([
        {
            "name":"Data Structure: Intro",
            "subject":"Introduction",
            "description":"What is data structure? and why is it important?",
            "finished":false,
            "component":<DataStructureIntro setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Stack",
            "subject":"Data Structure",
            "description":"Last in, first out.",
            "finished":false,
            "component":<DSAStack setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Implementing Stack",
            "subject":"Data Structure",
            "description":"Implementing Stack in Python.",
            "finished":false,
            "component":<DSAStackImplementation setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Using Stack Class",
            "subject":"Data Structure",
            "description":"Let's try using the stack class!",
            "finished":false,
            "component":<DSAUsingStackClass setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Queue",
            "subject":"Data Structure",
            "description":"First in, first out!",
            "finished":false,
            "component":<DSAQueue setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Implementing Queue",
            "subject":"Data Structure",
            "description":"Implementing Queue in Python",
            "finished":false,
            "component":<DSAQueueImplementation setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Using Queue Class",
            "subject":"Data Structure",
            "description":"Let's try using the queue class!",
            "finished":false,
            "component":<DSAUsingQueueClass setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Linked List",
            "subject":"Data Structure",
            "description":"You found a treasure map,",
            "finished":false,
            "component":<DSALinkedList setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Linked List Implementation",
            "subject":"Data Structure",
            "description":"Implementing Linked List in Python",
            "finished":false,
            "component":<DSALinkedListImplementation setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"DSA Finish",
            "subject":"Data Structure",
            "description":"",
            "finished":false,
            "component":<DSAFinish setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
    ]);
    const studyName = "DSA"

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
                lessonPages[index]["name"],
                lessonPages[index]["subject"],
                lessonPages[index]["description"],
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
        document.getElementById("study-overview").scrollTop = 0;
        setActiveLesson(index);
        setOverviewMode(false);
    }

    function StudyOverview() {
        return(
            <div id="overview-page">
                <h1>Data Structure & Algorithm</h1>
                <p>Data structures are used to manage, store, and retrieve data in an efficient way. It is often used when there are large amounts of data needs to be stored efficiently. The instructions to process the data into something meaningful is what we call Algorithm. In fact, any set of well structured instructions is known as algorithms. In this subject, we'll look into algorithms based on data structures and a few other algorithms that are widely used.</p>
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
                    <h2 onClick={()=>{changeToLesson(theKey)}} style={{cursor:"pointer"}}>{thePages["name"]}</h2>
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