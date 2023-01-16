
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
  return { content: pagesTags }
}
