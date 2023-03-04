import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as HeroIcon } from '../HeroIcon.svg'
interface IHeroLayout {
  engageBtnFn?: () => void
  engageLink: string
  connectBtnFn?: () => void
  connectLink: string
}

const HeroLayout: React.FC<IHeroLayout> = ({
  engageBtnFn,
  connectBtnFn,
  engageLink,
  connectLink
}): React.ReactElement => {
  return (
    <div className="w-full h-screen top-0 left-0 flex select-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-400">
      <div className="flex flex-col-reverse md:flex-row w-full h-fit">
        <div className="text-left w-full p-10 md:pt-56 md:px-24 px-8">
          <p className="text-[70px] md:text-[100px] font-bold text-slate-800">
            Hello.
          </p>
          <p className="text-lg text-slate-600 line-clamp-4 -mt-2">
            Welcome to my portfolio site, my name is{' '}
            <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
              Joen.
            </u>{' '}
            Join me as I document my technical escapades and pen down my
            perspective of the world around me. I hope that you will find my
            adventures engaging.
          </p>
          <div className="flex flex-row w-full mt-10 gap-4 mb-20">
            <Link to={engageLink}>
              <button
                className="ease-in duration-100 active:text-slate-300 active:bg-slate-700 shadow shadow-md hover:shadow-lg w-32 bg-slate-800 text-slate-100 h-12 font-bold rounded-lg"
                onClick={engageBtnFn}
              >
                Explore
              </button>
            </Link>
            <Link to={connectLink}>
              <button
                className="ease-in duration-100 active:text-slate-300 active:bg-slate-700 shadow shadow-md hover:shadow-lg w-32 border border-slate-800 text-slate-800 border-2 h-12 font-bold rounded-lg hover:bg-slate-800 hover:text-slate-100"
                onClick={connectBtnFn}
              >
                Connect
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex h-72 md:h-screen">
          <div className="md:w-full md:h-full m-auto pt-10">
            <div className="scale-100 md:scale-75 mt-10">
              <HeroIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLayout
