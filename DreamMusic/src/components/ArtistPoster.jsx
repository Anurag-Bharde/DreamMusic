import img1 from "./Images/Artist/MicBac.png"
export function ArtistPoster(){
    return(
        <div className="mt-6 relative">
        <div className="w-200">
            <img className="px-20 relative" src={img1} />
            <div className="absolute left-0 top-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded">
          Yo
        </h2>
      </div>
      </div>
        </div>
    )
}