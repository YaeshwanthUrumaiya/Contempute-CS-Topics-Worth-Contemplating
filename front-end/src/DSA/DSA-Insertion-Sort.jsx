import { useEffect, useContext, useState } from "react";
import { finishedLesson, theActiveLesson } from "./DSA";
import hljs from "highlight.js";
import '../../src/syntax-highlighter.css'

export default function DSAInsertionSort({setOverviewMode,toggleFinished,changeToLesson}){
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
                Insertion Sort
            </h1>
            <p>
                This is our first sorting algorithm. What this does is it takes an array/list and then sorts to be ascending order.
            </p>
            <p>
                Imagine you are fishing and you have to sort the fishes in length. You pull out the fish from the water one by one, and you have a line of fish in the dock, sorted in length. So, as you pull out the fish, you go the dock, and compare your new fish with the fishes from the docks. You first check the biggest fish, and if your new fish is bigger, then you place the fish in front, if not, you move to the next fish and compare again and again till you place your new fish. This is how exactly how insertion sort works. Your newly inserted element is immediately sorted upon insertion.
            </p>
            <p>
                In any given array. we will go start from the first element and loop through each element by moving forward by one index. we'll call this element 'i'.(This is like the new fish)
            </p>
            <p>
                Each time we move to the next index of element, we will compare this element 'i' with all the elements behind this index (the values behind is like the stash of old fishes, which is already sorted) and then figure out where we should place the element 'i' for the subarray behind index of element 'i' is sorted. So, we start a loop going from index of element 'i' to the starting of the array in reverse.
            </p>
            <p>
                To sum it up, the outer loop will go forward by one element at a day, and then the inner loop will compare elements behind and then place it properly (by comparing behind, the loop has to go backwards) and to be honest, that's about it!
            </p>
            <h2>When Used</h2>
            <p>
                For any given DS that has a sequence of values this method should work. It works best in sequences that aren't already sorted in reverse.  
            </p>
            <p>
                In the best case: The array/list is already sorted and each time you loop forward, you compare the elements behind it and the first element you compare should be lesser, meaning you compare once per iteration. Time complexity -&gt; O(n)
            </p>
            <p>
                In the worse case: The list is in reverse, then you have to use for loop to move all the way forward and use another loop to move all the way backwards. Time Complexity -&gt; O(N<sup>2</sup>);
            </p>
            <pre>
                <code className="language-python">{
`
def insertionSort(arr):
    for i in range(1,len(arr)): #this starts from the 2nd element and then goes till the end. 
        k = arr[i] #This is the value which we're going to swap. 
        j = i - 1 #This is the value just behind the value. 
        while  j >= 0 and arr[j] > k: #Now, we're going to figure where we can place the value of i. 
            #So we're starting from the value behind i and then going backwards till the reach the end of the list or till find the correct location
            #for the ith value. 
            
            #We're using k value instead of using arr[i] because arr[i] could be overwritten. so we storing it somewhere else. 
            arr[j + 1] = arr[j] #This is just nudging the array ahead by one index. because we need to make space for the ith element right? 
            j=j-1 #This will decrease the j value to go low.
        arr[j+1]=k #Now, we found the location at which we have to 
        print(arr)
    return arr
arr = [45, 23, 1, 10, 5, 2]
print(insertionSort(arr))

`
                }</code>
            </pre>
            <pre>
                <code className="language-console">{
`
[23, 45, 1, 10, 5, 2]
[1, 23, 45, 10, 5, 2]
[1, 10, 23, 45, 5, 2]
[1, 5, 10, 23, 45, 2]
[1, 2, 5, 10, 23, 45]
[1, 2, 5, 10, 23, 45]

`
                }</code>
            </pre>
            <h3>Code Explanation Walkthrough:</h3>
            <pre>
                <code className="language-console">{
`
[45, 23, 1, 10, 5, 2]

___
i = 23

j = 45

is 45 > 23? yes, so: [45,45,1,10,5,2]; j = out of array

now updating i value: [23,45,1,10,5,2]
___
i = 1

j = 45

is 45 > 1? yes so: [23,45,45,10,5,2]; j = 23

is 23 > 1? yes so: [23,23,45,10,5,2]; j = out of array

now updating i value: [1, 23, 45, 10, 5, 2]
___
i = 10 

j = 45

is 45 > 10? yes so: [1,23,45,45,5,2]; j = 23

is 23 > 10? yes so: [1,23,23,45,5,2]; j = 1

is i > 10? no so: [1,10,23,45,5,2]
___
`
                }</code>
            </pre>
            <p>                
                Like that, it will go for the other i values, see how the i is increasing while j is decreasing?
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