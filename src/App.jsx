import { useState } from 'react'
import { BackgroundLines } from "@/components/ui/background-lines"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BackgroundLines className="flex flex-col items-start justify-center w-full px-4 min-h-screen">
      <div className="flex flex-row z-1 items-center w-full max-w-3xl mx-auto py-10 gap-x-12">

        <div className='flex-2 pl-6 space-y-6 text-left'>
          <span className='font-montserrat text-white uppercase text-xl tracking-widest'>
            Welcome to my portfolio{" "}
            <span className="inline-block origin-[70%_70%] animate-wave px-4 scale-150">👋</span>
          </span>
          <div className="space-y-2 font-montserrat text-white text-2xl md:text-4xl lg:text-7xl">
            <h1 className="font-bold">
              Oskar
            </h1>
            <h1 className="font-normal">
              Świątek
            </h1>
          </div>
          <p className="max-w-md text-sm text-neutral-300 dark:text-neutral-400">
            Software developer by day, Web developer by night, and traffic jam warrior in Cities Skylines whenever I can.
          </p>
        </div>

        <div className="flex flex-row items-center justify-start gap-x-8 ml-auto">
          <button className="hover:bg-white/10 p-2 rounded-2xl transition">
            <svg className="size-14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"/>
            </svg>
          </button>
          <button className="hover:bg-white/10 p-2 rounded-2xl transition">
            <svg className="size-14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </button>
          <button className="hover:bg-white/10 p-2 rounded-2xl transition">
            <svg className="size-14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>            </svg>
          </button>
        </div>

      </div>
    </BackgroundLines>
  )
}

export default App
