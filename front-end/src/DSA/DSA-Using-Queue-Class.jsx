import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAUsingQueueClass({setOverviewMode,toggleFinished,changeToLesson}){
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
                 Using Queue Class
            </h1>
            <p>
                Let's instantiate the object:
            </p>
            <pre>
                <code className="language-python">{
`
q = QUEUE(3)
q.EnQ("a")
q.EnQ('b')
q.EnQ('v')
print(q)

`
                }</code>
                <br />
                <code className="language-console">{
`
Enqueued Item: a at rear position: 0
Enqueued Item: b at rear position: 1
Enqueued Item: v at rear position: 2
a <- b <- v

`
                }</code>
            </pre>
            <p>
                Now let's try removing an element (Dequeue):
            </p>
            <pre>
                <code className="language-python">{
`
q.DeQ()
q.Peek()

`
                }</code>
                <br />
                <code className="language-console">{
`
Dequeued Item and shifted the Queue forward
'b'

`
                }</code>
            </pre>
            <p>
                If the queue is full, enqueueing an element to it will cause an error just like how it creates an error. If the queue is empty, dequeueing an element from it will also creates an error.
            </p>
            <p>
                Note, when implementating this on your own (which you should totally do! Try to understand the code and then try to code it up by using just your own understanding of your class)
            </p>
            <p>
                You can remove the print statements in your implementation to make it look more professional! 
            </p>
            <p>
                Remember to not worry too much! Writing code is a process. There will be errors, but each time you found a way to fix it, you're getting better. So, just do it!
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