import { ArtistPoster } from "./ArtistPoster";
import { NavBarUp } from "./NavBarUp";

export function MainBar(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-dark-red to-black">
            <NavBarUp />
            <ArtistPoster />
        </div>
    )
}