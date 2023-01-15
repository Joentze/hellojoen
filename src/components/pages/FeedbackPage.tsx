import React from 'react'
import HeroLayout from '../hero/HeroLayout'
import FeedbackHeroLayout from '../hero/FeedbackHeroLayout'
import NavBar from '../nav/NavBar'
const HomePage = (): React.ReactElement => {
  return <><NavBar/><FeedbackHeroLayout/></>
}
export default HomePage
