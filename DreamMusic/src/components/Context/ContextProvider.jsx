import { createContext, useState } from "react";

export const MusicContext = createContext();

export function MyContextProvider({ children }) {
  const [selectSong, setSelectSong] = useState(null);  // Correct initialization
  const [isPlaying, setIsPlaying] = useState(false);   // Manage if a song is playing

  const sharedProp = {
    selectSong,       // Selected song object
    setSelectSong,    // Function to update the selected song
    isPlaying,        // Boolean for play/pause
    setIsPlaying,     // Function to update play/pause state
  };

  return (
    <MusicContext.Provider value={sharedProp}>
      {children}
    </MusicContext.Provider>
  );
}
