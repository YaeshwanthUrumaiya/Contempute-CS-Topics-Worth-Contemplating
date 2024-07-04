import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAGraph({setOverviewMode,toggleFinished,changeToLesson}){
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
                Graph
            </h1>
            <h2>What Is It?</h2>
            <p>
                Graph is a bunch of nodes connected together. The information we store is stored in a node, and the node can be linked with other nodes.
            </p>
            <p>
                Graph has two types. <b>w</b>eighted and <b>u</b>nweighted.
            </p>
            <p>
                In graphs, nodes are called <b>vertices</b>. When two vertices are connected, we call the connection <b>edge</b>.
            </p>
            <h2>What Can You Do With It?</h2>
            <p>
                Well, insertion and deletion of vertices and edges and representation of these vertices and edges in two methods, Adjacency Matrix and Adjacency List. 
            </p>
            <h2>What Are The Real-world Use Case?</h2>
            <p>
                Graphs are used by google maps. To put it simply, the places are vertices, and the distance between vertices are weighted edges. Google Maps now have a proper data structure that makes it easier to determine the shortest path.
            </p>
            <p>
                With algorthims based on Graphs such as Dijkstra's, the emeny characters in the video games pathfind to your character. 
            </p>
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