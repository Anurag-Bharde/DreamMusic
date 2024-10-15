import React, { createContext, useState } from "react";
import songs from "../Data/SongsData";

export const MusicContext = createContext();

export function MyContextProvider({ children }) {
    const [selectSong, setSelectSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [Songs, setSongs] = useState(songs); // Maintain songs state

    const sharedProp = {
        selectSong,
        setSelectSong,
        isPlaying,
        setIsPlaying,
        Songs,
        setSongs // Make setSongs available in the context
    };

    return (
        <MusicContext.Provider value={sharedProp}>
            {children}
        </MusicContext.Provider>
    );
}
