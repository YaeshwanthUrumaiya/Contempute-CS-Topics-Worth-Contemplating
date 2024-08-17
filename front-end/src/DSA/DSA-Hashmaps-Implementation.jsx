import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAHashmapsImplementation({setOverviewMode,toggleFinished,changeToLesson}){
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
                Let's Implement Hashmaps!
            </h1>
            <h2>1. Creating The Node</h2>
            <p>
                The <code>Node</code> class is created as a support class that will hold important information such as the key, value, and the next node. This class will later be used in tandem with the <code>HashTable</code> class. 
            </p>
            <pre>
                <code className="language-python">{
`
class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None

`
                }</code>
            </pre>
            <h2>2. Creating Hashtable Class</h2>
            <p>
                The hashtable tracks the current size, the maximum size, and the hashtable itself.
            </p>
            <pre>
                <code className="language-python">{
`
class HashTable: 
    def __init__(self, maxx):
        self.size = 0
        self.max = maxx
        self.table = maxx * [None]

`
                }</code>
            </pre>
            <h2>3. The Hashing Function</h2>
            <p>
                <code>hashing(self, key)</code> function uses python's built-in function called <code>hash()</code>. This code turns the key into numbers. The numbers is then used with modulo operator (%) to get the remainder based on the described max size of the table.
            </p>
            <p>
                The result will be the index that we will use to store the value in.
            </p>
            <pre>
                <code className="language-python">{
`
def hashing(self, key):
        return hash(key) % self.max

`
                }</code>
            </pre>
            <h2>4. Inserting A Key And Value</h2>
            <p>
                <code>insert(self, key, value)</code> function will insert a value based on the key the user gave.
            </p>
            <ul style={{listStyle: "none"}}>
                <li>There are 3 scenarios:</li>
                <li>- When the current key (index) has a node in it.</li>
                <li>- The current key has a node in it, but the key inside the node is the same as the given key.</li>
                <li>- The current key has a node in it, but the key inside the node is not the same as the given key.</li>
            </ul>
            <h4>a. First Scenario</h4>
            <p>
                The first scenario is simple. We can just create a node and then assign that node to the hashmap.
            </p>
            <h4>b. Second Scenario</h4>
            <p>
                The second scenario means we only need to <i>update</i> the value of the node.
            </p>
            <h4>c. Third Scenario</h4>
            <p>
                The third scenario means we add the node to the end of the list.
            </p>
            <pre>
                <code className="language-python">{
`
def insert(self, key, value):
    hashedKey = self.hashing(key)

    if self.table[hashedKey] is None:
        # This is the first scenario where there are no values in the key
        self.table[hashed] = Node(key,value)
        self.size += 1 
        return
    else:
        # This is the first and second scenario where there are 1 or more value in the key
        buffer = Node(None, None)
        existingNode = self.table[hashed]
        buffer.next = existingNode
        current = buffer

        while current.next:
            if current.next.key == key:
                current.next.val = value
                return
            current = current.next
        current.next = Node(key,value)
        self.size += 1
        

`
                }</code>
            </pre>
            <h4>Buffer Node</h4>
            <p>
                Buffer node is used so that the existing node (the node that already exists in the key) is counted inside the while loop. If we just set the <code>current</code> to be the existing node, the while loop will not start if the existing node does not have <code>current.next</code>.
            </p>
            <h4>The purpose of while loop</h4>
            <p>
                The while loop allows us to find the node that has the same key as the given key (the key in the argument). If the while loop finds it, it will update the node, and stops the function. If the while loop does not find the node, it will add the new key-value as a node to the list.
            </p>
            <h2>5. Removing The Key:Value pair</h2>
            <p>
                <code>remove(self, key)</code> looks for the key and then removes the node.
            </p>
            <p>
                Since hashmaps uses linked list to store its values, the way we delete the node is by unlinking the node. If we're removing the first node in the list, that means we are removing the head of the list. To do that, we change <code>self.table[hashed]</code> to the next node of the head. By doing it, the head is gone, replaced by the next node. If the node is in between another node, we can take the previous node and have it skip the node we want to delete.
            </p>
            <pre>
                <code className="language-python">{
`
def remove(self, key):
        hashed = self.hashing(key)
        current = self.table[hashed]
        buffer = Node(None, None)
        buffer.next = current
        current = buffer
        
        while current.next:
            if current.next.key == key: 
                if current.next == self.table[hashed]: 
                    self.table[hashed] = current.next.next
                else: 
                    current.next = current.next.next
                self.size -= 1 
                return 
            current = current.next 
        
        raise HashMapError(key)
`
                }</code>
            </pre>
            <h2>6. Searching The Value</h2>
            <p>
                <code>search(self, key)</code> function returns a list of node using the given key. If the key does not find it, it will raise an error instead.
            </p>
            <pre>
                <code className="language-python">{
`
def search(self, key):
    hashed = self.hashing(key)
    
    current = self.table[hashed]
    
    while current:
        if current.key == key:
            return current.val
        current = current.next
        
    raise HashMapError(key)
`    
                }</code>
            </pre>
            <h2>7. Displaying The Hashmap</h2>
            <p>
                <code>display(self)</code> function will print (does not return anything) the hashmap to the console.
            </p>
            <ul style={{listStyle:"none"}}>
                <li>The format we want to display would be in key value pairs:</li>
                <li>Key: key 1, Value: value 1</li>
                <li>Key: key 2, Value: value 2</li>
                <li>Key: key 3, Value: value 3</li>
                <li>Key: key 4, Value: value 4</li>
            </ul>
            <pre>
                <code className="language-python">{
`
def display(self):
    print("Hash Table Contents:")
    print("-" * 40)
    for i in range(self.max):
        current = self.table[i]
        entered_loop = False
        while current:
            entered_loop = True
            print(f"Key: {current.key}, Value: {current.val}")
            current = current.next
        if not entered_loop:
            print(f'None in this index')
        print("-" * 40)
`
                }</code>
            </pre>
            <h2>8. Full Implementation</h2>
            <pre>
                <code className="language-python">{
`
class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None

class HashTable: 
    def __init__(self, maxx):
        self.size = 0
        self.max = maxx
        self.table = maxx * [None]
    
    def hashing(self, key):
        return hash(key) % self.max
    
    def insert(self, key, value):
        hashedKey = self.hashing(key)

        if self.table[hashedKey] is None:
            # This is the first scenario where there are no values in the key
            self.table[hashed] = Node(key,value)
            self.size += 1 
            return
        else:
            # This is the first and second scenario where there are 1 or more value in the key
            buffer = Node(None, None)
            existingNode = self.table[hashed]
            buffer.next = existingNode
            current = buffer

            while current.next:
                if current.next.key == key:
                    current.next.val = value
                    return
                current = current.next
            current.next = Node(key,value)
            self.size += 1

    def remove(self, key):
        hashed = self.hashing(key)
        current = self.table[hashed]
        buffer = Node(None, None)
        buffer.next = current
        current = buffer
        
        while current.next:
            if current.next.key == key: 
                if current.next == self.table[hashed]: 
                    self.table[hashed] = current.next.next
                else: 
                    current.next = current.next.next
                self.size -= 1 
                return 
            current = current.next 
        
        raise HashMapError(key)
    
    def search(self, key):
        hashed = self.hashing(key)
        
        current = self.table[hashed]
        
        while current:
            if current.key == key:
                return current.val
            current = current.next
            
        raise HashMapError(key)
    
    def display(self):
        print("Hash Table Contents:")
        print("-" * 40)
        for i in range(self.max):
            current = self.table[i]
            entered_loop = False
            while current:
                entered_loop = True
                print(f"Key: {current.key}, Value: {current.val}")
                current = current.next
            if not entered_loop:
                print(f'None in this index')
            print("-" * 40)
    
    def __len__(self):
        return self.size
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