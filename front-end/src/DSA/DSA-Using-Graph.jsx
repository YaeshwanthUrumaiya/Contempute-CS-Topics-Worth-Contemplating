import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAUsingGraph({setOverviewMode,toggleFinished,changeToLesson}){
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
                Let's use our linked list class!
            </h1>
            <p>
                Let's create the class, add a few edges and some
            </p>
            <pre>
                <code className="language-python">{
`
G = Graph([3,1,5])
G.AddEdge(3, 1)
G.AddEdge(1, 5)
G.displayGraph()
print('-' * 40)
print(f"Before adding vertice:{len(G)}")
G.AddVertice(2)
print(f"After adding vertice:{len(G)}")
print("Graph Right Now:")
G.displayGraph()
`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
3 : [[0, 0], [1, 1], [0, 0]]
1 : [[1, 1], [0, 0], [1, 1]]
5 : [[0, 0], [1, 1], [0, 0]]
----------------------------------------
Before adding vertice:3
After adding vertice:4
Graph Right Now:
3 : [[0, 0], [1, 1], [0, 0], [0, 0]]
1 : [[1, 1], [0, 0], [1, 1], [0, 0]]
5 : [[0, 0], [1, 1], [0, 0], [0, 0]]
2 : [[0, 0], [0, 0], [0, 0], [0, 0]]
`
                }</code>
            </pre>
            <p>
                Let's add a vertice with some weight with some direction.
            </p>
            <pre>
                <code className="language-python">{
`
G.AddEdge(1,2, weight = 12)
G.AddEdge(2,5, weight = 10, direction = 'e')
G.displayGraph()
`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
3 : [[0, 0], [1, 1], [0, 0], [0, 0]]
1 : [[1, 1], [0, 0], [1, 1], [1, 12]]
5 : [[0, 0], [1, 1], [0, 0], [1, 10]]
2 : [[0, 0], [1, 12], [0, 0], [0, 0]]
`
                }</code>
            </pre>
            <p>
                Let's delete a vertice and see how that works
            </p>
            <pre>
                <code className="language-python">{
`
print(f"Before deleting vertice:{len(G)}")
G.DelVertice(3)
print(f"After deleting vertice:{len(G)}")
print("Graph Right Now:")
G.displayGraph()
`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
Before deleting vertice:4
After deleting vertice:3
Graph Right Now:
1 : [[0, 0], [1, 1], [1, 12]]
5 : [[1, 1], [0, 0], [1, 10]]
2 : [[1, 12], [0, 0], [0, 0]]
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