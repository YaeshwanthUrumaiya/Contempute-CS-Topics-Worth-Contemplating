import { useState, useEffect, createContext } from 'react'
import './App.css'
import settingsIcon from './assets/Settings.png'
import profileIcon from './assets/Profile.png'
import Studies from './Studies';
import Settings from './Settings/Settings';
import { getData, storeData } from './script';

export const theDarkMode = createContext(null);
export const isDarkmode = createContext(null);

function App() {
  const [page, setPage] = useState(0);
  // page 0 is studies page
  // page 1 is settings page
  const [studyPage, setStudyPage] = useState(0);
  // If the studyPage is:
  // 0: DSA
  // 1: SUB
  const [darkMode,setDarkMode] = useState(getData("darkMode"));

  function togglePage(){
    if (page == 0) {
      setPage(1)
    } else {
      setPage(0)
    }
  }

  function switchDarkMode(){
    if (!darkMode) {
      setDarkMode(true);
      storeData("darkMode",true)
      document.getElementById('body').classList.remove("light-mode")
    } else {
      setDarkMode(false);
      storeData("darkMode",false)
      document.getElementById('body').classList.add("light-mode")
    }
  }

  function Header(){
    return(
      <header>
        <h1>Title</h1>
        <input id='search-bar' type="text" placeholder='Search'/>
        <button id='settings-button' onClick={togglePage}> <div><img src={settingsIcon} alt="settings" /></div>  </button>
        <button id='profile-button'> <div><img src={profileIcon} alt="profile" /></div>  </button>
      </header>
    )
  }

  useEffect(()=>{
    setDarkMode(getData("darkMode"));
    darkMode?
    document.getElementById('body').classList.remove("light-mode"):
    document.getElementById('body').classList.add("light-mode")
  },[])

  return (<div id='body' className='dark-mode '>
    <Header />
    <theDarkMode.Provider value={switchDarkMode}>
      <isDarkmode.Provider value={darkMode}>
        {
          page == 0?
          <Studies studyPage={studyPage} setStudyPage={setStudyPage}/>:
          <Settings />
        }
      </isDarkmode.Provider>
    </theDarkMode.Provider>
    
  </div>)
}

export default App
