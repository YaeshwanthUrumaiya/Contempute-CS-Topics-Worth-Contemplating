import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DataStructureIntro({setOverviewMode,toggleFinished,changeToLesson}){
    const activeLesson = useContext(theActiveLesson);
    const [finish,setFinish] = useState(useContext(finishedLesson));

    function toggleFinish(){
        if (finish) {
            setFinish(false);
        } else {
            setFinish(true);
        }
    }

    const currentLesson = 0;

    useEffect(()=>{
        hljs.highlightAll();
    },[])
    return(<>
        <div id="lesson-content">
            <h1>
                <div id="side-button">
                    <button onClick={()=>{setOverviewMode(true)}}>Menu</button>
                </div>
                <div id="r-side-button">
                    <button onClick={()=>{changeToLesson(activeLesson+1)}}>Continue</button>
                </div>
                Introduction to Data Structure
            </h1>
            <h2>What is Data Structure?</h2>
            <p>
                In CS, data is king. When we're dealing with large number of data, you need to safely store them in ways that you can access them quickly. Thus, people figured out various ways to store, fetch, and edit data in the quickest way possible. It helps us manage our computing resources to be much more efficient.
            </p>
            <h2>Okay, But Why is It So Important?</h2>
            <p>
                Using and picking the right data structures to store data can be very effective, since certain tasks will perform way better when handled using the right data structures. 
            </p>
            <p>
                For example, you are given a task to find the average mark from the entire students' test paper of the university.
            </p>
            <ul>
                <li>If we use the calculator to add the marks one by one, the process is most likely to be prone to mistakes such as forgetting where the progress were, or even unfortunate misclicks.</li>
                <li>However, by having a unique ID to each and every marksheet, we can keep track of the data that has been placed in, and then let excel calculate the data. The data is safely stored, and the previous mistakes are easier to avoid.</li>
            </ul>
            <p>
                Just a simple structure implemented could give benefits to operations that once seem trivial. If 100 more mark sheets were to be calculated, using the calculator will be much more time consuming. Whereas you just need to add 100 more rows in the Excel sheet and the calculation should be done in an instant. The right Data Structures should be scaled up or down without major issues.
            </p>
            <p>
                In an extremely large scale project, choosing the right data structure could even save consumption resources.
                <div id="side-button">
                    <button><a href="#lesson-content">Go up</a></button>
                    <button onClick={()=>{toggleFinished(activeLesson);toggleFinish()}}>{finish?"Unfinish":"Finish"}</button>
                </div>
                <div id="r-side-button">
                    <button onClick={()=>{changeToLesson(activeLesson+1)}}>Continue</button>
                </div>
            </p>
            <br />
        </div>
    </>)
}