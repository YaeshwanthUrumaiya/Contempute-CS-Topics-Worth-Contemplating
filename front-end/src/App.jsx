import { useState, useEffect } from 'react'
import Header from './Studies/Header';
import Content from './Studies/Content';
import './App.css'

function App() {
  const [pageState,setPageState] = useState(0);
  const [previousPageState,setPreviousPageState] = useState(0);
  
  function setToSetting(){
    if (pageState != 1) {
      setPreviousPageState(pageState);
      setPageState(1);
    } else {
      setPageState(previousPageState);
    }
  }

  return (<div id="body" className='dark-mode'>
      <Header setToSetting={setToSetting}/>
      <Content pageState={pageState}/>
  </div>)
}

export default App
