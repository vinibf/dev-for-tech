import React from "react";

export const SearchBar = ({ onUserNameChange }) => {
  return (
    <div className="search-bar">
      <label htmlFor="search-bar__input"></label>
      <input
        onChange={(e) => onUserNameChange(e)}
        type="text"
        id="search-bar__input"
      />
    </div>
  );
};
