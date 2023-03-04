import React, { useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ProjectCard from '../card/ProjectCard'
import { PagePreviewAttributes, parsePageTags } from '../../helpers/parseNotionDb'
import { getTimelineList } from '../../api/notionRestHelpers'
interface IExperienceHeroLayout {
  engageBtnFn?: () => void
  engageLink: string
  connectBtnFn?: () => void
  connectLink: string
}

const ExperienceHeroLayout: React.FC<IExperienceHeroLayout> = ({
  engageBtnFn,
  connectBtnFn,
  engageLink,
  connectLink
}): React.ReactElement => {
  const [experiences, setExperiences] = useState<PagePreviewAttributes[]>()
  useEffect(() => {
    const experienceCall = async (): Promise<void> => {
      const experienceList = await getTimelineList()

      const experienceCardContents = parsePageTags(experienceList)
      setExperiences(experienceCardContents.content)
    }
    experienceCall().catch(console.error)
  }, [])
  return (
    <div className="w-full h-screen top-0 left-0 flex select-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-400">
      <div className="flex flex-col md:flex-row w-full h-fit">
        <div className="text-left w-full p-10 pb-32 md:pt-56 md:px-24 px-8">
          <p className="text-[50px] md:text-[100px] font-bold text-slate-800">
            Experiences.
          </p>
          <p className="text-lg text-slate-600 line-clamp-4 -mt-2">
          As an Aspiring <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
            Software Engineer</u>{' '}, I am always eager to take on new challenges and expand my knowledge.
            My passion for creating drives me to continuously improve and innovate in my work.
          </p>

        </div>
        <div className="w-full flex h-72 md:h-screen">
        <div className="w-full flex h-96 md:h-screen px-8 overflow-y-scroll scrollbar-style-none">
          <div className="flex flex-col m-auto gap-4 w-full">
            {experiences !== undefined
              ? (
                <>
                  {experiences?.map((item) => (
                    <ProjectCard
                      key={`key_${item.title}`}
                      title={item.title}
                      postDate={''}
                      description={item.text}
                      link={`/about/${item.id}`}
                      image={item.files[0]?.file.url}
                      tag={item.tags[0].name}
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
    </div>
  )
}

export default ExperienceHeroLayout
