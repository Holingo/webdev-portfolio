import { useState } from 'react'
import { BackgroundLines } from "@/components/ui/background-lines"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BackgroundLines className="flex items-start justify-center w-full flex-col px-4 min-h-screen">
      <div className='pl-6 md:pl-30 lg:pl-50 space-y-6 py-4 md:py-10 relative z-20 text-left'>
        <span className='font-montserrat text-white mx-auto uppercase text-xl font-small md: text-base tracking-widest'>
          Welcome to my portfolio 👋
        </span>
        <div className="space-y-2">
          <h1 className="font-montserrat bg-clip-text text-transparent text-left text-white text-2xl md:text-4xl lg:text-7xl font-bold">
            Oskar
          </h1>
          <h1 className="font-montserrat text-left text-white text-2xl md:text-4xl lg:text-7xl font-normal">
            Świątek
          </h1>
        </div>
        <p className="max-w-md mx-auto text-sm text-neutral-300 dark:text-neutral-400">
          Software developer by day, Web developer by night, and traffic jam warrior in Cities Skylines whenever I can.
        </p>
      </div>
    </BackgroundLines>
  )
}

export default App
