import React, { useEffect, useState, useContext } from 'react';
import songs from './Data/SongsData'; // Import the songs data
import { MusicContext } from './Context/ContextProvider';

const SongList = () => {
  const { setSelectSong } = useContext(MusicContext);
  const [activeSongId, setActiveSongId] = useState(null);

  // Set the default song to the first one on the list
  useEffect(() => {
    if (songs.length > 0) {
      setSelectSong(songs[0]);  // Set the first song as the default
      setActiveSongId(songs[0].id);  // Highlight the first song
    }
  }, [setSelectSong]);

  const handleSongSelect = (song) => {
    setActiveSongId(song.id); // Highlight selected song
    setSelectSong(song);      // Set the selected song for the player
  };

  return (
    <div className="w-full pt-2">
      <div className='flex justify-between mb-4 px-4 sm:px-8 md:px-16 lg:px-24'>
        <h2 className="text-white text-lg">Popular</h2>
        <h2 className="text-white text-lg">See All</h2>
      </div>
      <ul className="">
        {songs.map((song, index) => (
          <li 
            key={song.id}
            onClick={() => handleSongSelect(song)}
            className={`group cursor-pointer 
              ${activeSongId === song.id ? 'bg-red-700' : 'hover:bg-[#520000]'}
            `}
          >
            <div className="px-4 sm:px-8 md:px-16 lg:px-10">
              <div className="flex justify-between items-center py-0.5">
                <div className="flex items-center space-x-2">
                  <span className="text-white w-6">{index + 1}</span>
                  <img 
                    src={song.cover} 
                    alt={song.title} 
                    className="w-12 h-12 object-cover rounded" 
                  />
                  <span className="text-white">{song.title}</span>
                </div>
                <div className="text-gray-400">
                  {song.time}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
