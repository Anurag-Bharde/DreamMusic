import { NOtify } from "./Data/NotifyData"
import adder from './Images/Notify/playAdd.png'
import misc from './Images/Notify/playMusic.png'

export function Notify(){
    return(
        <div className=" bg-slate-500 h-1/3">
            <div className="flex justify-between p-4 pt-7">
                <div>Notifications</div>
                <div>...</div> 
            </div>
            <div className="grid grid-rows-3 px-4">
               <div className=" grid grid-rows-3 grid-flow-col ">
               <div class="row-span-3 ">
                <div className=" flex h-12 w-12 bg-[#631a1a] rounded-xl ">
                    <img className="h-5/6 justify-center items-center" src={adder} />
                </div>
               </div>
             <div class="row-span-1 col-span-2 font-semibold text-white">playlist Added</div>
             <div class="col-span-2 font-medium text-sm text-white">200 songs</div>
             </div>
               
            </div>
        </div>
    )
}