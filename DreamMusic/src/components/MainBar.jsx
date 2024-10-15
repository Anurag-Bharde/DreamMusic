import { ArtistPoster } from "./ArtistPoster";
import { NavBarUp } from "./NavBarUp";
import SongList from "./SongList";
import { useContext, useEffect } from "react";
import { MusicContext } from "./Context/ContextProvider";
import songs from './Data/SongsData'; // Import the songs data

export function MainBar(){
    const { selectSong, setSelectSong } = useContext(MusicContext);

    // Set the selected song when the user selects one from the SongList
    const handleSelectSong = (song) => {
        setSelectSong(song); // Update context with selected song
    };

    // Play the first song by default if none is selected
    useEffect(() => {
        if (!selectSong) {
            // Assuming SongList provides songs from a static data source
            const firstSong = songs[0];  // Assuming you import the songs data in this file
            setSelectSong(firstSong);
        }
    }, [selectSong, setSelectSong]); // Run the effect when component mounts or selectSong changes

    return (
        <div className="min-h-screen bg-gradient-to-b from-dark-red to-black">
            <NavBarUp />
            <ArtistPoster />
            <SongList setSelectedSong={handleSelectSong} />
        </div>
    );
}
