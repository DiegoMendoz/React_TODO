
function TodoSearch(
  {searchValue, setSearchValue,}
) {
  return (
    <input placeholder="Cortar cebolla"
    value={searchValue}
     className="w-full p-4 bg-[#050E3C]
      border-2 border-[#050E3C] rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#DC0000]"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
       />
  );
}

export { TodoSearch };
