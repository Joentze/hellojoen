import React from 'react'
import HeroLayout from '../hero/HeroLayout'
import FeedbackHeroLayout from '../hero/FeedbackHeroLayout'
import NavBar from '../nav/NavBar'
import { postFeedback } from '../../api/notionRestHelpers'
const HomePage = (): React.ReactElement => {
  const postMessage = async (): Promise<void> => {
    const response = await postFeedback({
      name: 'test',
      email: 'email',
      feedback: 'feedback'
    })
    console.log(response)
  }
  return <><NavBar/><FeedbackHeroLayout engageBtnFn={postMessage}/></>
}
export default HomePage
