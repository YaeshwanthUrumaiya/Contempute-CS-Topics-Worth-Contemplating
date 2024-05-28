import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAQueue({setOverviewMode,toggleFinished,changeToLesson}){
    const activeLesson = useContext(theActiveLesson);
    const [finish,setFinish] = useState(useContext(finishedLesson));

    function toggleFinish(){
        if (finish) {
            setFinish(false);
        } else {
            setFinish(true);
        }
    }

    useEffect(()=>{
        hljs.highlightAll();
    },[])

    return(<>
        <div id="lesson-content">
            <h1>
                <div id="side-button">
                    <button onClick={()=>{setOverviewMode(true)}}>Menu</button>
                    <button onClick={()=>{changeToLesson(activeLesson-1)}}>Previous</button>
                </div>
                <div id="r-side-button">
                    <button onClick={()=>{window.scrollTo(0,0);changeToLesson(activeLesson+1)}}>Continue</button>
                </div>
                 Queue
            </h1>
            <h2>What Is It?</h2>
            <p>
                Queue is self explanatory; It's like standing in line for your starbucks order or waiting for your disney world tickets. The sooner you join the queue, the sooner you will exit the queue.
            </p>
            <p>
                Let's say we have three people on queue.
            </p>
            <ol style={{padding:"20px"}}>
                <li>Person A (First)</li>
                <li>Person B </li>
                <li>Person C </li>
            </ol>
            <p>
                If Person A exits the queue..
            </p>
            <ol style={{padding:"20px"}}>
                <li>Person B (First)</li>
                <li>Person C </li>
                <li>You </li>
            </ol>
            <p>
                Because Person A enters the queue first before B and C, person A exits first too. When person A exit the queue, person B now takes the first place, person C takes the second place, and you can finally enter the queue.
            </p>
            <p>
                If we compare it to stack, the stack only have one entry and exit point, which is the <b>top</b>. However, the queue have two points, which is the entry aka the back of the row, and the exit aka the front of the row.
            </p>
            <h2>What Tasks Can You Do With Queue?</h2>
            <p>
                Well, everything you can do with stacks can also be done with queues, but all of them are named differently. Let's see how the names are changed (The functionality is the same, if you don't know what is the functionality of these tasks, better read the stack first ;) )
            </p>
            <ul style={{listStyle:"none"}}>
                <li> <b>In queue</b>, push is called <b>enqueue</b>. </li>
                <li> <b>In queue</b>, pop is called <b>dequeue</b>. </li>
            </ul>
            <p>
                The other core functionalities such as checkempty, checkfull, peek are all named same!
            </p>
            <h2>What Is Queues Actually Used For?</h2>
            <p>
                <b>Task Management</b> - When you have a set of computing tasks, they join a queue and each of them will be executed accordingly (from start to finish, first task will be finished first).
            </p>
            <p>
                <b>Buffering Data</b> - In networking, when a rate at which you are sending data is more than the rate of you getting data, you are going to store the data temporarily at the sender's end to match the speed of reading data. So you would use a queue there.
            </p>
            <p>
                <b>Chat messages in multiplayer game</b> - It is self explanatory, but in case you're not familiar, chat messages in a multiplayer game usually has a limit to it's queue, new messages appear on the bottom and old messages are deleted or handled to another storage.
                <div id="side-button">
                    <button><a href="#lesson-content">Go up</a></button>
                    <button onClick={()=>{toggleFinished(activeLesson);toggleFinish()}}>{finish?"Unfinish":"Finish"}</button>
                </div>
                <div id="r-side-button">
                    <button onClick={()=>{window.scrollTo(0,0);changeToLesson(activeLesson+1)}}>Continue</button>
                </div>
            </p>
            <br />
        </div>
    </>)
}