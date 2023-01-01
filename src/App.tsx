import React from 'react'
import './App.css'
import ProjectCard from './components/card/ProjectCard'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  return (
    <div className="App">
      <ProjectCard title="title" description='hello world hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world' image="hello" link="hello"/>
    </div>
  )
}

export default App
