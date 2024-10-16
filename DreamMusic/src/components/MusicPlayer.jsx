import React, { useEffect, useState, useContext } from 'react';
import { Howl } from 'howler';
import { MusicContext } from './Context/ContextProvider';
import playIcon from './Images/MusicPlayer/play.png';
import pauseIcon from './Images/MusicPlayer/pause3.png';
import nextt from './Images/MusicPlayer/next.png';
import prev from './Images/MusicPlayer/prev.png';

const MusicPlayer = () => {
  const { selectSong, isPlaying, setIsPlaying, Songs, setSelectSong } = useContext(MusicContext);
  const [sound, setSound] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (selectSong) {
      // Stop and unload the previous sound if it exists
      if (sound) {
        sound.stop();
        sound.off('end');
      }

      // Initialize the new sound with Howl
      const newSound = new Howl({
        src: [selectSong.src],
        html5: true,
        onload: () => {
          setDuration(newSound.duration());
        },
        onend: () => {
          const currentIndex = Songs.findIndex(song => song.id === selectSong.id);
          const nextIndex = (currentIndex + 1) % Songs.length; // Loop to the first song
          setSelectSong(Songs[nextIndex]); // Change to the next song
        },
      });

      setSound(newSound);

      // Update the current time of the song every second
      const updateTime = setInterval(() => {
        if (isPlaying && newSound) {
          setCurrentTime(newSound.seek());
        }
      }, 1000);

      return () => {
        clearInterval(updateTime);
      };
    }
  }, [selectSong]);

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
    <div className="px-8 pt-4">
      <div className="px-4 pt-2 pb-2 bg-[#6b0000] rounded-lg">
        <h3 className="text-white text-lg text-center mb-1">Now Playing</h3>
        <img 
          src={selectSong.cover} 
          alt={selectSong.title} 
          className="w-full h-32 px-2 object-cover object-top mb-2 rounded-3xl"
        />
        <div className="text-white mb-2 text-center">
  <span className="text-lg w-full truncate block overflow-hidden">{selectSong.title}</span> 
  <span className="text-gray-400 text-md block">{selectSong.artist}</span>
</div>

        
        {/* Progress Bar */}
        <div className="text-white flex justify-between items-center">
          <span className='pr-1'>{formatTime(currentTime)}</span>
          <div className="relative w-full bg-[#b07b7b] rounded-full h-1" onClick={handleProgressClick}>
            {/* Progress bar background */}
            <div 
              className="bg-[#f5f5f5] h-full rounded-full" 
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            {/* Circle pointer */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 bg-[#f5f5f5] w-3 h-3 rounded-full"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <span className='pl-1'>{formatTime(duration)}</span>
        </div>
        
        {/* Play/Pause and Next/Previous Controls */}
        <div className="flex justify-between items-center mt-1">
          <button onClick={prevSong} className="text-white hover:text-gray-300 h-6 w-6"><img src={prev} /></button>
          <button onClick={togglePlayPause} className="text-white hover:text-gray-300">
            <img 
              src={isPlaying ? pauseIcon : playIcon} 
              alt={isPlaying ? 'Pause' : 'Play'} 
              className="w-6 h-6"
            />
          </button>
          <button onClick={nextSong} className="text-white hover:text-gray-300 h-6 w-6"><img src={nextt} /></button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
