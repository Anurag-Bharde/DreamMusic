import React, { useState } from 'react';
import songs from './Data/SongsData'; // Import the songs data

const SongList = ({ setSelectedSong }) => {
  const [activeSongId, setActiveSongId] = useState(null);

  const handleSongSelect = (song) => {
    setActiveSongId(song.id); // Highlight selected song
    setSelectedSong(song); // Set the selected song for the player
  };

  return (
    <div className="w-full px-10 pt-2 relative">
    <div className='flex justify-between'>
      <h2 className="text-white text-lg mb-4">Popular</h2>
      <h2 className="text-white text-lg mb-4">See All</h2>
      </div>
      <ul className="">
        {songs.map((song, index) => (
          <li 
            key={song.id}
            onClick={() => handleSongSelect(song)}
            className={`flex justify-between items-center p-0.5 cursor-pointer 
              ${activeSongId === song.id ? 'bg-red-700' : 'hover:bg-[#520000] hover:absolute left-0 right-0 w-full transition-opacity'}
            `}
          >
            <div className="flex items-center space-x-2">
              <span className="text-white">{index + 1}</span>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
