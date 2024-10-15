import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

const MusicPlayer = ({ selectedSong }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (selectedSong) {
      // If there is an already playing sound, stop it
      if (sound) sound.stop();
      
      // Create a new Howler sound instance
      const newSound = new Howl({
        src: [selectedSong.src],
        html5: true,
      });
      setSound(newSound);
      setIsPlaying(true);
      newSound.play();
    }
  }, [selectedSong]);

  const togglePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!selectedSong) return <div className="text-white">Select a song to play</div>;

  return (
    <div className="p-4 bg-red-900 rounded-lg">
      <h3 className="text-white text-lg mb-2">Now Playing</h3>
      <img 
        src={selectedSong.cover} 
        alt={selectedSong.title} 
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <div className="text-white mb-2">
        <span className="text-xl">{selectedSong.title}</span> <br />
        <span className="text-gray-400">{selectedSong.artist}</span>
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
