import MusicPlayer from "./MusicPlayer"
import SongList from "./SongList"
import { useContext, useState } from "react";
import { MusicContext } from "./Context/ContextProvider";
import { Notify } from "./Notify";


export function SideBar(){
    const [selectedSong, setSelectedSong] = useState(null);
    const {selectSong,setPlaying}=useContext(MusicContext)

    // console.log(PlayNow)

return (
    <div className='h-screen  bg-gradient-to-b from-black-red to-black'>

    <Notify />
        <div className=" h-screen">
      <div className=" p-4 bg-black-red">
        <MusicPlayer selectedSong={selectSong} setPlay={setPlaying}/>
      </div>
    </div>
    </div>
)
}