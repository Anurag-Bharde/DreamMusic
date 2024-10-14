import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/SIdeBar'
import { NavSideBar } from './components/NavSideBar'
import { MainBar } from './components/MainBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-20'>
      <div className='col-span-4'>{<NavSideBar />}</div>
      <div className='col-span-12 bg-gradient-to-b from-dark-red to-black'>{<MainBar />}</div>
      <div className='col-span-4 h-screen  bg-gradient-to-b from-black-red to-black'>{<SideBar />}</div>
      </div>
    </>
  )
}

export default App
