import Logos from './Images/Logo.png'
import data from './Data/NavMenu'
import CategoryItem from './CategorySel'

export function NavSideBar(){
  return(
    <>
    <div className='h-screen bg-grayish '>
  <img src={Logos} className="w-4/5 pl-5 pt-4"/>
   
  <div className='p-2'> <CategoryItem category={"menu"} /></div>
  <div className='p-2 pt-1'> <CategoryItem category={"discover"} /></div>
  <div className='p-2 pt-1'> <CategoryItem category={"collections"} /></div>
  <div className='p-2 pt-1'> <CategoryItem category={"general"} /></div>
  </div>
    </>
  )
}