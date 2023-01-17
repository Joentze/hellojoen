import React, { useState } from 'react'
import FeedbackHeroLayout from '../hero/FeedbackHeroLayout'
import NavBar from '../nav/NavBar'
import { postFeedback } from '../../api/notionRestHelpers'

const HomePage = (): React.ReactElement => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [feedback, setFeedback] = useState<string>('')
  const [isSend, setIsSend] = useState<boolean>(false)
  const postMessage = async (): Promise<void> => {
    if (!([firstName, lastName, email, feedback].every(item => item !== undefined && typeof (item) === 'string'))) return
    const response = await postFeedback({
      name: `${firstName} ${lastName}`,
      email,
      feedback
    })
    if (response) {
      setIsSend(true)
    }
  }
  return <>
    <NavBar/>
    <FeedbackHeroLayout
      isSend={isSend}
      engageBtnFn={postMessage}
      SetFeedback={setFeedback}
      SetFirstName={setFirstName}
      SetEmail={setEmail}
      SetLastName={setLastName}
    />
  </>
}
export default HomePage
