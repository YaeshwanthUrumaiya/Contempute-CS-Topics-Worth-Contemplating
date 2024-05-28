import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAStackImplementation({setOverviewMode,toggleFinished,changeToLesson}){
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
                 Stack Implementation
            </h1>
            <p>
                The examples that will be written in this lesson would be using Python. However, as long as you have an experience with programming languages that are <b>object oriented</b>, following the lesson should be fine.
            </p>
            <h2>1. Creating The Stack Class</h2>
            <pre>
                <code className="language-python">{
`
class stackError(Exception):
    pass

class STACK():
    def __init__(self,limit):
        self.stack = []
        self.limit = limit
        self.top = -1

`
                }</code>
            </pre>
            <p>
                The <code> stackError</code> class is used to handle errors that comes from the <code>STACK</code> class.
            </p>
            <ul style={{listStyle:"none"}}>
                <li><code>__init__(self,limit)</code> constructor function that will figure out what is the max limit of elements that the stack can handle. The values for these parameters will be set during object instantiation and will be used by the other functions of this class. </li>
                <li><code>self.stack</code> is the array where we will place our stack. </li>
                <li><code>self.limit</code> is the limit of elements we can have in our stack. </li>
                <li><code>self.top</code> is a counter which keeps track of where the most top element is. </li>
            </ul>
            <h3>How Stack Works Using Array</h3>
            <p>
                On previous lessons, we learned that stack is similar to a stack of books. Adding to the stack means placing the book on top of another book. However, since <code>self.stack</code> is an array, the direction of the stack is tilted. Instead of a stack that is top to bottom, it's right to left instead. When we add an element to the <code>self.stack</code> array, the newest element would be on the most right.
            </p>
            <h3>Why Use <code>self.top</code> Instead Of <code>len(self.stack)</code>?</h3>
            <p>
                There are mainly 2 reasons:
            </p>
            <ol style={{paddingLeft:"20px"}}>
                <li>The <code>len()</code> function does not return the index; It returns the total amount of elements inside the array. Even though you can circumvent the issue by putting -1 every time you call the function, but that's just one extra operation that could be skipped. </li>
                <li>In languages such as C, using top is much more effective than using length. One of the reason being the length of an array in C is fixed upon declaration, which means it will not change depending on the amount of element inside the array. So, learning this easy-to-read Python code helps you understand and implement this class in other Languages. </li>
            </ol>
            <h2>2. Checking If Stack Is Empty</h2>
            <p>
                Inside the <code>STACK</code> class, add the function below:
            </p>
            <pre>
                <code className="language-python">{
`
def CheckEmpty(self):
    return self.top == -1

`    
                }</code>
            </pre>
            <p>
                Because we are checking if stack is <b>empty</b>, we compare the top variable of the stack with -1. The <code>return</code> keyword will return the result of the comparison.
            </p>
            <ul style={{listStyle:"none"}}>
                <li><code>self.top</code> function returns the current amount of elements in our stack array.</li>
                <li><code>==</code> operator returns true if the two value on the left and right is equal. Otherwise, returns false. </li>
            </ul>
            <h2>3. Checking If Stack Is Full</h2>
            <p>
                Inside the <code>STACK</code> class, add the function below:
            </p>
            <pre>
                <code className="language-python">{
`
def CheckFull(self):
    return self.top == self.limit - 1

`
                }</code>
            </pre>
            <p>
                The <code>CheckFull()</code> function checks if the top of the stack is equal to <code>self.limit - 1.</code> We're doing -1 from the self.limt as the top variable tracks the <b>index value</b> of the latest element in our stack.
            </p>
            <h2>4. Adding Items To Stack</h2>
            <p>
                Inside the <code>STACK</code> class, add the function below:
            </p>
            <pre>
                <code className="language-python">{
`
def Push(self,item):
    if not self.CheckFull():
        self.stack.append(item)
        self.top +=1
        print(f"Pushed Item %s; Top-Position now: %d"%(str(item),self.top)) 
    else:
        raise stackError("Can't push; The Stack is full")

`
                }</code>
            </pre>
            <p>
                This function attempts to add (push) an item to the stack. <b>However</b>, we don't want to push an item if the stack is full. if the stack is full, we want to raise an <b>error</b> instead.
            </p>
            <p>
                <code>def Push(self,item):</code> declares a function, which takes <code>item</code> as its parameter. This <code>item</code> is the element we want to add to the stack.
            </p>
            <p>If the stack is <b>not full</b>:</p>
            <ol style={{paddingLeft:"20px"}}>
                <li><code>if not self.CheckFull()</code> calls the <code>self.CheckFull()</code> function to check if the stack is full or not. When the function returns true, it will be reversed by the <code>not</code> keyword to false, and the other way around. Making sure there is space to push the element into our stack.</li>
                <li><code>self.stack.append(item)</code> adds the <code>item</code> to the array using <code>append()</code> built in function provided to insert the element in the rightmost side (i.e end) of the <code>stack</code> array.</li>
                <li><code>self.top += 1</code> keeps track of the <code>top</code> value by using the <code>+= 1</code> operator, which adds <code>top</code> itself by 1.</li>
                <li><code>print()</code> is used for debugging, confirming that the item has been pushed. </li>
            </ol>
            <p>If the stack is <b>full</b>, <code>raise StackError()</code> function creates an error.</p>
            <h2>5. Removing Items From The Stack</h2>
            <p>
                Inside the <code>STACK</code> class, add the function below:
            </p>
            <pre>
                <code className="language-python">{
`
def Pop(self):
    if self.CheckEmpty():
        raise stackError("Can't pop; Empty Stack") 
    else:
        val = self.stack.pop()
        self.top -= 1
        print(f"Popped Item from Stack! Top-Position now: %d"%(self.top))
        return val

`
                }</code>
            </pre>
            <p>
                The <code>Pop()</code> function removes an element from the stack. <b>However</b>, if the stack is empty, we shouldn't let the function remove any more elements from it, because it should not have any elements left.
            </p>
            <p>
                If the stack is empty, the function will raise an error.
            </p>
            <p>
                Otherwise, the function will:
            </p>
            <ol style={{paddingLeft:"20px"}}>
                <li><code>val</code> is a temporary variable that we will use to contain the element that we are going to pop out.</li>
                <li><code>self.stack.pop()</code> is going to return the rightmost "book" (element) from the stack using the <code>pop()</code> built in function, and then deletes the element from the stack.</li>
                <li><code>val = self.stack.pop()</code> means we are setting the value returned by <code>self.stack.pop()</code> to the <code>val</code> variable. </li>
                <li><code>self.top -= 1</code> keeps track of the <code>top</code> using the <code>-=1</code> operator, which subtracts <code>top</code> itself by 1. </li>
                <li><code>print()</code> is used for debugging, confirming that the item has been popped. </li>
                <li><code>return val</code> the <code>return</code> keyword will return <code>val</code>.</li>
            </ol>
            <h2>6. Peeking The Stack</h2>
            <p>
                Inside the <code>STACK</code> class, add the function below:
            </p>
            <pre>
                <code className="language-python">{
`
def Peek(self):
    if not self.CheckEmpty():
        return self.stack[self.top]
    else:
        raise stackError("The stack is empty!")

`
                }</code>
            </pre>
            <p>
                The function looks at the rightmost (i.e top) of the stack and returns the value of the top element. However, if the stack is empty, it will raise an error instead.
            </p>
            <p>
                <code>self.stack[self.top]</code> refers to the <code>self.top</code> index of the <code>stack</code> array. If the top is 2, it will return the 3rd element of the <code>stack</code> array. 
            </p>

            <h2>Complete Class Implementation</h2>
            <p>
                Let us see the complete implementation of <code>STACK</code> class!
            </p>
            <pre>
                <code className="language-python">{
String.raw`
class stackError(Exception):
    # to handle errors in the class below
    pass

class STACK():
    def __init__(self,limit):
        self.stack = []
        self.limit = limit
        self.top = -1
    
    def CheckEmpty(self):  
        return self.top == -1
    
    def CheckFull(self):
        return self.top == self.limit - 1
     
    def Push(self,item):
        if not self.CheckFull(): 
            self.stack.append(item) 
            self.top += 1
            print(f"Pushed Item %s; Top-Position now: %d"%(str(item),self.top)) 
        else: 
            raise stackError("Can't push; The Stack is full")
    
    def Pop(self):
        if self.CheckEmpty(): 
            raise stackError("Can't pop; Empty Stack") 
        else:
            val = self.stack.pop()
            self.top -= 1
            print(f"Popped Item from Stack! Top-Position now: %d"%(self.top))
            return val
            
    def Peek(self): 
        if not self.CheckEmpty():
            return self.stack[self.top]
        else:
            raise stackError("The stack is empty!")
            
    #The below three function are just helper functions which will makes our understanding easier. 
    def __str__(self):
        out = "\n".join(str(i) for i in self.stack[::-1])
        return out
    
    def __getitem__(self, index):
        return self.stack[::-1][index]
    
    def __contains__(self, key):
        if key in self.stack:
            return True
        else:
            return False
`
                }</code>
            </pre>
            <p>
                The class above is the complete implementation of the Stack Data Structure in Python. We'll see the explain usecase of this class in the next lesson!
            </p>

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