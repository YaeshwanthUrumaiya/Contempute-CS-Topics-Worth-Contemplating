import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAHashmaps({setOverviewMode,toggleFinished,changeToLesson}){
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
                Hashmaps
            </h1>
            <h2>What Is It?</h2>
            <p>
                If you tried out Python, you should be familar with Dictionary. HashMap is literally that! It's an set of data in the form of Key:Value pairs. 
            </p>
            <p>
                But rather than the simiplifed version of Hashmaps in Python, actual Hashmaps are slightly different to implement as they use something called Hashing.
            </p>
            <p>
                What does it mean to do Hashing? Well, you take the Key and you turn it into index value (Using something called Hash Function; You'll understand it better as you implement) and this index is used to store and retrieve data from an List.
            </p>
            <p>
                But what if two keys give you the same Index Value? Then you create an Linked List in that index value of the list and then contain both values. 
            </p>
            <p>
                The reason why hashmap is used is because of how fast and semantic it is. It allows you to get a value using a key, which can be a text that has a meaning, but it also retrieve the value using index values, which makes retrieving a value almost instantaneous.
            </p>
            <h2>What Can You Do With It?</h2>
            <p>
                Apart from hash function, most of the features in hashmaps are similar to some basic data structures, such as insertion, deletion, and modifications.
            </p>
            <h2>What Are The Actual Use Case In Real World?</h2>
            <p>
                Hashmaps are used everywhere. This is because hash functions will evenly spread data points along the array. Compared to linked list, we don't have to traverse the list in hashmaps, which means it takes less time for all tasks (i.e fetching, insertion, deletion, modifications) to be done. Even in the worse case, the time it takes scales linearly with the size of the list.
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