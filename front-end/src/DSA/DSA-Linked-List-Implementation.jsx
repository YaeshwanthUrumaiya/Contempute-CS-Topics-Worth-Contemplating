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
            <h2>3. <code>insert(self, item, index)</code> Function</h2>
            <p>
                The <code>insert()</code> function is meant to allow the user to add a ndoe to the linked list, based on the index that are given to the function.
            </p>
            <p>
                There are several scenarios on where the index is going to be. <code>insert()</code> function deals with it.
            </p>
            <p>What happens when user put the index at the start?</p>
            <ul style={{paddingLeft:"20px",}}>
                <li>If list is empty, we put the item on the head.</li>
                <li>If list has 1 or more item, we put the item on the head, and linked the item to the previous item. Let's say we have item A as the current head, and item B is inserted at the start. This means item B will now be on the head, and it's next map is set to item A.</li>
            </ul>
            <p>What happens when user does not put the item in the start? There are 2 possibilities:</p>
            <ul style={{paddingLeft:"20px",}}>
                <li>If the index is higher than the current length, we will put them at the end of the list.</li>
                <li>If the index is inside the current length, we put them inside the list.</li>
            </ul>
            <p>
                We will explore this deeper in code, since we will go through the <code>insert()</code> function into several section of <code>if else</code> statement.
            </p>
            <pre>
                <code className="language-python">{
`
def insert(self, item, index=None):
        if index is None: 
            if self.head is None: 
                self.head = Node(item) 
            else: 
                current = self.head 
                while current.nextmap: 
                    current = current.nextmap
                current.nextmap = Node(item)  
        else: 
            if index == 0:
                new_node = Node(item) 
                new_node.nextmap = self.head 
                self.head = new_node
            else:
                current = self.head
                for i in range(index-1): 
                    if current is None: 
                        raise IndexError("Index out of range")
                    current = current.nextmap 
                new_node = Node(item) 
                new_node.nextmap = current.nextmap
                current.nextmap = new_node

`
                }</code>
            </pre>
            <h3>a. First Half of <code>insert()</code></h3>
            <div className="two-panel">
                <div>
                    <pre>
                        <code className="language-python">{
`
if index is None: 
    if self.head is None: 
        self.head = Node(item) 
    else: 
        current = self.head 
        while current.nextmap: 
            current = current.nextmap
        current.nextmap = Node(item)


`
                        }</code>
                    </pre>
                </div>
                <div>
                    <p>
                        The first half of the if else statement talks about what happens if the user does not include <code>index</code> as a parameter, which means it will be <code>None</code>.
                    </p>
                    <p>
                        If the linked list have no head, we set item to the end of the list, <b>which is the head</b>.
                    </p>
                    <p>
                        If the list is not empty, we loop to the end of the list and add the item to the list.
                    </p>
                </div>
            </div>
            <p>
                <code>current</code> variable is used to contain the last node of the list. Eventually, we will add the new item by putting it on the <code>nextmap</code> of the last element.
            </p>
            <h3>b. Second Half of <code>index</code></h3>
            <p>
                The second half of the code is when the user gives the <b>index</b> to <code>insert()</code>.
            </p>
            <pre>
                <code className="language-python">{
`
else: 
    if index == 0:
        new_node = Node(item) 
        new_node.nextmap = self.head 
        self.head = new_node
    else:
        current = self.head
        for i in range(index-1): 
            if current is None: 
                raise IndexError("Index out of range")
            current = current.nextmap 
        new_node = Node(item) 
        new_node.nextmap = current.nextmap
        current.nextmap = new_node

`
                }</code>
            </pre>
            <div className="two-panel panel-bg panel-color-2">
                <div>
                    <pre>
                        <code className="language-python">{
`
if index == 0:
    new_node = Node(item) 
    new_node.nextmap = self.head 
    self.head = new_node

`
                        }</code>
                    </pre>
                </div>
                <div>
                    <p>
                        If the <code>index</code> is 0, the node will replace the head.
                    </p>
                    <p>
                        There are 2 important thing to pay attention here, that is the <b>new node</b> and the <b>previous head node</b>. Before putting the new node as the head, the previous head node has to be set as the next map of the new node.
                    </p>
                </div>
            </div>
            <pre>
                <code className="language-python">{
`
else:
    current = self.head
    for i in range(index-1): 
        if current is None: 
            raise IndexError("Index out of range")
        current = current.nextmap 
    new_node = Node(item) 
    new_node.nextmap = current.nextmap
    current.nextmap = new_node

`
                }</code>
            </pre>
            <p>
                In order to reach the <code>index</code> node the user wants, we use <code>current</code> and for loop. The for loop will keep looping until it reaches the <code>index</code>. By the time the for loop ends, <code>current</code> should be the desired node of the list. If the index turns out to be out of range (<code>None</code>), it will raise an error instead.
            </p>
            <p>
                The idea here is to create a space between two node, and then insert our new node between it. We are going to link the <b>previous node</b> to the <b>new node</b>, and link the <b>new node</b> to the <b>subsequent node</b>.
            </p>
            <ul style={{paddingLeft:"20px"}}>
                <li> The previous node is <code>current</code>.</li>
                <li> The new node is <code>Node.new(item)</code>. </li>
                <li> The subsequent node is <code>current.nextmap</code>.</li>
            </ul>
            <p>
                Because we are going to override <code>current.nextmap</code> with the new node, we have to set next map of the new node to <code>current.nextmap</code> (subsequent), and then we can link previous node to the new node.
            </p>
            <h2>4. <code>remove(self, index)</code></h2>
            <p>
                The function removes an item from the list based on the index that the user give. If index is not given, it will remove the item on the head instead. Does it feels similar to another DS? (Yes, it's <b>queues</b>)
            </p>
            <p>
                There are several scenario when the user is removing an item from the list:
            </p>
            <ul style={{paddingLeft:"20px"}}>
                <li><b>The list is empty</b>. This means we should return or raise an error telling that list is empty.</li>
                <li><b>The index given exceeds the current list's length</b>. This means we should raise an error telling index exceeds length.</li>
                <li><b>The index is 0</b>. This means we shift the 2nd element of the list to the head.</li>
                <li><b>The index is within range and not 0</b>. We do something similar with insert, finding the index position, getting the previous item and the subsequent item on the list. Instead of inserting, we remove it. This means we set the <b>previous item's</b> next map <b>to be subsequent item</b>, and then return the index item.</li>
            </ul>
            <pre>
                <code className="language-python">{
`
def remove(self, index = 0):
        
    if self.head == None:
        return

    temp_head = self.head
    
    if index == 0: #If the index is 0, need to remove the first element
        self.head = temp_head.nextmap #Take the header and assign it to the 2nd value. 
        temp_head = None #Cleaning up the deleted node. 
        return

    for i in range(index - 1): #And if any value is given, we're going to loop to that index. 
        if temp_head is None: #And if it turns None, means the given index exceeds the range of the list, We are breaking it to raise the error below. 
            break
        temp_head = temp_head.nextmap
        

    if temp_head is None or temp_head.nextmap is None: #And we're raising the error here. This will come in clutch if the given index exceeds the our list's size. 
        raise IndexError("Index out of range") #We're checking both temp_head and temp_head.nextmap. Why's that? (If the index is far more than list's size, the temp_head will be None. But if we're trying to remove the item at the index of (list's size)+1, the temp_head will have the last item but the nextmap of the temp_head will be None. So that's why!)
    
    #And now, we just need to swap the values.
    next_to_temp = temp_head.nextmap.nextmap
    temp_head.nextmap = next_to_temp
    next_node = None  #Clean up the removed node

`
                }</code>
            </pre>
            <div className="two-panel">
                <div>
                    <pre>
                        <code className="language-python">{
`
if self.head == None:
        return

`
                        }</code>
                    </pre>
                </div>
                <div>
                    <p>
                        If the list is empty, (<code>self.head == None</code>) stops the function with <code>return</code>.
                    </p>
                </div>
            </div>
            <div className="two-panel">
                <div>
                    <pre>
                        <code className="language-python">{
`
temp_head = self.head

`
                        }</code>
                    </pre>
                </div>
                <div>
                    <p>
                        <code>temp_head</code> is a container to safely contain & access <code>self.head</code>, in case we are modifying <code>self.head</code>.
                    </p>
                </div>
            </div>
            <div className="two-panel">
                <div>
                    <pre>
                        <code className="language-python">{
`
if index == 0:
    self.head = temp_head.nextmap
    return temp_head.item

`
                        }</code>
                    </pre>
                </div>
                <div>
                    <p>
                        If the index is 0, we will remove <code>self.head</code> by setting the second element of the list to be the first (using <code>temp_head</code>), and then we return the item on index 0 (the head).
                    </p>
                </div>
            </div>
            <div className="two-panel">
                <div>
                    <pre>
                        <code className="language-python">{
`
for i in range(index - 1):
    if temp_head is None:
        break
    temp_head = temp_head.nextmap

`
                        }</code>
                    </pre>
                </div>
                <div>
                    <p>
                        Here, we are using <code>temp_head</code> as a container for the <code>index</code> item. This snippet of code is used to check if index is in range or not. If it is out of range, <code>temp_head</code> will be <code>None</code>, which we will respond with error by using the code below:
                    </p>
                </div>
            </div>
            <pre>
                <code className="language-python">{
`
if temp_head is None or temp_head.nextmap is None:
        raise IndexError("Index out of range") #We're checking both temp_head and temp_head.nextmap. Why's that? (If the index is far more than list's size, the temp_head will be None. But if we're trying to remove the item at the index of (list's size)+1, the temp_head will have the last item but the nextmap of the temp_head will be None. So that's why!)

`
                }</code>
            </pre>
            <p>
                Previously, we already checked if the index is in range or not. By using <code>if else</code> condition, we check if <code>temp_head</code> or <code>temp_head.nextmap</code> is <code>None</code> or not. If they are, the code will raise an error.
            </p>
            <h3>Why <code>temp_head.nextmap</code> is checked?</h3>
            <p>
                If the index is far more than list's size, the <code>temp_head</code> will be None. But if we're trying to remove the item at the index of (list's size)+1, the temp_head will have the last item but the nextmap of the temp_head will be None. So that's why! <b>Remember, the previous code uses <code>(index - 1)</code> when looping.</b>
            </p>
            <div className="two-panel">
                <div>
                    <pre>
                        <code className="language-python">{
`
next_to_temp = temp_head.nextmap.nextmap
temp_head.nextmap = next_to_temp
next_node = None  #Clean up the removed node

`
                        }</code>
                    </pre>
                </div>
                <div>
                    <p>
                        Now, we just need to swap the values.
                    </p>
                </div>
            </div>
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