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
                Let's Implement Graph!
            </h1>
            <p>
                This implementation of graph uses the adjacency matrix. The way this will work is by having an array that stores another array which has information about which node connects to which.
            </p>
            <ul style={{listStyle:"none"}}>
                <li>Below is an unweighted adjacency matrix.</li>
                <li>[0,1,0] &lt;-- Is the first vertice's connections</li>
                <li>[1,0,1] &lt;-- Is the second vertice's connections</li>
                <li>[0,1,0] &lt;-- Is the third vertice's connections</li>
            </ul>
            <p>
                In this adjacency matrix, the 0 represents no connection and 1 represents connection. The connection is based on the <b>index the 0 and 1 is currently in</b>.
            </p>
            <ul style={{listStyle:"none"}}>
                <li>Below is a weighted adjacency matrix.</li>
                <li>[[0,0],[1,1],[0,0]]</li>
                <li>[[1,1],[0,0],[1,1]]</li>
                <li>[[0,0],[1,1],[0,0]]</li>
            </ul>
            <p>
                The first element of the array inside [1,1] indicates the connection. The second element of the array indicates the weight of the connection.
            </p>
            <h2>1. Initializing The Class</h2>
            <pre>
                <code className="language-python">{
`
class Graph:
    def __init__(self,vertices):
    self.adj = [[ [0, 0] for _ in range(len(vertices))] for _ in range(len(vertices))]
    self.vertices = vertices
`
                }</code>
            </pre>
            <p>
                <code>self.adj</code> is where we store the adjacency matrix. The inline for loop creates the adjacency matrix we've discussed earlier, except it sets all of the value to [0,0].
            </p>
            <h2>2. Adding Edges</h2>
            <p>
                <code>AddEdge(self, startKey, endKey, weight = 1, direction = 'B')</code> function is used to create a link (edge) between two vertices, with a customizeable weight value and customizeable direction (one or both ways). This function is used to set <b>or edit</b> a connection between 2 vertices.
            </p>
            <p>
                The way the function works is by getting the start and end vertices using the <code>startKey</code> and <code>endKey</code> parameter. <code>startKey</code> and <code>endKey</code> is supposed to be <i>the data of the vertice</i>, <b>not the index</b>.
            </p>
            <p>
                From there, we can get the index of the keys and use that index value to connect the vertices on the adjacency matrix, based on the direction that is given.
            </p>
            <ul style={{listStyle: "none"}}>
                <li>The direction parameter takes 3 types of arguments.</li>
                <li>- <code>'B'</code> Which means both ways, the connection will be established from start to end and end to start.</li>
                <li>- <code>'S'</code> Which means <b>start to end</b>, where the connection is start to end only.</li>
                <li>- <code>'E'</code> Which means <b>end to start</b>, where the connection is from end to start only.</li>
            </ul>
            <pre>
                <code className="language-python">{
`
def AddEdge(self, startKey, endKey, weight = 1, direction = 'B'):

    # Before creating a connection, we check if the startKey
    # and endKey exists in our collection of vertices or not.
    # Raise an error if it is not found.
    if startKey in self.vertices and endKey in self.vertices:
        start = self.vertices.index(startKey)
        end = self.vertices.index(endKey)
        
        # After getting the index of the start and end, we create
        # the connection based on the direction given, by checking
        # the direction one by one. If it does not find a valid
        # direction, raise an error instead.
        if direction.upper() == "B":
            self.adj[start][end] = [1, weight]
            self.adj[end][start] = [1, weight]
            return
        if direction.upper() == "S":
            self.adj[start][end] = [1, weight]
            return 
        if direction.upper() == "E":
            self.adj[end][start] = [1, weight]
            return
        raise GraphError(f"Invalid direction: {direction}")
    else:
        raise GraphError(f"One or both of the keys {startKey}, {endKey} are not in the vertices.")
`
                }</code>
            </pre>
            <h2>3. Deleting Edges</h2>
            <p>
                <code>DelEdge(self, startKey, endKey)</code> also finds the <code>startKey</code> index and <code>endKey</code> index. But since we're setting all to 0, it does not require direction or weight.
            </p>
            <pre>
                <code className="language-python">{
`
def DelEdge(self, startKey, endKey):
    if startKey in self.vertices and endKey in self.vertices:
        start = self.vertices.index(startKey)
        end = self.vertices.index(endKey)
        self.adj[start][end] = [0, 0]
        self.adj[end][start] = [0, 0]
    else:
        raise GraphError(f"One or both of the keys {startKey}, {endKey} are not in the vertices.")
`
                }</code>
            </pre>
            <h2>4. Adding A Vertice</h2>
            <p>
                <code>AddVertice(self, vertice)</code> function adds a vertice to the graph. It won't add a vertice if the vertice exists in the graph already.
            </p>
            <p>
                When we're adding a vertice, we also deal with expanding the adjacency matrix. We can expand the adjacency matrix using a for loop.
            </p>
            <ul style={{listStyle:"none"}}>
                <li>Let's say our adjacency matrix array currently have these:</li>
                <li>[[0,0],[0,0],[0,0]]</li>
                <li>[[0,0],[0,0],[0,0]]</li>
                <li>[[0,0],[0,0],[0,0]]</li>
                <br />
                <li>After adding a vertice, we want it to be like this:</li>
                <li>[[0,0],[0,0],[0,0],[0,0]]</li>
                <li>[[0,0],[0,0],[0,0],[0,0]]</li>
                <li>[[0,0],[0,0],[0,0],[0,0]]</li>
                <li>[[0,0],[0,0],[0,0],[0,0]]</li>
            </ul>
            <p>
                To do that, we loop through the adjacency matrix and append [0,0] to each <b>member</b> of the matrix array. At the end of it, we append a new member with empty connections to the <b>matrix</b>, representing the new vertice that was recently added.
            </p>
            <pre>
                <code className="language-python">{
`
def AddVertice(self, vertice):
    if vertice not in self.vertices:
        self.vertices.append(vertice)

        for i in range(len(self.adj)):
            self.adj[i].append( [0, 0] )
        
        self.adj.append([[0, 0] for _ in range(len(self.vertices))])
        # The inline for-loop creates a new member based on the length
        # of the current vertices array.
    else:
        raise GraphError(f"Given vertice: {vertice} is already in the graph.")
`
                }</code>
            </pre>
            <h2>5. Deleting A Vertice</h2>
            <p>
                <code>DelVertice(self, vertice)</code> deletes a vertice if it exists in the graph.
            </p>
            <p>
                The way we delete the vertice is similar to how we add the vertice, except we pop it instead of adding it. We also use for loop to go through the adjacency matrix to remove the corresponding vertice.
            </p>
            <pre>
                <code className="language-python">{
`
def DelVertice(self, vertice):
    if vertice in self.vertices:
        toRemove = self.vertices.index(vertice)
        self.adj.pop(toRemove)
        self.vertices.remove(vertice)
        for i in range(len(self.adj)):
            self.adj[i].pop(toRemove)
    else:
        raise GraphError(f"Given vertice: {vertice} is not in the graph.")
`
                }</code>
            </pre>
            <h2>6. Displaying The Graph (Prettier)</h2>
            <p>
                We're just displaying the graph but prettier (more readable).
            </p>
            <pre>
                <code className="language-python">{
`
def displayGraph(self):
    for i in range(len(self.adj)):
        print(str(self.vertices[i]) + " : "  + str(self.adj[i]))
`
                }</code>
            </pre>
            <h2>7. Returning Adjacency <u>List</u></h2>
            <p>
                <code>getAdjacencyList(self)</code> function takes the adjacency matrix and returns the <b>adjacency <i>list</i></b>.
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