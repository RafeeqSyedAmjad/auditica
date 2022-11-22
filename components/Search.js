
function Search({search, setSearch}) {
  return (
        <div className= "*max-w-[1150px] rounded-full overflow-hidden border-2 border-[#d3d4d2] p-1.5 bg-[#eeefee] bg-opacity-100 px-5 pr-8 flex items-center">
          <div className= "h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse border-[#575855]"/>
      <input type="text" className="bg-[#eeefee] border-none text-black lg:w-full focus:ring-0 outline-none placeholder-[#6c726f] text-xs" value={search} onChange = {(e)=> setSearch(e.target.value)} placeholder="Search...." />
        </div>
  )
}

export default Search;