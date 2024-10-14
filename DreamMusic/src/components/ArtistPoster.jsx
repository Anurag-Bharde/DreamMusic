import img1 from "./Images/Artist/MicBac.png"
export function ArtistPoster(){
    return(
        <div className="mt-2 relative">
        <div className="w-200">
            <img className="pl-28 h-80 w-screen pr-28 relative" src={img1} />
            <div className="absolute left-0 top-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded">
          Yo
        </h2>
      </div>
      </div>
        </div>
    )
}