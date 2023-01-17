import { useParams } from 'react-router-dom'
import React from 'react'
import NavBar from '../nav/NavBar'

const ProjectArticlesPage = (): React.ReactElement => {
  const { id } = useParams()
  return <div>
    <NavBar/>
    <h1>{id}</h1>
  </div>
}

export default ProjectArticlesPage
