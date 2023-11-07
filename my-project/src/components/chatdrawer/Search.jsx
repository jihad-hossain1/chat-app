import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  return (
    <button className="flex items-center space-x-3 p-2 rounded border border-indigo-600">
      <HiOutlineMagnifyingGlass /> <span>search here</span>
    </button>
  );
};

export default Search;
