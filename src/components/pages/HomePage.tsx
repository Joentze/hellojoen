import React from 'react'
import HeroLayout from '../hero/HeroLayout'
import NavBar from '../nav/NavBar'

const HomePage = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <HeroLayout connectLink="/feedback" engageLink="/projects" />
    </>
  )
}
export default HomePage
