import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSABinarySearch({setOverviewMode,toggleFinished,changeToLesson}){
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
                Binary Search
            </h1>
            <p>
                This is another type of Searching Algorithm which works only on sorted sequence of values. So when given a key to look for it, it will divide the sequence into two halves and check the middle value. If the key is the middle value, you got your answer there! If it's not the middle value, you're going to check if the key is greater than the middle value, if it is, then your answer should be in the right half of the sequence (Since it's all sorted values). If not, then your answer should be in the left half of the sequence! 
            </p>
            <p>
                So basically, binary search does this:
            </p>
            <ol style={{paddingLeft:"20px"}}>
                <li>You have a key to search</li>
                <li>The function will guess the middle of sequence of values</li>
                <li>If the function gets the value, returns it.</li>
                <li>If it doesn't, compare the current guess with the key you want to search.</li>
                <li>If the guess is smaller, the function guess the new middle of the left half, meaning it guess the middle of the value on the lesser half.</li>
                <li>If the guess is bigger, the function guess the new middle of the right half, meaning it guess the middle of the value on the bigger half.</li>
                <li>The guesswork is repeated until the function arrives at the answer.</li>
            </ol>
            <p>
                When dividing your input sequence into parts and then executing a set of instructions in those parts, it's called Divide And Conquer! Because, you know, you are dividing the input sequence and then working on it!
            </p>
            <h2>When Used</h2>
            <p>
                For any given DS that has a sequence of values <i>which is sorted</i>, this method works. You are dividing the sequence into halves each time you move, thus the amount of comparions you have to do will halve with each time you move. And when you do move, you only compare the middle element, not every element in that halved sequence. 
            </p>
            <p>
                In the best case: You find the element you're looking for in the middle index and you only need to check middle value in your first time and compare once. Time complexity -&gt; O(1)
            </p>
            <p>
                In the worse case: You might not even find that value, so you gotta divide the sequence till the size of the sequences go to zero. Time Complexity -&gt; O(Log<sub>2</sub>n); Log<sub>2</sub>n -&gt; As you are dividing it and searching; thus the log and then it's divided into two, thus the two part!
            </p>
            <pre>
                <code className="language-python">{
`
def binarySearch(arr, key):
    l, r = 0, len(arr) - 1 #Figuring the left and right of the arr. These value denote indexes of the arr. 
    while l <= r: #If the left variable is indeed to the left size of the right value. This is the same as the finding the len(arr) 
        #but for that subset of the sequence
        print('---')
        print(l,r)
        mid = (l + r) // 2 #And you're figuring out the middle value. 
        if arr[mid] == key: #If arr[mid] == key, then return the mid right away!
            return mid
        elif arr[mid] > key: #And if not, you are comparing how the element in the mid index is greater or lower. 
            r = mid - 1 #And accordingly, you are moving the right or left value. 
        else:
            l = mid + 1
        print(l,r) #I've added the print statements to see how the left and right values are changing as we divide and go through the sequence. 
    return -1 #If didn't find the key untill the length of divided subsequences are 0, then return -1

binarySearch([1,2,3,4,5,6,7,8,9],10)

`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
---
0 8
5 8
---
5 8
7 8
---
7 8
8 8
---
8 8
9 8

-1
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