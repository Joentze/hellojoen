import axios from 'axios'
import { NotionResponse } from '../helpers/parseNotionDb'

const URL = (): string => { return process.env.REACT_APP_NOTION_API_URL === undefined ? '' : process.env.REACT_APP_NOTION_API_URL }
const DB_ID = (): string => { return process.env.REACT_APP_NOTION_DB_ID === undefined ? '' : process.env.REACT_APP_NOTION_DB_ID }
const FEEDBACK_DB_ID = (): string => { return process.env.REACT_APP_NOTION_FEEDBACK_DB_ID === undefined ? '' : process.env.REACT_APP_NOTION_FEEDBACK_DB_ID }

interface Feedback {
  name: string
  email: string
  feedback: string
}

export const getProjectList = async (): Promise<NotionResponse> => {
  const response = await axios.get(`${URL()}/db/${DB_ID()}`)
  return response
}

export const getPageContent = async (pageId: string): Promise<object> => {
  const response = await axios.get(`${URL()}/page/${pageId}`)
  return response
}

export const postFeedback = async (feedback: Feedback): Promise<object> => {
  console.log(feedback)
  const response = await axios.post(`${URL()}/feedback/${FEEDBACK_DB_ID()}`, feedback)
  return response
}
