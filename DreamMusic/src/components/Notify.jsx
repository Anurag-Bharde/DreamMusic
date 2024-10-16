import { NOtify } from "./Data/NotifyData"
import adder from './Images/Notify/playAdd.png'
import misc from './Images/Notify/playMusic.png'
import { FaMusic, FaShareAlt, FaList } from 'react-icons/fa'; // Icons for playlist and new music

const notifications = [
    {
      id: 1,
      icon: adder,
      title: 'Playlist Added',
      description: '200 songs',
    },
    {
      id: 2,
      icon: adder,
      title: 'Playlist Shared',
      description: 'To 8 users',
    },
    {
      id: 3,
      icon: misc,
      title: 'New music',
      description: 'Beat It - Michael Jackson',
    },
  ];

export function Notify(){
    return(
    <div className="px-5 pt-5 w-50 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-md font-semibold">Notifications</h2>
        <div className="text-white text-md cursor-pointer">•••</div>
      </div>

      <div className="mt-2 space-y-1">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center p-1 h-12 rounded-lg space-x-5"
          >
            <div className="bg-[#631a1a] p-2.5 rounded-xl h-11 w-11 text-white">
              <img src={notification.icon} />
            </div>
            <div>
              <h3 className="text-white font-medium">{notification.title}</h3>
              <p className="text-gray-300 text-sm">{notification.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
};

