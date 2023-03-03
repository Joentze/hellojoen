import React, { useEffect, useState } from 'react'
import { IoArrowDown, IoSearch } from 'react-icons/io5'
import { AiOutlineLoading } from 'react-icons/ai'
import { getProjectList } from '../../api/notionRestHelpers'
import {
  NotionResponse,
  PagePreviewAttributes,
  parsePageTags
} from '../../helpers/parseNotionDb'
import ProjectCard from '../card/ProjectCard'
import { filterProjects } from '../../helpers/filterProjects'
interface IHeroLayout {
  engageBtnFn?: () => void
  connectBtnFn?: () => void
}

const ProjectHeroLayout: React.FC<IHeroLayout> = ({
  engageBtnFn,
  connectBtnFn
}): React.ReactElement => {
  const [projects, setProjects] = useState<PagePreviewAttributes[]>()
  const [shownProjects, setShownProjects] = useState<PagePreviewAttributes[]>()
  const [searchContent, setSearchContent] = useState<string>('')

  const searchProjects = (searchTerm: string): void => {
    if (projects === undefined) return
    const filtered = filterProjects(searchTerm, projects)
    setShownProjects(filtered)
  }

  useEffect(() => {
    const projectCall = async (): Promise<void> => {
      const projectList = await getProjectList()
      const projectCardContents = parsePageTags(projectList)
      console.log(projectCardContents.content)
      setProjects(projectCardContents.content)
      setShownProjects(projectCardContents.content)
    }
    projectCall().catch(console.error)
  }, [])
  return (
    <div className="w-full h-screen top-0 left-0 flex select-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-400">
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="text-left w-full px-10 pt-10 md:pt-56 md:px-24 px-8">
          <p className="text-[70px] md:text-[100px] font-bold text-slate-800">
            Projects.
          </p>
          <p className="text-lg text-slate-600 line-clamp-4 -mt-2">
            These are my escapades. They range anywhere from{' '}
            <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
              Python
            </u>{' '}
            scripts,{' '}
            <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
              APIs
            </u>{' '}
            to my penned down{' '}
            <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
              thoughts.
            </u>{' '}
            I hope you enjoy exploring as much as I did creating them. If{' '}
            {"you'd"} like to collaborate with me do leave a comment here!
            {/* Welcome to my portfolio site, my name is <u className='decoration-4 hover:decoration-2 ease-in-out duration-200'>Joen.</u> Join me as I document my technical escapades and pen down my perspective of the world around me. I hope that you will find my adventures engaging. */}
          </p>
          <div className="w-full flex flex-row gap-2 mt-10 ">
            <input
              className="flex-grow border border-2 hover:border-4 ease-in duration-100 border-slate-500 h-12 rounded-lg w-full gap-4 mb-20 p-2 focus:border-slate-800 shadow-lg"
              placeholder="Search My Projects (i.e Python)"
              onChange={(item) => {
                searchProjects(item.target.value)
              }}
            />
          </div>
        </div>
        <div className="md:invisible m-auto my-4 animate-bounce w-6 h-6 flex flex-row">
          <IoArrowDown className="text-slate-400 w-full h-full" />
        </div>
        <div className="w-full flex h-96 md:h-screen px-8 overflow-y-scroll scrollbar-style-none">
          <div className="flex flex-col m-auto gap-4 w-full">
            {projects != null
              ? (
                <>
                  {shownProjects?.map((item) => (
                    <ProjectCard
                      key={`key_${item.title}`}
                      title={item.title}
                      postDate={item.date}
                      description={item.text}
                      link={`/projects/${item.id}`}
                      image={item.files[0]?.file.url}
                    />
                  ))}
                </>
                )
              : (
                <div className="w-24 h-24 m-auto">
                  <AiOutlineLoading className="animate-spin w-full h-full text-slate-400" />
                </div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectHeroLayout
