import React from 'react'
import { Link } from 'react-router-dom'
interface IProjectCard {
  title: string
  description: string
  link: string
  image: string
  postDate?: string
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  link,
  postDate,
  image
}): React.ReactElement => (
  <Link to={link}>
    <div className="shadow-lg w-full rounded-lg border-2 border-slate-500 backdrop-blur-lg bg-white/50  h-28 flex flex-row m-6 select-none overflow-hidden m-auto hover:bg-white ease-in duration-100 active:bg-slate-100">
      <div className="w-32 h-full bg-black">
        <img className="object-cover h-full w-full" src={image} />
      </div>
      <div className="text-left w-full p-2 px-4 h-full border-l-2 border-slate-500">
        <div className="flex flex-row">
          <p className="font-bold text-xl text-slate-800 flex-grow">{title}</p>
          <p className="text-sm text-slate-400">{postDate}</p>
        </div>
        <p className="text-slate-600 line-clamp-2 justify">{description}</p>
      </div>
    </div>
  </Link>
)
export default ProjectCard
