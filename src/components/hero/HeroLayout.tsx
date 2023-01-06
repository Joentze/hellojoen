import React from 'react'

const HeroLayout = (): React.ReactElement => {
  return <div className='w-full h-screen top-0 left-0 flex select-none'>
    <div className="flex flex-col md:flex-row w-full h-fit">
      <div className='text-left w-full p-10 pt-56 md:px-24 px-8'>
      <p className='text-[100px] font-bold text-slate-800'>Hello,</p>
      <p className='text-lg text-slate-600 line-clamp-4 -mt-2'>
      Welcome to my portfolio site, my name is Joen. Join me as I document my technical escapades and pen down my perspective of the world around me. I hope that you will find my adventures engaging.
      </p>
      <div className='flex flex-row w-full mt-10 gap-4 mb-20'>
      <button className='ease-in duration-100 active:text-slate-300 active:bg-slate-700 shadow shadow-md hover:shadow-lg w-32 bg-slate-800 text-slate-100 h-12 font-bold rounded-lg'>Explore</button>
      <button className='ease-in duration-100 active:text-slate-300 active:bg-slate-700 shadow shadow-md hover:shadow-lg w-32 border border-slate-800 text-slate-800 border-2 h-12 font-bold rounded-lg hover:bg-slate-800 hover:text-slate-100'>Engage</button>
      </div>
      </div>
      <div className='w-full bg-slate-800'>

      </div>
    </div>
  </div>
}

export default HeroLayout
