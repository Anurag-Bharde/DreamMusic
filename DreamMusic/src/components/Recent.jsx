import { NOtify } from "./Data/NotifyData"
import i1 from './Images/Recents/i1.png'
import i2 from './Images/Recents/i2.png'
import i3 from './Images/Recents/i3.png'
import i4 from './Images/Recents/i4.png'
import i5 from './Images/Recents/i5.png'
import i6 from './Images/Recents/i6.png'
import { FaMusic, FaShareAlt, FaList } from 'react-icons/fa'; // Icons for playlist and new music

const Recents = [
    {
      "id": 1,
      "title": "Doing the H...",
      "image": i1
    },
    {
      "id": 2,
      "title": "To Relax",
      "image": i2
    },
    {
      "id": 3,
      "title": "Pop World",
      "image": i3
    },
    {
      "id": 4,
      "title": "Electric Pop",
      "image": i4
    },
    {
      "id": 5,
      "title": "Summer",
      "image": i5
    },
    {
      "id": 6,
      "title": "Sounds of...",
      "image": i6
    }
  ]
  

export function Recent(){
    return (
        <div className="px-4 pt-2 rounded-sm">
          <div className="flex justify-between items-center ">
            <h2 className="text-white text-md font-medium">Recent Playlists</h2>
            <button className="text-white text-md">•••</button>
          </div>
          
          <div className="grid grid-cols-3 gap-0.5">
            {Recents.map(playlist => (
              <div key={playlist.id} className="text-center w-20">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className=" rounded-lg h-16 w-16 object-cover"
                />
                <p className="text-gray-200 text-xs font-medium">{playlist.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

