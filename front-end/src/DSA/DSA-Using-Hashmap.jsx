import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAUsingHashmap({setOverviewMode,toggleFinished,changeToLesson}){
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
                Let's use our Hashmap class!
            </h1>
            <p>
                Let's create the class, and then insert a few values and then see how it works! In the our insertion, we're inserting in keys which will return in the same hashed index value 
            </p>
            <pre>
                <code className="language-python">{
`
hashmap = HashTable(10)
hashmap.insert(1, 1)
hashmap.insert(11, 3)
hashmap.insert(21, 4)
hashmap.display()

`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
Hash Table Contents:
----------------------------------------
None in this index
----------------------------------------
Key: 1, Value: 1
Key: 11, Value: 3
Key: 21, Value: 4
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------

`    
                }</code>
            </pre>
            <p>
                Let's update a value and insert another value in different hashed index value
            </p>
            <pre>
                <code className="language-python">{
`
hashmap.insert(1,12)
hashmap.insert(0,0)
hashmap.display()

`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
Hash Table Contents:
----------------------------------------
Key: 0, Value: 0
----------------------------------------
Key: 1, Value: 12
Key: 11, Value: 3
Key: 21, Value: 4
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------
None in this index
----------------------------------------

`
                }</code>
            </pre>
            <p>
                Now we find the list of items in our HashMao
            </p>
            <pre>
                <code className="language-python">{
`
print(len(hashmap))

`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
4

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