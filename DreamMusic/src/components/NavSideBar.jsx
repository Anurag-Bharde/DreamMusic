import Logos from './Images/Logo.png'

export function NavSideBar(){
  return(
    <>
    <div className='h-screen bg-grayish '>
  <img src={Logos} className="w-full min-w-10"/>
  </div>
    </>
  )
}