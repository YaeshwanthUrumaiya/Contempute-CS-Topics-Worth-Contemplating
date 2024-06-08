import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAUsingLinkedList({setOverviewMode,toggleFinished,changeToLesson}){
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
                 Let's use our linked list class!
            </h1>
            <p>
                Let's create the linked list and use the insert function
            </p>
            <pre>
                <code className="language-python">{
`
LL = LinkedList()
LL.insert(1)
LL.insert(2)
LL.insert(3)
LL.insert(4)
print(LL)
LL.insert(5,2)
print(LL)
LL.insert(6, len(LL))
print(LL)

`
                }</code>
                <br />
                <code className="language-console">{
`
1, 2, 3, 4
1, 2, 5, 3, 4
1, 2, 5, 3, 4, 6

`
                }</code>
            </pre>
            <p>
                Now lets try to remove stuff from the list
            </p>
            <pre>
                <code className="language-python">{
`
print(len(LL))
LL.remove(len(LL)-1)
print(LL)
LL.remove()
print(LL)
LL.remove(1)
print(LL)

`
                }</code>
                <br />
                <code className="language-console">{
`
6
1, 2, 5, 3, 4
2, 5, 3, 4
2, 3, 4

`
                }</code>
            </pre>
            <p>
                Now searching functionality!
            </p>
            <pre>
                <code className="language-python">{
`
print(LL.search(10))
print(LL.search(3))
print(LL)

`
                }</code>
                <br />
                <code className="language-console">{
`
-1
1
2, 3, 4

`
                }</code>
            </pre>
            <h2>There Are Two More Types Of Linked Lists!</h2>
            <p>
                The other types are easy to understand! There are Double linked list and circular linked list.
            </p>
            <ul style={{paddingLeft:"20px"}}>
                <li><b>Double Linked List</b> - Instead of only having a link to the next node, double linked list also have a link to the previous node.</li>
                <li><b>Circular Linked List</b> - Which has only one pointer, but the very last pointer will point to back to the first node.</li>
            </ul>
            <p>
                The Implementions of them will be in the Advanced DS Subject!
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