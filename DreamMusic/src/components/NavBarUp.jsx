

export function NavBarUp(){
    return(
        <div className="flex mt-5 justify-around text-lg">
            <li className="relative inline-block text-[#cfcfcf] cursor-pointer group">
  <span className="group-hover:text-slate-300 transition duration-300">Music </span>
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
</li>
           <li className="relative inline-block text-[#cfcfcf] cursor-pointer group">
  <span className="group-hover:text-slate-300 transition duration-300">Podcast </span>
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
</li>

<li className="relative inline-block text-[#cfcfcf] cursor-pointer group">
  <span className="group-hover:text-slate-300 transition duration-300">Live </span>
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
</li>
             <li className="relative inline-block text-[#cfcfcf] cursor-pointer group">
  <span className="group-hover:text-slate-300 transition duration-300">Radio </span>
  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
</li>
            {/* <h5 className="text-[#cfc5c5] text-lg hover:underline">Music</h5>
            <h5 className="text-[#cfc5c5] text-lg hover:underline">Podcast</h5>
            <h5 className="text-[#cfc5c5] text-lg hover:underline">Live</h5>
            <h5 className="text-[#cfc5c5] text-lg hover:underline">Radio</h5> */}
            <div className="relative w-3/6">
  <input 
    type="text" 
    placeholder="Search..."
    className="h-8  bg-black bg-opacity-60 w-full rounded-full pl-4 pr-10 text-white text-opacity-100"
  />
  <span className="absolute inset-y-0 right-3 flex items-center">
    <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </span>
</div>

        </div>
    )
}