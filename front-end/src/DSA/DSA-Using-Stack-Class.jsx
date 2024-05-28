import { useState, useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAUsingStackClass({setOverviewMode,toggleFinished,changeToLesson}){
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
                Now Let's Use The Stack Class!
            </h1>
            <p>
                Let's create the stack 
            </p>
            <pre>
                <code className="language-python">{
`
li = list("Hello")
stack = STACK(len(li))
print(stack.limit) 

`
                }</code>
            </pre>
            <p>
                Note that the <code>list()</code> function creates an array of characters. It returns <code>['H','e','l','l','o']</code>
            </p>
            <p>
                If the class is written correctly, the result of <code>print(stack.limit)</code> should be 5, just as shown below:
            </p>
            <pre>
                <code>{
`
5

`
                }</code>
            </pre>
            <p>
                Now, we are going to store the characters inside the li array to our stack.
            </p>
            <pre>
                <code className="language-python">{
`
for i in li: 
    stack.Push(i)
print(stack)

`
                }</code>
                <br />
                <code className="language-console">{
`
Pushed Item H; Top-Position now: 0
Pushed Item e; Top-Position now: 1
Pushed Item l; Top-Position now: 2
Pushed Item l; Top-Position now: 3
Pushed Item o; Top-Position now: 4

`
                }</code>
            </pre>
            <p>
                And then let's check it:
            </p>
            <pre>
                <code className="language-python">{
`
print(stack)
if 'l' in stack:
    print("Yes")

`
                }</code>
                <br />
                <code className="language-console">{
`
o
l
l
e
H
Yes

`
                }</code>
            </pre>
            <p>
                As you can see, the latest character is at the top and the first character (i.e H) is at the bottom.
            </p>
            <p>
                Note, you can display a subset of the stack without removing them like this!
            </p>
            <pre>
                <code className="language-python">{
`
print(stack[2:])

`
                }</code>
                <br />
                <code className="language-console">{
`
['l', 'e', 'H']

`
                }</code>
            </pre>
            <p>
                Since our stack should be full now, lets check if it's full and then see the top element. Maybe, we can try to push one more element into the stack as well!
            </p>
            <pre>
                <code className="language-python">{
`
if stack.CheckFull():
    print('The stack is Full!')
    print(f'The top eleement is! {stack.Peek()}')
    print("Now, about to push more elements into a full stack, let's see what happens")
    stack.Push('o')
else:
    print('The stack is not Full!')

`
                }</code>
                <br />
                <code className="language-console">{
`
The stack is Full!
The top eleement is! o
Now, about to push more elements into a full stack, let's see what happens

---------------------------------------------------------------------------
stackError                                Traceback (most recent call last)
Cell In[4], line 6
      4     print(f'The top eleement is! {stack.Peek()}')
      5     print("Now, about to push more elements into a full stack, let's see what happens")
----> 6     stack.Push('o')
      7 else:
      8     print('The stack is not Full!')

Cell In[1], line 35
     33     print(f"Pushed Item %s; Top-Position now: %d"%(str(item),self.top)) 
     34 else:
---> 35     raise stackError("Can't push; The Stack is full")

stackError: Can't push; The Stack is full

`
                }</code>
            </pre>
            <p>
                Now let's try to empty out the stack while we display the contents of the stack as we remove them:
            </p>
            <pre>
                <code className="language-python">{
`
val = []
while stack.top > -1:
    val.append(stack.Pop())
print(f'This was the stack : {val}')

`
                }</code>
                <br />
                <code className="language-console">{
`
Popped Item from Stack! Top-Position now: 3
Popped Item from Stack! Top-Position now: 2
Popped Item from Stack! Top-Position now: 1
Popped Item from Stack! Top-Position now: 0
Popped Item from Stack! Top-Position now: -1
This was the stack : ['o', 'l', 'l', 'e', 'H']

`
                }</code>
            </pre>
            <p>
                Now that the stack is empty, lets make sure and then try to pop more elements. 
            </p>
            <pre>
                <code className="language-python">{
`
if stack.CheckEmpty():
    print("The stack is empty!")
    print("Let's try to pop for an empty stack")
    stack.Pop()
else:
    print("The stack is not empty!")

`
                }</code>
                <br />
                <code className="language-console">{
`
The stack is empty!
Let's try to pop for an empty stack

---------------------------------------------------------------------------
stackError                                Traceback (most recent call last)
Cell In[6], line 5
      3     print("The stack is empty!")
      4     print("Let's try to pop for an empty stack")
----> 5     stack.Pop()
      6 else:
      7     print("The stack is not empty!")

Cell In[1], line 39
     37 def Pop(self):
     38     if self.CheckEmpty():
---> 39         raise stackError("Can't pop; Empty Stack") 
     40     else:
     41         val = self.stack.pop()

stackError: Can't pop; Empty Stack

`
                }</code>
            </pre>
            <p>
                Note, when implementating this on your own (which you should totally do! Try to understand the code and then try to code it up by using just your own understanding of your class)
            </p>
            <p>
                You can remove the print statements in your implementation to make it look more professional! 
            </p>
            <p>
                Remember to not worry too much! Writing code is a process. There will be errors, but each time you found a way to fix it, you're getting better. So, just do it!
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