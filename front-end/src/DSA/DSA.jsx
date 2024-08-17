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
import DSAUsingLinkedList from "./DSA-Using-Linked-List";
import DSATree from "./DSA-Tree";
import DSAFinish from "./DSA-Finish";
import DSAGraph from "./DSA-Graph";
import DSAGraphImplementation from "./DSA-Graph-Implementation";
import DSAUsingGraph from "./DSA-Using-Graph";
import DSAHashmaps from "./DSA-Hashmaps";
import DSAHashmapsImplementation from "./DSA-Hashmaps-Implementation";
import DSAUsingHashmap from "./DSA-Using-Hashmap";
import DSAAlgorithmIntro from "./DSA-Algo-Intro";
import DSALinearSearch from "./DSA-Linear-Search";
import DSABinarySearch from "./DSA-Binary-Search";
import DSAInsertionSort from "./DSA-Insertion-Sort";
import DSABubbleSort from "./DSA-Bubble-Sort";
import DSAMergeSort from "./DSA-Merge-Sort";

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
            "description":"You found a treasure map..",
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
            "name":"Using Linked List",
            "subject":"Data Structure",
            "description":"Let's try using the linked list class!",
            "finished":false,
            "component":<DSAUsingLinkedList setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Graph",
            "subject":"Data Structure",
            "description":"Graph is linked list, but each node have a lot of connections.",
            "finished":false,
            "component":<DSAGraph setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Graph Implementation",
            "subject":"Data Structure",
            "description":"Implementing Graph in Python",
            "finished":false,
            "component":<DSAGraphImplementation setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Using Graph",
            "subject":"Data Structure",
            "description":"Let's try using the graph class!",
            "finished":false,
            "component":<DSAUsingGraph setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Hashmap",
            "subject":"Data Structure",
            "description":"Implementing Hashmap in Python",
            "finished":false,
            "component":<DSAHashmaps setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Hashmap Implementation",
            "subject":"Data Structure",
            "description":"Hashmap is a set of data in the form of Key:Value pairs. It's a dictionary!",
            "finished":false,
            "component":<DSAHashmapsImplementation setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Using Hashmap",
            "subject":"Data Structure",
            "description":"Let's try using the hashmap class!",
            "finished":false,
            "component":<DSAUsingHashmap setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Algorithm Introduction",
            "subject":"Algorithm",
            "description":"What is Algorithm? and why is it important?",
            "finished":false,
            "component":<DSAAlgorithmIntro setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Linear Search",
            "subject":"Algorithm",
            "description":"Searches the array one by one from top to bottom.",
            "finished":false,
            "component":<DSALinearSearch setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Binary Search",
            "subject":"Algorithm",
            "description":"Goes to the middle, checks if the number we look for is higher or lower, repeat until we found it.",
            "finished":false,
            "component":<DSABinarySearch setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Insertion Sort",
            "subject":"Algorithm",
            "description":"Insert the element on the correct, sorted, position.",
            "finished":false,
            "component":<DSAInsertionSort setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Bubble Sort",
            "subject":"Algorithm",
            "description":"Takes an element, compares and swap if needed, repeat.",
            "finished":false,
            "component":<DSABubbleSort setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
        },
        {
            "name":"Merge Sort",
            "subject":"Algorithm",
            "description":"Divide an array until it's only a bunch of elements, then join while sorting them together.",
            "finished":false,
            "component":<DSAMergeSort setOverviewMode={setOverviewMode} toggleFinished={toggleFinished} changeToLesson={changeToLesson}/>
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