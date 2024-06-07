import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSATree({setOverviewMode,toggleFinished,changeToLesson}){
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
                </div>
                Tree
            </h1>
            <h2>
                What Is It?
            </h2>
            <p>
                The tree data structure looks exactly like a tree! A tree usually have one main branch. This branch will eventually branches out into several branches, and each of these branches will branch again into several branches, until the end of the branch being the leaf.
            </p>
            <p>
                In the tree data structure, the main branch is often called the <b>root node</b>. If branches sprout from the root, these branches are the <b>children node</b> of the <b>root node</b>. If the "children of the root" has another children, the "children of the root" is now the parent of their children.
            </p>
            <p>
                In this tree data structure, the data is stored inside the nodes of the tree.
            </p>
            <ul style={{paddingLeft:"20px"}}>
                <li><b>Root node</b> is the node that has no parent.</li>
                <li><b>Parent node</b> is a node that has at least a child.</li>
                <li><b>Children node</b> is a node that has a parent.</li>
                <li><b>Internal node</b> is if your node has at least <b>one</b> child.</li>
                <li><b>External node</b> is when your node has <b>no</b> child.</li>
                <li><b>Inner/Branch node</b> is when your node has <b>more than one</b> child.</li>
            </ul>
            <h2>What Can You Do With It?</h2>
            <p>
                Well, we could do a bunch of things with it, which are insertion, figuring how tall the tree is, Traversal of tree, Check if the tree is full/perfect/complete/balanced, Searching for any node. And there is a bunch of types of trees. We'lll see the implementation normal trees and Binary Search Trees.
            </p>
            <h2>What Are The Real World Use Case For Tree Data Structures?</h2>
            <ul style={{paddingLeft:"20px"}}>
                <li>Tree is frequently applied during <b>heap sort</b>.</li>
                <li>Database Indexing: Well, your folders are in your desktop, which is in your Users folder, which is in the <code>C:/</code> Drive. Doesn't this sound like an Tree?</li>
                <li>Graphical User Interfaces (GUI): GUI frameworks use Tree Structures to manage UI components hierarchically.</li>
                <li>AI: An AI method called Decision Tree, meant to solve problems such as classification uses Tree Structures.</li>
            </ul>
            <p>
                <div id="side-button">
                    <button><a href="#lesson-content">Go up</a></button>
                    <button onClick={()=>{toggleFinished(activeLesson);toggleFinish()}}>{finish?"Unfinish":"Finish"}</button>
                </div>
                <div id="r-side-button">
                </div>
            </p>

            <br />
        </div>
    </>)
}