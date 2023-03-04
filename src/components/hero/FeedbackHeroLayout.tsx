import React from 'react'
// import ProjectCard from '../card/ProjectCard'
interface IHeroLayout {
  isSend: boolean
  engageBtnFn?: () => Promise<void>
  connectBtnFn?: () => Promise<void>
  SetFirstName: React.Dispatch<React.SetStateAction<string>>
  SetLastName: React.Dispatch<React.SetStateAction<string>>
  SetEmail: React.Dispatch<React.SetStateAction<string>>
  SetFeedback: React.Dispatch<React.SetStateAction<string>>
}

const FeedbackHeroLayout: React.FC<IHeroLayout> = ({
  isSend,
  engageBtnFn,
  connectBtnFn,
  SetFirstName,
  SetLastName,
  SetEmail,
  SetFeedback
}): React.ReactElement => {
  return (
    <div className="w-full h-screen top-0 left-0 flex select-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-400">
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="text-left w-full px-10 pt-10 md:pt-56 md:px-24 px-8">
          <p className="text-[70px] md:text-[100px] font-bold text-slate-800 leading-[68px] md:leading-normal mb-8">
            {"Let's"} Connect.
          </p>
          <p className="text-lg text-slate-600 line-clamp-6 -mt-2">
            Drop me a comment or feedback if{" you'd "}like to work together on
            something or have any thoughts about a project I did! Alternatively,
            you can also find me on{' '}
            <a href="https://www.linkedin.com/in/joen-tan-6b57611b9/">
              <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
                LinkedIn
              </u>
            </a>{' '}
            or <a href="https://github.com/joentze">
              <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
                Github
              </u>
            </a>
            {/* Welcome to my portfolio site, my name is <u className='decoration-4 hover:decoration-2 ease-in-out duration-200'>Joen.</u> Join me as I document my technical escapades and pen down my perspective of the world around me. I hope that you will find my adventures engaging. */}
          </p>
        </div>
        <div className="w-full flex h-96 md:h-screen p-8 overflow-y-scroll scrollbar-style-none pb-40">
          {isSend
            ? (
            <div className="m-auto text-center flex flex-col">
              <p className="text-lg text-slate-600">
                Meanwhile, check out my projects{' '}
                <a href="/projects">
                  <u className="decoration-4 hover:decoration-2 ease-in-out duration-200">
                    here
                  </u>
                </a>
              </p>
            </div>
              )
            : (
            <div className="w-full h-fit m-auto flex flex-col gap-4">
              <div className="m-auto flex flex-row w-full gap-4">
                <input
                  className="flex-grow border border-2 border-slate-500 h-12 rounded-lg w-full gap-4 p-2 focus:border-slate-800 shadow-lg"
                  placeholder="First Name"
                  onChange={(item) => SetFirstName(item.target.value)}
                />
                <input
                  className="flex-grow border border-2 border-slate-500 h-12 rounded-lg w-full gap-4 p-2 focus:border-slate-800 shadow-lg"
                  placeholder="Last Name"
                  onChange={(item) => SetLastName(item.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  className="flex-grow border border-2 border-slate-500 h-12 rounded-lg w-full gap-4 p-2 focus:border-slate-800 shadow-lg"
                  placeholder="E-mail"
                  onChange={(item) => SetEmail(item.target.value)}
                />
                <textarea
                  className="flex-grow border border-2 border-slate-500 h-32 rounded-lg w-full gap-4 p-2 focus:border-slate-800 shadow-lg resize-none"
                  placeholder="Comments"
                  rows={4}
                  onChange={(item) => SetFeedback(item.target.value)}
                />
                <div className="flex flex-row gap-4">
                  <div className="flex-grow" />

                  <button
                    className="ease-in duration-100 active:text-slate-300 active:bg-slate-700 shadow shadow-md hover:shadow-lg w-32 bg-slate-800 text-slate-100 h-12 font-bold rounded-lg"
                    onClick={engageBtnFn}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
              )}
        </div>
      </div>
    </div>
  )
}

export default FeedbackHeroLayout
