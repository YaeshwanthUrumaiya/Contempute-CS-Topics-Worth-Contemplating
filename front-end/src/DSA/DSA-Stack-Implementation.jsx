import { useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAStackImplementation({setOverviewMode,toggleFinished}){
    const activeLesson = useContext(theActiveLesson);
    const finished = useContext(finishedLesson);
    useEffect(()=>{
        hljs.highlightAll();
    },[])
    return(<>
        <div id="lesson-content">
            <h1>
                <div id="side-button">
                    <button onClick={()=>{setOverviewMode(true)}}>Back</button>
                </div>
                 Stack Implementation
            </h1>
            <p>
                The stack implementation is in python, but as long as you have a beginner or intermediate experience of programming in Object Oriented Programming Language, 
            </p>
            <pre>
                <code className="language-python">{
`
class something():
    def _init()_:

`
                }</code>
            </pre>
            <pre>
                <code className="language-javascript">{
`
function something() {
    let something = 10
}

`
                }</code>
            </pre>
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