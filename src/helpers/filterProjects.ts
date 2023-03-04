import { PagePreviewAttributes } from './parseNotionDb'

export const filterProjects = (
  searchText: string,
  projects: PagePreviewAttributes[]
): PagePreviewAttributes[] => {
  const filtered = projects.filter((project: PagePreviewAttributes) => {
    const corpus = `${project.title} ${project.text} ${project.tags[0].name}`.toLowerCase()
    if (corpus.includes(searchText.toLowerCase())) return true
    return false
  })
  return filtered
}
