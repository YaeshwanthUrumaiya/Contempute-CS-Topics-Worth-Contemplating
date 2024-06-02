import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSALinkedListImplementation({setOverviewMode,toggleFinished,changeToLesson}){
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
            <h2>1. Creating Node</h2>
            <p>
                The <code>Node</code> class can be considered as the "container" of the 2 important information. It is the <b>chest</b> that contains the content (data) as well as the map (the reference to the next node). The <code>Node</code> on its own is not the linked list, instead it's the element itself. If the elements are linked, those are what we call linked list. The class that manage nodes that are linked together is what we will call the <code>LinkedList</code> class, which we will dive in more after <code>Node</code> class.
            </p>
            <div className="two-panel">
                <div>    
                    <ul style={{padding:"20px"}}>
                        <li><code>self.item</code> The value we store in the node. It's the treasure in the treasure chest analogy.</li>
                        <li><code>self.nextmap</code> The map that leads to the next node. It's the treasure map in the treasure chest analogy.</li>
                    </ul>
                </div>
                <div>
                    <pre>
                        <code className="language-python">{
`
class Node: 
    def __init__(self, item):
        self.item = item
        self.nextmap = None

`
                        }</code>
                    </pre>

                </div>
            </div>
            <h2>2. Creating Linked List Class</h2>
            <pre>
                <code className="language-python">{
`
class LinkedList:
    def __init__(self):
        self.head = None

`
                }</code>
            </pre>
            <p>
                The linked list starts with <code>self.head</code> being none as the initial value.
            </p>
            <h3>What's The Head?</h3>
            <p>
                The head is the <b>head of the list</b>. It is the first item in the list. Since linked list is built on top of nodes that has information to the next node, we require only <b>the head</b> to access the whole list.
            </p>
            <p>
                If inside the list there are more than 2 nodes linked, the head will definitely linked to the second list, and the second list linked to the third and so on. This means you need only the head to access the whole list.
            </p>
            <p>
                So you see, <code>self.head</code> is <b>indeed</b> important. The functions that will be inside the <code>LinkedList</code> class depends on <code>self.head</code> in order to access or modify the linked list.
            </p>
            <h2>3. <code>insert()</code> Function</h2>
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