import React, { useContext, useEffect } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { MusicContext } from './Context/ContextProvider';

const SongList = () => {
  const { Songs, setSelectSong, selectSong } = useContext(MusicContext);

  useEffect(() => {
    // Log the Songs array to check its structure
    console.log('Songs in SongList:', Songs);
  }, [Songs]);

  const handleSongSelect = (song) => {
    setSelectSong(song);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  };

  return (
    <div className="w-full pt-2 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className='flex justify-between mb-4'>
        <h2 className="text-white text-lg">Popular</h2>
        <h2 className="text-white text-lg">See All</h2>
      </div>
      <div className="grid grid-cols-12 gap-4 text-white text-sm font-bold mb-1">
        <div className="col-span-1">#</div>
        <div className="col-span-4">TITLE</div>
        <div className="col-span-3">PLAYING</div>
        <div className="col-span-2">TIME</div>
        <div className="col-span-2">ALBUM</div>
      </div>
      <Droppable droppableId="songs">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
            {Songs.map((song, index) => {
              const id = song.id?.toString() || `song-${index}`;
              console.log(`Rendering song with id: ${id}`);
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={() => handleSongSelect(song)}
                      className={`grid grid-cols-12 gap-4 items-center py-1 px-2 rounded
                        ${selectSong?.id === song.id ? 'bg-red-900' : 'hover:bg-[#520000]'}
                        ${snapshot.isDragging ? 'bg-gray-700' : ''}
                      `}
                    >
                      <span className="col-span-1 text-gray-400">{index + 1}</span>
                      <div className="col-span-4 flex items-center space-x-2">
                        <img 
                          src={song.cover} 
                          alt={song.title} 
                          className="w-10 h-10 object-cover rounded" 
                        />
                        <span className="text-white truncate">{truncate(song.title, 20)}</span>
                      </div>
                      <span className="col-span-3 text-gray-400 truncate">{song.playing}</span>
                      <span className="col-span-2 text-gray-400">{song.time}</span>
                      <span className="col-span-2 text-gray-400 truncate">{truncate(song.album, 15)}</span>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default SongList;