import React, { useEffect, useState, useContext } from 'react';
import { Howl } from 'howler';
import { MusicContext } from './Context/ContextProvider';

const MusicPlayer = () => {
  const { selectSong, isPlaying, setIsPlaying, Songs, setSelectSong } = useContext(MusicContext);
  const [sound, setSound] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (selectSong) {
      if (sound) {
        sound.stop();
        sound.off('end'); 
      }
  
      const newSound = new Howl({
        src: [selectSong.src],
        html5: true,
        onload: () => {
          setDuration(newSound.duration());
        },
      });
  
      setSound(newSound);
      newSound.play();
      setIsPlaying(true);
  
      const updateTime = setInterval(() => {
        if (isPlaying) {
          setCurrentTime(newSound.seek());
        }
      }, 1000);
  
      newSound.on('end', () => {
        const currentIndex = Songs.findIndex(song => song.id === selectSong.id);
        const nextIndex = (currentIndex + 1) % Songs.length; // Loop to the first song
        setSelectSong(Songs[nextIndex]); // Change to the next song
      });
  
      return () => {
        clearInterval(updateTime);
      };
    }
  }, [selectSong, isPlaying]);
  
  

  const togglePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause(); // Pause the song
      } else {
        sound.play(); // Play the song
      }
      setIsPlaying(prev => !prev); // Toggle the playing state
    }
  };
  

  const handleProgressClick = (event) => {
    if (sound) {
      const progressBar = event.target;
      const rect = progressBar.getBoundingClientRect();
      const offsetX = event.clientX - rect.left; // Click position relative to the progress bar
      const newWidth = rect.width; // Width of the progress bar
      const newTime = (offsetX / newWidth) * duration; // Calculate new time based on click position
  
      sound.seek(newTime); // Seek to the new time
      setCurrentTime(newTime); // Update the current time state
    }
  };
  

  const nextSong = () => {
    const currentIndex = Songs.findIndex(song => song.id === selectSong.id);
    const nextIndex = (currentIndex + 1) % Songs.length;
    setSelectSong(Songs[nextIndex]);
  };

  const prevSong = () => {
    const currentIndex = Songs.findIndex(song => song.id === selectSong.id);
    const prevIndex = (currentIndex - 1 + Songs.length) % Songs.length;
    setSelectSong(Songs[prevIndex]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!selectSong) return <div className="text-white">Select a song to play</div>;

  return (
    <div className='px-8 pt-4'>
    <div className="p-4 bg-red-900 rounded-lg">
      <h3 className="text-white text-lg mb-1">Now Playing</h3>
      <img 
        src={selectSong.cover} 
        alt={selectSong.title} 
        className="w-full h-28 px-2 object-cover object-top mb-4 rounded-lg"
      />
      <div className="text-white mb-2">
        <span className="text-lg">{selectSong.title}</span> <br />
        
        <span className="text-gray-400 text-md">{selectSong.artist}</span>
      </div>
      <div className="text-white flex justify-between items-center">
  <span>{formatTime(currentTime)}</span>
  
  <div className="relative w-full bg-gray-600 rounded h-1" onClick={handleProgressClick}>
    {/* Progress bar background */}
    <div 
      className="bg-red-500 h-full" 
      style={{ width: `${(currentTime / duration) * 100}%` }}
    />
    
    {/* Circle pointer */}
    <div
      className="absolute top-1/2 transform -translate-y-1/2 bg-red-500 w-3 h-3 rounded-full"
      style={{ left: `${(currentTime / duration) * 100}%` }}
    />
  </div>
  
  <span>{formatTime(duration)}</span>
</div>

     
      <div className="flex justify-between items-center mt-1">
        <button onClick={prevSong} className="text-white hover:text-gray-300">⏮</button>
        <button 
          onClick={togglePlayPause}
          className="text-white hover:text-gray-300">
          {isPlaying ? '⏸' : '⏯'}
        </button>
        <button onClick={nextSong} className="text-white hover:text-gray-300">⏭</button>
      </div>
    </div>
    </div>
  );
};

export default MusicPlayer;
