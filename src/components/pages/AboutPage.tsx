import React from 'react'
import ExperienceHeroLayout from '../hero/ExperienceHeroLayout'
import NavBar from '../nav/NavBar'
const HomePage = (): React.ReactElement => {
  return <><NavBar/><ExperienceHeroLayout connectLink='/feedback' engageLink='/projects'/></>
}
export default HomePage
