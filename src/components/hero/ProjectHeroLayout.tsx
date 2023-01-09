import React from 'react'
import { IoFilter } from 'react-icons/io5'
interface IHeroLayout {
  engageBtnFn?: () => void
  connectBtnFn?: () => void
}

const HeroLayout: React.FC<IHeroLayout> = ({ engageBtnFn, connectBtnFn }): React.ReactElement => {
  return <div className='w-full h-screen top-0 left-0 flex select-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-400'>
    <div className="flex flex-col md:flex-row w-full h-fit">
      <div className='text-left w-full p-10 md:pt-56 md:px-24 px-8'>
        <p className='text-[70px] md:text-[100px] font-bold text-slate-800'>Projects.</p>
        <p className='text-lg text-slate-600 line-clamp-4 -mt-2'>
        These are my escapades. They range anywhere from <u className='decoration-4 hover:decoration-2 ease-in-out duration-200'>Python</u> scripts, <u className='decoration-4 hover:decoration-2 ease-in-out duration-200'>APIs</u> to my penned down <u className='decoration-4 hover:decoration-2 ease-in-out duration-200'>thoughts.</u> I hope you enjoy exploring as much as I did creating them. If {"you'd"} like to collaborate with me do leave a comment here!
          {/* Welcome to my portfolio site, my name is <u className='decoration-4 hover:decoration-2 ease-in-out duration-200'>Joen.</u> Join me as I document my technical escapades and pen down my perspective of the world around me. I hope that you will find my adventures engaging. */}
        </p>
        <div className='w-full flex flex-row gap-2 mt-10 '>
          <input
            className='flex-grow border border-2 border-slate-500 h-12 rounded-lg w-full gap-4 mb-20 p-2 focus:border-slate-800 shadow-lg'
            placeholder='Search My Projects (i.e Python)'
          />
          <button className='w-12 ease-in duration-100 active:text-slate-300 active:bg-slate-700 shadow shadow-md hover:shadow-lg bg-slate-800 text-slate-100 h-12 font-bold rounded-lg'><IoFilter className='m-auto w-full text-slate-200'/></button>
        </div>
      </div>
      <div className='w-full flex h-96 md:h-1/4'>

      </div>
    </div>
  </div>
}

export default HeroLayout
