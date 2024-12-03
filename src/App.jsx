import './App.css'
import Li from './components/Li'
import Header from './components/Header'  
import React from 'react'


function App() {
  return (
    <React.Fragment>
    <Header />

    <ul>
    <Li  name="Agbaire" job="Software Engineer" email="anthonyagbaire@gmail.com" />
  </ul>
  
    </React.Fragment>
    
  )
  
  
 
  
}

export default App
