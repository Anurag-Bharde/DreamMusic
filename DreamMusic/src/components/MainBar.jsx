import { ArtistPoster } from "./ArtistPoster";
import { NavBarUp } from "./NavBarUp";
import SongList from "./SongList";

export function MainBar(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-dark-red to-black">
            <NavBarUp />
            <ArtistPoster />
            <SongList />
        </div>
    )
}