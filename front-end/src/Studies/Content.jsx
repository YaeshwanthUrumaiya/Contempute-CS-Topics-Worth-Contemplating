
import { useState, useEffect } from 'react'
import './Content.css'
import TemplateStudy from './Template-Study/TemplateStudy';

function Content({pageState}){
    const [currentStudy,setCurrentStudy] = useState(0);
    const [update,setUpdate] = useState(0);

    let studies = [
        {"name": "TS","component": <TemplateStudy update={update}/>,"subjects": []},
    ];

    function StudyPage(){
        // Dynamic component that will show study pages depending on currentStudy state.
        function CurrentStudyPage({value}){
            return(
                studies[value]["component"]
            )
        }
        
        return(<div id="study-page">
            {/* Studies menu */}
            <div id='study-menu'>
                {studies.map((theStudy,key)=>
                    <button id={`${key}`} key={key} onClick={()=>{setCurrentStudy(key);setUpdate(update + 1)}}>
                        {`${theStudy["name"]}`}
                    </button>
                )}
            </div>
            {/* Studies */}
            <div id='study-content'>
                <CurrentStudyPage value={currentStudy} />
            </div>
        </div>)
    }

    function SettingsPage(){
        return(<>
            This is the settings page
        </>)
    }

    useEffect(()=>{
        document.getElementById(`${currentStudy}`).classList.toggle("in-focus");
    },[currentStudy])

    return(<main>
        {
            pageState == 0?(<StudyPage />):
            pageState == 1?(<SettingsPage />):
            (<>Nothing.</>)
        }
    </main>)
}

export default Content