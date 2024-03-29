"use client";
import { SearchManufacturer } from ".";
import { useState } from "react";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="serachbar__item">
        <SearchManufacturer
         manufacturer={manufacturer}
         setManufacturer={setManufacturer}
         /> 
      </div>
    </form>
  );
};
export default SearchBar;
