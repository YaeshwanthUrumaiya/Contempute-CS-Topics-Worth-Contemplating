import { useEffect, useContext } from "react";
import { finishedLesson, theActiveLesson } from "./MainStudy";

export default function Lesson1({setOverviewMode,toggleFinished}){
    const activeLesson = useContext(theActiveLesson);
    const finished = useContext(finishedLesson);
    return(<>
        <div id="lesson-content">
            <h1>
                <div id="side-button">
                    <button onClick={()=>{setOverviewMode(true)}}>Back</button>
                </div>
                 Lesson 1
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde atque assumenda quo harum, perspiciatis ipsum obcaecati illo, ipsam ullam doloremque praesentium ratione esse ea provident explicabo iusto repudiandae? Optio.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maxime dolorem enim suscipit porro esse ratione tempora voluptatem numquam, placeat unde quaerat minus nisi voluptates nesciunt earum neque, dolores excepturi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde atque assumenda quo harum, perspiciatis ipsum obcaecati illo, ipsam ullam doloremque praesentium ratione esse ea provident explicabo iusto repudiandae? Optio.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde atque assumenda quo harum, perspiciatis ipsum obcaecati illo, ipsam ullam doloremque praesentium ratione esse ea provident explicabo iusto repudiandae? Optio.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde atque assumenda quo harum, perspiciatis ipsum obcaecati illo, ipsam ullam doloremque praesentium ratione esse ea provident explicabo iusto repudiandae? Optio.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolorem asperiores quas magni quasi, inventore eveniet, quae laudantium sunt alias sed soluta debitis possimus. Explicabo non aut ut voluptate libero? lorem
                <div id="side-button">
                    <button><a href="#lesson-content">Go up</a></button>
                    <button onClick={()=>{toggleFinished(activeLesson);setOverviewMode(true)}}>{finished?"Unfinish":"Finish"}</button>
                </div>
            </p>
            <br />
        </div>
    </>)
}