import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAMergeSort({setOverviewMode,toggleFinished,changeToLesson}){
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
                Merge Sort
            </h1>
            <p>
                First, let's divide the list into half. Then take each half and then divide those into halves. Like that, keep taking each halves and then dividing them till every element is alone. Then start merging the values in the same order at which you split them up but while merging, you have to make sure that you combine it back in such a way that it is sorted. 
            </p>
            <h2>When Used</h2>
            <p>
                For any given DS that has a sequence of value, this method should work. But works best in arrays/lists that values are almost sorted already!
            </p>
            <p>
                In all cases: The time complexity is O(N * Log(N)) as there is no way for both for loop to exit early. It will run till completion every time!
            </p>
            <pre>
                <code className="language-python">{
`
def mergesort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2 # "//" operator divides and rounds the division to the nearest integer.
    left = arr[:mid] #Here, we are spliting. 
    right = arr[mid:]
    return merge(mergesort(left), mergesort(right))

def merge(left, right):
    merged = []
    left_index = 0
    right_index = 0
    
    while left_index < len(left) and right_index < len(right): #comparing both and then updating the merged array
        if left[left_index] <= right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1 
    #and when anyone of array is completed. you extend the other array to the merged. 
    merged.extend(left[left_index:])
    merged.extend(right[right_index:])
    return merged

print(mergesort([38,27,43,3,9,82,19]))

`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
[3, 9, 19, 27, 38, 43, 82]

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