import React, { useEffect, useState, useContext } from 'react';
import { Howl } from 'howler';
import { MusicContext } from './Context/ContextProvider';

const MusicPlayer = () => {
  const { selectSong, isPlaying, setIsPlaying } = useContext(MusicContext);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (selectSong) {
      if (sound) sound.stop(); // Stop current song if playing
      
      // Load and play the new song
      const newSound = new Howl({
        src: [selectSong.src],
        html5: true, 
      });
      setSound(newSound);
    }
  }, [selectSong]);

  useEffect(() => {
    if (sound) {
      if (isPlaying) {
        sound.play();
      } else {
        sound.pause();
      }
    }
  }, [isPlaying, sound]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!selectSong) return <div className="text-white">Select a song to play</div>;

  return (
    <div className="p-4 bg-red-900 rounded-lg">
      <h3 className="text-white text-lg mb-2">Now Playing</h3>
      <img 
        src={selectSong.cover} 
        alt={selectSong.title} 
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <div className="text-white mb-2">
        <span className="text-xl">{selectSong.title}</span> <br />
        <span className="text-gray-400">{selectSong.artist}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        {/* Player controls */}
        <button className="text-white hover:text-gray-300">⏮</button>
        <button 
          onClick={togglePlayPause}
          className="text-white hover:text-gray-300">
          {isPlaying ? '⏸' : '⏯'}
        </button>
        <button className="text-white hover:text-gray-300">⏭</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
