import { useState } from "react";
import Lesson1 from "./Lesson1";

function Subject1(){

    const [currentLesson, setCurrentLesson] = useState(0);

    let lessons = [
        {"name":"Stack", "component": <Lesson1 />, "isFinished":false},
    ]

    function CurrentLesson({value}){
        return(lessons[value]["component"])
    }

    return(<>
        <div id="lesson-menu">
            <div>
                <h2>Subject</h2>
                <hr />
            </div>
            <div id="lesson-list">
                <br />
                {lessons.map((lesson,key)=>
                    <div id="lesson">
                        <div>
                            <button id="lesson-icon" onClick={()=>{setCurrentLesson(key)}}></button>
                            {key + 1 == lessons.length? <br /> : <hr />}
                        </div>
                        <div>
                            <h2>{lesson["name"]}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div id="lesson-content">
            <CurrentLesson value={currentLesson} />
        </div>
    </>)
}

export default Subject1