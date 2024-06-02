import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSALinkedList({setOverviewMode,toggleFinished,changeToLesson}){
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
                 Linked List
            </h1>
            <h2>What is it?</h2>
            <p>
                Imagine you went to the beach one day and found a map inside of a bottle. When going to the location on the map, you dig up a sack full of gold coins. But that's not all, you also find another map. Now naturally, you go the location in that 2nd map and then find another sack of coins + map. Each time you go to the location in the map, you find a sack of coin + map till the 12th time, which had just the sack of coins alone. This is literally linked lists.
            </p>
            <p>
                The first map is found along without any gold, every other location will have both the sack of gold + map except the final location. The maps point you to the next location while the sack of coins is the valuable part of your excavation. 
            </p>
            <p>
                The first map is known as header, the maps you found in each location along with the gold is known as pointers and each pointer will point to the next treasure. Oh, by the way, the treasures are known as the data.
            </p>
            <p>
                You bury the map and the gold together as a whole, which is known as a node! 
            </p>
            <p>
                The whole idea of your header pointing to your first node and each pointer inside each node pointing to the next node till the final node doesn't have a pointer is known as linked list. Now, the pirates are also CS Big Brains!
            </p>
            <h2>What Can You Do With Them?</h2>
            <p>
                You can insert a node inside the linked like (in the front, in the back and in the middle) and you can delete a node (in the front, in the back ad in the middle) and finally, you can search for an value in the linked list and that's it! 
            </p>
            <h2>What Are The Actual Usecase In Real World?</h2>
            <p>
                Well, this data structure is kinda like the underlying DS for implementing various other DS like Hashmaps and so on. As a matter of fact, instead of using Lists (in python) for implementing stack and queues, we can use Linked Lists.
            </p>
            <p>
                If you notice how linked list behave, there are similarities on how python's array work and linked list. Deleting one node from the list will cause the index to automatically readjust, similar to how python handles array.
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