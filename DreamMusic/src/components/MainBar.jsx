import React, { useContext, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { ArtistPoster } from "./ArtistPoster";
import { NavBarUp } from "./NavBarUp";
import SongList from "./SongList";
import { MusicContext } from "./Context/ContextProvider";
import songs from './Data/SongsData';

export function MainBar() {
    const { selectSong, setSelectSong, setIsPlaying, Songs, setSongs } = useContext(MusicContext);

    useEffect(() => {
        if (!selectSong && Songs.length > 0) {
            setSelectSong(Songs[0]);
            setIsPlaying(true);
        }
    }, [selectSong, Songs, setSelectSong, setIsPlaying]);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(Songs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setSongs(items);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-dark-red to-black">
            <NavBarUp />
            <ArtistPoster />
            <DragDropContext onDragEnd={onDragEnd}>
                <SongList />
            </DragDropContext>
        </div>
    );
}