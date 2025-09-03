import React, { useEffect, useState } from 'react';

const SearchBar = ({ onSearch, delay = 400 }) => {
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const searchHandler = setTimeout(() => {
      if (onSearch) {
        onSearch(searchItem.trim());
      }
    }, delay);

    return () => clearTimeout(searchHandler);
  }, [searchItem, delay, onSearch]);

  return (
    <div >
      <input
        type="text"
        placeholder="Search"
        className="border-b  px-2 py-2 w-[100%] outline-none"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
