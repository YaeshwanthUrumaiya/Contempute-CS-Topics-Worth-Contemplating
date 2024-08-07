import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css';
import stackops from './images/stack_ops.png'

export default function DSAStack({setOverviewMode,toggleFinished,changeToLesson}){
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
                 Stack
            </h1>
            <div className="two-panel">
                <div>
                    <h2>What is Stack?</h2>
                    <p>
                        Imagine a stack of books on your table right now. Each book is an element in your stack, and each element have some infomation/data in them. 
                    </p>
                    <p>
                        Now, if you were to add a book, you're going to add it to the top. And if you're going to remove a book, you're going to remove from the top. 
                    </p>
                    <p>
                        Let's say we have three books in the stack, BookA, BookB, BookC. If you want to add BookD, the stack would be something like on the right:
                    </p>
                    <p>
                        If you want to take book B, you gotta remove book D and C first, and finally remove book B.
                    </p>
                    <p>
                        So the most recently added book has to be removed first from the stack. Thus the name Last In, First Out is coined. The book that enters the stack last will get exited first because there is only way of enter, which is the top.
                    </p>
                    <h2>Why is Stack Useful?</h2>
                    <p>
                        You can add an element, and remove an element the stack. You can also take a peek at the top most element in the stack and check if the stack is empty or is all filled up.
                    </p>
                    <p>
                        One of the most prominent application from this data structure is the <b>undo and redo</b> feature present in almost every modern editing software.
                    </p>
                </div>
                <div className="panel-bg panel-color-2">
                    <img src={stackops} alt="Stack Operation"/>
                </div>
            </div>
            <p>
                Other tasks such as recursive functions or InFix and PostFix uses features of stack as well, which will be explained later on advanced Data Structure.
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