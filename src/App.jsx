import React from 'react'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import './App.css'

const App = () => {
  return (
    <div className='format'>
    <SideBar/>  {/* Rendering a Component */}
    <Main/>   
    </div>
  )
}

export default App