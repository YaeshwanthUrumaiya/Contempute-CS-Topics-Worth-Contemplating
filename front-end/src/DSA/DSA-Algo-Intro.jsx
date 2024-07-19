import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAAlgorithmIntro({setOverviewMode,toggleFinished,changeToLesson}){
    const activeLesson = useContext(theActiveLesson);
    const [finish,setFinish] = useState(useContext(finishedLesson));

    function toggleFinish(){
        if (finish) {
            setFinish(false);
        } else {
            setFinish(true);
        }
    }

    const currentLesson = 2;

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
                Algorithm Intro
            </h1>
            <p>
                An algorithm is a set of instructions to complete a task. This task could range from anything such as sorting to figuring out how to build your AI system should the enemy NPCs path find towards your player character in your game. 
            </p>
            <h2>But Why Is Learning It So Important?</h2>
            <h3>When You Have The Correct Algo For The Correct Task</h3>
            <p>
                So imagine you have to search a student's name in your campus system. You could go name by name in the excel sheet or you could just use CTRL+F to look for his name. Both would give you the same results, but the way which you handled that task is way different and the time and resources which you spent for that task is also way different. That's what having the right algorithm for the right task allows you to perform. 
            </p>
            <h3>Different Data Structure, Different Algorithm</h3>
            <p>
                Different DS have different Algorithms to perform the same task, but in various ways with a lot of differences in the time and memory each algorithm uses. So based on what DS you are using, you could implement any known algorithm that is proven to work or create your own from scratch (or you could refer other similar algorithms and draw inspiration from that). But for all that to happen, you gotta know your algorithms first. There are different types of algorithms such as recurvise/backtracking, dynamic and much much more. So, let's get to that!
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