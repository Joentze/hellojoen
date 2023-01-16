import axios from 'axios'

const url = (): string => { return process.env.REACT_APP_NOTION_DB_URL === undefined ? '' : process.env.REACT_APP_NOTION_DB_URL }

export const getProjectList = async (databaseId: string): Promise<object> => {
  const options = {
    headers: { 'Access-Control-Allow-Origin': '', 'Content-Type': 'json' }
  }
  const response = await axios.get(`${url()}/db/${databaseId}`, options)
  return response
}
