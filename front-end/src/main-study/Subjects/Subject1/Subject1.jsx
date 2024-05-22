import { useState, useEffect } from "react"
import Lesson1 from "./Lesson1";

function Subject1({setIsOverview}){
    const [lessonPage,setLessonPage] = useState(0);
    // 0 = First Lesson
    // 1 = Second Lesson
    const [lessonPages,setLessonPages] = useState([
        {"name":"Lesson 1","finished":false,"component":<Lesson1 toggleLessonFinished={toggleLessonFinished}/>},
        {"name":"Lesson 2","finished":false,"component":<h1>Lesson 2</h1>},
    ]);
    const [pageUpdater,setPageUpdater] = useState(0);

    function changeLessonPages(index,name,finished,component){
        let theArray = lessonPages;
        lessonPages[index]["name"] = name;
        lessonPages[index]["finished"] = finished;
        lessonPages[index]["component"] = component;
        setLessonPages(theArray)
    }

    function toggleLessonFinished(key){
        console.log(lessonPages[key]["finished"])
        if (lessonPages[key]["finished"]) {
            changeLessonPages(key,lessonPages[key]["name"],false,lessonPages[key]["component"])
        } else {
            changeLessonPages(key,lessonPages[key]["name"],true,lessonPages[key]["component"])
        }
        setPageUpdater(pageUpdater + 1)
    }

    function LessonMenu(){
        return(
            <div id="lesson-menu">
                <LessonButtonList />
            </div>
        )
    }

    function LessonButtonList(){
        let list = lessonPages.map((pages,key)=>
            <div className="lesson-select" key={key}>
                <div className="lesson-button-wrapper">
                    <button onClick={()=>{setLessonPage(key)}} className={`${lessonPage == key?"lesson-button selected-lesson":"lesson-button"} ${lessonPages[key]["finished"]?"finished-lesson":"not-finished"}`}></button>
                    {key + 1 == lessonPages.length?<></>:<hr className={lessonPages[key]["finished"]?`hr-vert-line-finished`:`hr-vert-line`}/>}
                </div>
                <div>
                    <h2>{pages["name"]}</h2>
                    <button onClick={()=>{toggleLessonFinished(key)}}>Finished</button>
                </div>
            </div>
        )
        return(list)
    }

    function LessonContent({lessonPage}){
        return(
            <div id="lesson-content">
                {lessonPages[lessonPage]["component"]}
            </div>
        )
    }

    return(<>
        <LessonMenu />
        <LessonContent lessonPage={lessonPage}/>
    </>)
}

export default Subject1