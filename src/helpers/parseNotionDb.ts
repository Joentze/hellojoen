
export interface NotionResponse {
  data: { results: object[] }
}
export interface ParsePageTagsReturnType {
  content: PagePreviewAttributes[]
}

export interface FileAttributes {
  expiry_time: string
  url: string
}

export interface File {
  file: FileAttributes
  name: string
  type: string
}

export interface PagePreviewAttributes {

  title: string
  date: string
  text: string
  tags: object[]
  id: string
  files: File[]
}

export interface IPageContent {
  type: string
  text: string
  url: string
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
        files: []
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

export const parsePageContent = (response: any): IPageContent[] => {
  const returnPageContent: IPageContent[] = []
  const data = response.data
  const results = data.results
  results.forEach((item: any) => {
    const blockType = item.type
    const content = blockType !== 'image' ? item[blockType].rich_text : item[blockType].file.url
    let text = ''
    if (blockType !== 'image') {
      content.forEach((line: any) => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        text += line.plain_text
      })
      returnPageContent.push({
        type: blockType,
        text,
        url: ''
      })
    } else {
      returnPageContent.push({
        type: blockType,
        url: content,
        text: ''
      })
    }
  })
  return returnPageContent
}
