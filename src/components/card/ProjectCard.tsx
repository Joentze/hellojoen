import React from 'react'

interface IProjectCard {
  title: string
  description: string
  link: string
  image: string
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  link,
  image
}): React.ReactElement => {
  return (
    <div className="w-full md:w-1/3 bg-white rounded-lg border border-slate-400 h-28 flex flex-row m-6 select-none overflow-hidden m-auto active:border-2">
      <div className='w-32 h-full bg-black'>
          <img className='object-cover h-full' src={image}/>
      </div>
      <div className='text-left w-full p-2 pl-4 h-max'>
          <p className='font-bold text-xl text-slate-600'>{title}</p>
          <p className='text-slate-500 line-clamp-2 justify'>{description}</p>
      </div>
    </div>
  )
}
export default ProjectCard
