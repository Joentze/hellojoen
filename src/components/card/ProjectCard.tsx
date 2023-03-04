import React from 'react'
import { Link } from 'react-router-dom'
interface IProjectCard {
  title: string
  description: string
  link: string
  image: string
  postDate?: string
  tag?: string
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  link,
  postDate,
  image,
  tag
}): React.ReactElement => (
  <Link to={link}>
    <div className="shadow-lg w-full rounded-lg border-2 border-slate-500 backdrop-blur-lg bg-white/50 h-36 flex flex-row m-6 select-none overflow-hidden m-auto hover:bg-white ease-in duration-100 active:bg-slate-100">
      <div className="w-40 h-full bg-black">
        <img className="object-cover h-full w-full" src={image} />
      </div>
      <div className="text-left w-full p-2 px-4 h-full border-l-2 border-slate-500">
        <div className="flex flex-row">
          <p className="font-bold text-xl text-slate-800 flex-grow">{title}</p>

          <p className="text-sm text-slate-400">{postDate}</p>
        </div>
        <div className='bg-slate-300 w-fit px-3 rounded-full text-slate-700 font-bold shadow-inner shadow-slate-100 my-2 mt-3'>{tag}</div>
        <p className="text-slate-600 line-clamp-2 justify">{description}</p>
      </div>
    </div>
  </Link>
)
export default ProjectCard
