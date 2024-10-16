import MusicPlayer from "./MusicPlayer"
import SongList from "./SongList"
import { useContext, useState } from "react";
import { MusicContext } from "./Context/ContextProvider";
import { Notify } from "./Notify";
import { Recent } from "./Recent";


export function SideBar(){
    const [selectedSong, setSelectedSong] = useState(null);
    const {selectSong,setPlaying}=useContext(MusicContext)

    // console.log(PlayNow)

return (
    <div className='h-screen  bg-gradient-to-b from-black-red to-black'>
      
    <Notify />
    <Recent/>
    <MusicPlayer selectedSong={selectSong} setPlay={setPlaying}/>

    
    </div>
)
}