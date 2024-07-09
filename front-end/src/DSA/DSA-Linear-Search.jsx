import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSALinearSearch({setOverviewMode,toggleFinished,changeToLesson}){
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
                Linear Search
            </h1>
            <p>
                Starting with the easiest possible algorithms to look for an value in a list/array. You start off your search from the first element and then go through the entire list till you reach the last element and if you were to encounter the value that you're looking for, you return the index of that value (or True/False if you just want to make sure that if that value is present in that array).
            </p>
            <h2>Use Case</h2>
            <p>
                For any given DS that has a sequence of values, this method should work. But since you need to loop through the entire list, this works best for short set of values. 
            </p>
            <p>
                In the best case: You find the element you're looking for in the first index and you only need to check and compare once. Time complexity -&gt; O(1)
            </p>
            <p>
                In the worse case: You might find the element you're looking for in the last index or you might not even find that value, so you gotta loop through the whole sequence. Time Complexity -&gt; O(N); N -&gt; Size of the sequence of values. 
            </p>
            <p>
                (Note: What is the whole time complexity mean? Well, it explains how you algorithm performs as you increase the size of the sequence which you're using and this acts as a comparing factor to see which algorithm takes however amount of time. 
            </p>
            <ul style={{listStyle:"none"}}>
                <li>Ranging from the best to the worse. </li>
                <li>- O(1) -&gt; This mean the time it takes for the algorithm is constant regardless of the size of the list. (Constant Time)</li>
                <li>- O(logN) -&gt; This mean the time it takes for the algorithm scales with log(N). (Log Time)</li>
                <li>- O(N) -&gt; This mean the time it takes for the algorithm scales linearly with the variable N (This variable mostly will be size of the sequence). (Linear Time)</li>
                <li>- O(N * logN) -&gt; This mean the time it takes for the algorithm scales at the rate of N*Log(N). (Linear-Log Time)</li>
                <li>- O(N<sup>2</sup>) -&gt; This mean the time it takes for the algorithm scales with square value of N. (Quadratic)</li>
                <li>- O(2<sup>N</sup>) -&gt; This mean the time it takes for the algorithm scales exponentially with the value of N. (Exponential Time)</li>
                <li>- O(N!) -&gt; This mean the time it takes for the algorithm scales with Factorial Value of N. (Factorial Time)  </li>
            </ul>
            <p>
                There's another time complexity called polynomial time. which goes a bit like this: O(N ^ x) where the N is raised to the value of x.)
            </p>
            <h2>Let's Look At The Implementation Of Linear Search</h2>
            <pre>
                <code className="language-python">{
`
def linearSearch(arr,key):
    for i in range(len(arr)): #You loop through the entire list. 
        if(arr[i] == key): #And checking for the key
            return i #And if found, you are ending the loop early. You return the index of the value. 
    return -1 #And if it didn't return when you loop through the whole list, then the value isn't present. Thus, returning -1. 

linearSearch([1,2,3,4,5,6,7,8,9],9)

`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
8

`
                }</code>
            </pre>
            <p>
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