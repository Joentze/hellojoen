import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import NavBar from '../nav/NavBar'
import { getPageContent } from '../../api/notionRestHelpers'
import { IPageContent, parsePageContent } from '../../helpers/parseNotionDb'

const textStyle = {
  paragraph: '',
  heading_1: 'text-4xl font-bold',
  heading_2: 'text-3xl font-bold',
  heading_3: 'text-2xl font-bold'
}

const ProjectArticlesPage = (): React.ReactElement => {
  const { id } = useParams()
  const [content, setContent] = useState<IPageContent[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  useEffect(() => {
    const getContent = async (): Promise<void> => {
      if (id === undefined) return
      const response = await getPageContent(id)
      const parseResponse = parsePageContent(response)
      setContent(parseResponse)
      setLoaded(true)
    }
    getContent().catch(console.error)
  }, [])
  return <div className='text-slate-800'>
    <NavBar/>
    <div className='w-full h-fit flex p-12'>
    <div className='w-full md:w-1/2 h-fit m-auto justify'>
      {loaded
        ? (
<>
    {content.map(item => {
      if (item.type !== 'image') {
        const style: string = textStyle[item.type as keyof typeof textStyle]
        return (item.text === '') ? (<><br></br><br></br></>) : (<p key={item.text} className={`${style}`}>{item.text}</p>)
      } else {
        return <img src={item.url} key={item.url} className="m-auto"/>
      }
    })}
    </>
          )
        : (<div className='w-full h-fit flex flex-col animate-pulse gap-6'>
          <div className='w-full rounded-lg bg-slate-200 h-32'></div>
          <div className='w-full rounded-lg bg-slate-200 h-12'></div>
          <div className='w-full flex flex-row'><div className='w-56 rounded-lg bg-slate-200 h-12'>
            </div><div className='grow'></div></div>
            <div className='w-full rounded-lg bg-slate-200 h-12'></div>
            <div className='w-full flex flex-row'><div className='grow bg-slate-200 h-12'>
              <div className='w-56 rounded-lg bg-slate-200 h-12'>
            </div></div></div>
        </div>
          )
    }</div>
    </div>
  </div>
}

export default ProjectArticlesPage
