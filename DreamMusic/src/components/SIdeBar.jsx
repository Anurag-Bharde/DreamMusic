import MusicPlayer from "./MusicPlayer"
import SongList from "./SongList"
import { useState } from "react";

export function SideBar(){
    const [selectedSong, setSelectedSong] = useState(null);

return (
    <div className='h-screen  bg-gradient-to-b from-black-red to-black'>
        <div className="grid grid-cols-12 h-screen">
      {/* Song list section */}
      <div className="col-span-8 p-4 bg-black">
        <SongList setSelectedSong={setSelectedSong} />
      </div>
      
      {/* Music player section */}
      <div className="col-span-4 p-4 bg-black-red">
        <MusicPlayer selectedSong={selectedSong} />
      </div>
    </div>
    </div>
)
}