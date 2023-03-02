import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import NavBar from '../nav/NavBar'
import { getPageContent } from '../../api/notionRestHelpers'

const ProjectArticlesPage = (): React.ReactElement => {
  const { id } = useParams()
  useEffect(() => {
    const getContent = async (): Promise<void> => {
      if (id === undefined) return
      const response = await getPageContent(id)
      console.log(response)
    }
    getContent().catch(console.error)
  }, [])
  return <div>
    <NavBar/>
    <h1>{id}</h1>
  </div>
}

export default ProjectArticlesPage
