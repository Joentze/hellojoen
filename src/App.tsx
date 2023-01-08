import React from 'react'
import './App.css'
// import ProjectCard from './components/card/ProjectCard'
// import HeroLayout from './components/hero/HeroLayout'
// import NavBar from './components/nav/NavBar'

import ProjectsPage from './components/pages/ProjectsPage'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  return (
    <div className="App">
      <div className='flex flex-col'>
      {/* <HomePage/> */}
      <ProjectsPage/>
      </div>
      {/* <ProjectCard title="title" description='hello world hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world' image="hello" link="hello"/> */}
    </div>
  )
}

export default App
