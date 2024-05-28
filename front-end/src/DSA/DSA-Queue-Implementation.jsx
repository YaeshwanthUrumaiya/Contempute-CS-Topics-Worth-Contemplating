import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAQueueImplementation({setOverviewMode,toggleFinished,changeToLesson}){
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
                 Let's Implement Queue!
            </h1>
            <h2>1. Let's Create Queue Class</h2>
            <pre>
                <code className="language-python">{
`
class queueError(Exception):
    pass

class QUEUE():
    def __init__(self,limit):
        self.q=[]
        self.limit = limit
        self.front = -1
        self.rear = -1

`
                }</code>
            </pre>
            <ul style={{listStyle:"none"}}>
                <li><code>self.limit</code> is the limit of the queue</li>
                <li><code>self.front</code> is the variable we use to keep track of the <b>front</b>. It should be 0 when it has an item, -1 if queue is completely empty.</li>
                <li><code>self.rear</code> is the variable we use to keep track of the <b>back</b>. When the queue is not empty, it should represent the index of the last added item. Otherwise, -1.</li>
            </ul>
            <h2>2. Check Empty & Full</h2>
            <p>
                Adding the function below to the class allows us to check if the queue is empty or full.
            </p>
            <pre>
                <code className="language-python">{
`
def CheckEmpty(self):
    return len(self.q) == 0

def CheckFull(self):
    return len(self.q) == self.limit

`
                }</code>
            </pre>
            <h2>3. <code>EnQ</code> (Enqueue) Function</h2>
            <pre>
                <code className="language-python">{
`
def EnQ(self,item):
    if not self.CheckFull():
        if(self.CheckEmpty()):
            self.front = 0
        self.q.append(item) # and we're adding the element to the queue from the rear. 
        self.rear += 1 # and updating the rear variable as well
        print(f"Enqueued Item: %s at rear position: %s"%(item,str(self.rear)))
    else:
         raise queueError("Can't Enqueue; The Q is full")


`
                }</code>
            </pre>
            <p>
                <code>EnQ(self,item)</code> takes <code>item</code> as its parameter. The item here is the element we want to add (enqueue) to the queue array.
            </p>
            <p>
                If the queue is <b>not</b> full:
            </p>
            <ol style={{paddingLeft:"20px"}}>
                <li><code>if self.CheckEmpty(): self.front = 0</code> If the item we're enqueueing is the first item of the empty queue, the <code>first</code> variable needs to be updated to 0, following the index of the first element of the array.</li>
                <li><code>self.q.append(item)</code> adds the item from the rear. </li>
                <li><code>self.rear += 1</code> updates the <code>rear</code> variable. </li>
            </ol>
            <p>
                If the queue is not full, it will raise an error instead.
            </p>
            <h2>4. <code>DeQ</code> (Dequeue) Function</h2>
            <pre>
                <code className="language-python">{
` 
def DeQ(self):
    if not self.CheckEmpty():
        if(self.front == self.rear):
            self.front , self.rear = -1,-1
        val = self.q.pop(0)

        # Here, we should've added 1 to the front variable right? Because the front variable should track the front of the queue and we just removed an element so, the front should
        # move forward right? That's the catch! Since Python automatically shortens the queue list by 1 when popping an element, there is no need to update the front variable as the entire size of our queue is reduced by 1. 
        # when we should update the front variable is, when the array doesn't shorten but an None/Null value is replacing the front value. Aka when the array size is static. 
        # Likewise, we got no need to use rear varaible as well as just using len(q) will produce the same results. But we are doing this so that when implementating this 
        # in other langauges like C/C++, it'll be easier. But Knowing this, we can optimize the queue class even further! Try to figure that out!!!

        print("Dequeued Item and shifted the Queue forward")
        return val
    else:
        raise queueError("Can't Dequeue; The Q is empty")

`
                }</code>
            </pre>
            <p>
                This function removes an element from the queue. Since it removes from the start, the way the removal work is a bit different.
            </p>
            <p>
                If the queue is <b>not empty</b>:
            </p>
            <ol style={{paddingLeft:"20px"}}>
                <li><code>if self.front == self.rear :</code> when we are removing the last element of the queue, we want to make sure we update the <code>front</code> and <code>rear</code> variable accordingly (change to -1). This conditional block checks it for us. </li>
                <li><code>val = self.q.pop(0)</code> we use the <code>val</code> to contain the first element that we pop from the <code>q</code> array. We will eventually return the <code>val</code>.</li>
            </ol>
            <p>
                If the queue is empty, the function will raise an error instead.
            </p>
            <h2>5. Peek</h2>
            <pre>
                <code className="language-python">{
`
def Peek(self):
if not self.CheckEmpty():
    return self.q[self.front]
else:
    queueError("The queue is empty!")

`
                }</code>
            </pre>
            <p>
                Here, we're just looking at the current first element in our queue
            </p>
            <h2>Complete Class Implementation</h2>
            <pre>
                <code className="language-python">{
`
class queueError(Exception):
    # to handle errors in the class below
    pass

class QUEUE():
    def __init__(self,limit):
        self.q=[]
        self.limit = limit
        self.front = -1
        self.rear = -1
    
    def CheckEmpty(self):
        return len(self.q) == 0
    
    def CheckFull(self):
        return len(self.q) == self.limit
    
    def EnQ(self,item):
        if not self.CheckFull():
            if(self.CheckEmpty()):
                self.front = 0
            self.q.append(item)
            self.rear += 1
            print(f"Enqueued Item: %s at rear position: %s"%(item,str(self.rear)))
        else:
             raise queueError("Can't Enqueue; The Q is full")
         
    def DeQ(self):
        if not self.CheckEmpty():
            if(self.front == self.rear):
                self.front , self.rear = -1,-1
            val = self.q.pop(0)
            print("Dequeued Item and shifted the Queue forward")
            return val
        else:
            raise queueError("Can't Dequeue; The Q is empty")
        
    def Peek(self): 
        if not self.CheckEmpty():
            return self.q[self.front]
        else:
            queueError("The queue is empty!")
              
    #The below three function are just helper functions which will makes our understanding easier. 
    def __str__(self):
        out = " <- ".join(str(i) for i in self.q)
        return out
    
    def __getitem__(self, index):
        return self.q[index]
    
    def __contains__(self, key):
        if key in self.q:
            return True
        else:
            return False

`
                }</code>
            </pre>
            <p>
                The class above is the complete implementation of the Queue Data Structure in Python. We'll see the explain usecase of this class in the next lesson!
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