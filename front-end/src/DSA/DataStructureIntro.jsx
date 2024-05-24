import { useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";

export default function DataStructureIntro({setOverviewMode,toggleFinished}){
    const activeLesson = useContext(theActiveLesson);
    const finished = useContext(finishedLesson);
    return(<>
        <div id="lesson-content">
            <h1>
                <div id="side-button">
                    <button onClick={()=>{setOverviewMode(true)}}>Back</button>
                </div>
                Introduction to Data Structure
            </h1>
            <h2>What is Data Structure?</h2>
            <p>
                In CS, data is king. When we're dealing with large number of data, you need to safely store them in ways that you can access them quickly. Thus, people figured out various ways to store, fetch, and edit data in the quickest way possible. It helps us manage our computing resources to be much more efficient.
            </p>
            <h2>Okay, But Why is It So Important?</h2>
            <p>
                Using and picking the right Data Structures to store data can be very effective, since certain tasks will perform way better when handled using the right data structures. 
            </p>
            <p>
                For example, you are given a task to find the average mark from the entire students' test paper of the university.
            </p>
            <p>
                If we are working with just the calculator, adding each mark one by one to it to calculate the result, the process is prone to mistakes, especially forgetting at what point the progress has been going on.
            </p>
            <p>
                However, if implement a simple structure to the data, by having unique ID for every mark, we can keep track of the data that has been placed in, and then let excel calculate the data.
            </p>
            <p>
                Moreover, you can save your energy and time (i.e resources) when using the right data structure for the right task.
            </p>
            <p>
                <div id="side-button">
                    <button><a href="#lesson-content">Go up</a></button>
                    <button onClick={()=>{toggleFinished(activeLesson);setOverviewMode(true)}}>{finished?"Unfinish":"Finish"}</button>
                </div>
            </p>
            <br />
        </div>
    </>)
}