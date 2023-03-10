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
      <Link to={'/'}>
        <button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
          <NotionCharIcon />
        </button>
      </Link>
      <div className="flex-grow h-fit flex flex-row gap-2">
        <div className="flex-grow"></div>
        <Link to={'/projects'}><button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
          <IoNewspaperSharp className="m-auto text-slate-700 w-6 h-6" />
        </button>
        </Link>
        <Link to={'/about'}>
          <button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
            <IoInformationCircleSharp className="m-auto text-slate-700 w-6 h-6" />
          </button>
        </Link>
        <Link to={'/feedback'}>
          <button className="w-12 h-12 hover:bg-slate-200 ease-in duration-100 rounded-lg active:bg-slate-300">
            <IoChatbox className="m-auto text-slate-700 w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
