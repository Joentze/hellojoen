
export interface NotionResponse {
  data: { results: object[] }
}
export interface ParsePageTagsReturnType {
  content: PagePreviewAttributes[]
}
export interface PagePreviewAttributes {
  title: string
  date: string
  text: string
  tags: object[]
  id: string
  files: object[]
}

export const parsePageTags = (notionResponse: NotionResponse): ParsePageTagsReturnType => {
  if (notionResponse === undefined) {
    return {
      content: [{
        title: '',
        date: '',
        text: '',
        tags: [{}],
        id: '',
        files: [{}]
      }]
    }
  }

  const pagesTags: PagePreviewAttributes[] = []

  const { results } = notionResponse.data
  results.forEach((item: any) => {
    const { Name, Date, 'Files & media': Files, Tags, Text } = item.properties
    if (Name.title[0] !== undefined) {
      pagesTags.push({
        id: item.id,
        title: Name.title[0].plain_text,
        date: Date.date.start,
        files: Files.files,
        text: Text.rich_text[0].plain_text,
        tags: Tags.multi_select
      })
    }
  })
  pagesTags.sort((a, b) => sortDate(a.date, b.date))
  return { content: pagesTags.reverse() }
}

const sortDate = (a: string, b: string): number => {
  const unixA = new Date(a).getTime() / 1000
  const unixB = new Date(b).getTime() / 1000
  if (unixA > unixB) return 1
  if (unixA < unixB) return -1
  return 0
}

// const parsePageContent = () => {

// }
