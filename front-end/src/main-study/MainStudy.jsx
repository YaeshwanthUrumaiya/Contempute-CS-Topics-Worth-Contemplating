import { useState, useEffect } from "react"
import Subject1 from "./Subjects/Subject1/Subject1";

function MainStudy(){
    const [isOverview,setIsOverview] = useState(true);
    const [subjectPage,setSubjectPage] = useState(0);

    let subjectPages = [
        {
            "name":"Subject1",
            "description":"",
            "component":<Subject1 setIsOverview={setIsOverview}/>
        },
        {
            "name":"Subject2",
            "description":"",
            "component":<h1>Subject 2</h1>
        },
    ]

    function StudyOverview(){
        return(<>
            <div id="study-description">
                <h1>Main Study</h1>
                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet, itaque excepturi ab porro, delectus est, beatae cum architecto sint reprehenderit molestias sed laborum dolor! Recusandae libero tempore placeat doloribus.</p>
                <button onClick={()=>{setIsOverview(false)}}>Learn Now</button>
            </div>
            <div id="subject-menu">
                <SubjectButtonList />
            </div>
        </>)
    }

    function SubjectButtonList(){
        let list = subjectPages.map((subject,key)=>
            <div className="subject-tab" key={key}>
                <div>
                    <button className="subject-button" onClick={()=>{setSubjectPage(key);setIsOverview(false)}}></button>
                    {key + 1 == subjectPages.length?<span></span>:<hr />}
                </div>
                <div>
                    <h2>{subject["name"]}</h2>
                    <p>{subject.description}</p>
                    <br />
                </div>
            </div>
        )
        return(list)
    }

    function SubjectPageDisplayer({subjectPage}){
        return(subjectPages[subjectPage]["component"]);
    }

    return(<>
        {
            isOverview? 
            <StudyOverview />:
            <SubjectPageDisplayer subjectPage={subjectPage} />
        }
    </>)
}

export default MainStudy