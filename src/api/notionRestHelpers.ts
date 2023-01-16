import axios from 'axios'
import { NotionResponse } from '../helpers/parseNotionDb'

const URL = (): string => { return process.env.REACT_APP_NOTION_API_URL === undefined ? '' : process.env.REACT_APP_NOTION_API_URL }
const DB_ID = (): string => { return process.env.REACT_APP_NOTION_DB_ID === undefined ? '' : process.env.REACT_APP_NOTION_DB_ID }

export const getProjectList = async (): Promise<NotionResponse> => {
  const response = await axios.get(`${URL()}/db/${DB_ID()}`)
  return response
}

export const getPageContent = async (pageId: string): Promise<object> => {
  const response = await axios.get(`${URL()}/page/${pageId}`)
  return response
}
