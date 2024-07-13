import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSABubbleSort({setOverviewMode,toggleFinished,changeToLesson}){
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
                Bubble Sort
            </h1>
            <p>
                So, we are going to take the first pair elements and compare them, and swap them if the first element is greater than the 2nd element from the pair. We will then compare the next pair of elements and compare them and swap if needed. Likewise, it will take pairs and compare till we reach the final pair. 
            </p>
            <p>
                Now after we do this once. the very first element should be in the right place. Now we have to repeat the same, but instead of finding pairs starting from the first element, we will start from the 2nd element and compare pairs and once that's done, we'll start comparing pairs from the 3rd element. 
            </p>
            <h2>
                When Used
            </h2>
            <p>
                For any given DS that has a sequence of values <i>which is sorted</i>, this method should work. But works best in small arrays/lists as the time complexity is pretty high!
            </p>
            <p>
                In all cases: The time complexity is O(N<sup>2</sup>) as there is no way for both for-loop to exit early. It will run till completion every time!   
            </p>
            <pre>
                <code className="language-python">{
`
def bubblesort(arr):
    for i in range(len(arr)-1): #We're looping this n number of times. This element 
        for j in range(len(arr)-i-1): #We're looping from the starting to the element before ith element. we're doing -1 here 
            #so when doing +1 down below when comparing, it always works. 
            if arr[j] > arr[j+1]: #
                arr[j], arr[j+1] = arr[j+1], arr[j]
        print(arr)
    return arr
arr = [45, 23, 1, 10, 5, 2, 0]
print(bubblesort(arr))
`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
[23, 1, 10, 5, 2, 0, 45]
[1, 10, 5, 2, 0, 23, 45]
[1, 5, 2, 0, 10, 23, 45]
[1, 2, 0, 5, 10, 23, 45]
[1, 0, 2, 5, 10, 23, 45]
[0, 1, 2, 5, 10, 23, 45]
[0, 1, 2, 5, 10, 23, 45]
`    
                }</code>
            </pre>
            <p>
                The code first compares 23 with all element, then compares 1, compares 10, 5, 2, 0, and at the end compares 45.
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