import { PagePreviewAttributes } from './parseNotionDb'

export const filterProjects = (
  searchText: string,
  projects: PagePreviewAttributes[]
): PagePreviewAttributes[] => {
  const filtered = projects.filter((project) => {
    const corpus = `${project.title} ${project.text}`.toLowerCase()
    if (corpus.includes(searchText.toLowerCase())) return true
    return false
  })
  return filtered
}
