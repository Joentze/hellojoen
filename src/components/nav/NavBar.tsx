import React from 'react'
import {
  IoInformationCircleSharp,
  IoNewspaperSharp,
  IoChatbox
} from 'react-icons/io5'
import { ReactComponent as NotionCharIcon } from '../NotionCharIcon.svg'
import { Link } from 'react-router-dom'

const NavBar = (): React.ReactElement => {
  return (
    <div className="border border-b-1 w-full h-20 top-0 left-0 md:pl-20 flex flex-row p-4 gap-2">
      <button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
        <Link to={'/'}>
          <NotionCharIcon />
        </Link>
      </button>
      <div className="flex-grow h-fit flex flex-row gap-2">
        <div className="flex-grow"></div>
        <button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
          <Link to={'/projects'}>
            <IoNewspaperSharp className="m-auto text-slate-700 w-6 h-6" />
          </Link>
        </button>
        <button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
          <IoInformationCircleSharp className="m-auto text-slate-700 w-6 h-6" />
        </button>
        <button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
          <IoChatbox className="m-auto text-slate-700 w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default NavBar
