import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative ml-[-120px] w-[820px] mt-3">
      <input
        type="text"
        placeholder="Buscar produtos..."
        className="w-full py-2 pl-4 pr-12 text-base border border-gray-300 rounded"
        onChange={e => onSearch(e.target.value)} // dispara a busca conforme digita
      />
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 transform text-xl text-gray-500 cursor-pointer"
      >
        🔍
      </span>
    </div>
  );
};

export default SearchBar;
