import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
function Poster({track}) {
  return (
    <div
      className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-[#f8f8f8]/80 cursor-pointer hover:scale-105 hover:text-[#f8f8f8]/100 transition duration-200 ease-out group mx-auto"
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt=""
        className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />

      <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
        <div className="h-10 w-10 bg-[#ee4950] rounded-full flex items-center justify-center group-hover:bg-[#8a070e] flex-shrink-0">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-white text-xl" />
          ) : (
            <BsFillPlayFill className="text-white text-xl ml-[1px]" />
          )}
        </div>

        <div className="text-[15px]">
          <h4 className="font-extrabold truncate w-44">{track.title}</h4>
          <h6>{track.artist}</h6>
        </div>
      </div>
    </div>
  );
}

export default Poster;