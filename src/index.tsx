import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import ProjectsPage from './components/pages/ProjectsPage'
import FeedbackPage from './components/pages/FeedbackPage'
import AboutPage from './components/pages/AboutPage'
import ProjectsArticlePage from './components/pages/ProjectArticlesPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '/projects/:id',
    element: <ProjectsArticlePage />
  },
  {
    path: '/feedback',
    element: <FeedbackPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/about/:id',
    element: <ProjectsArticlePage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
