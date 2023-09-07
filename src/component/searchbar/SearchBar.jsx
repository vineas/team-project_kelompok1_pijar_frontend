import React, { useState } from "react";
// import { json } from "react-router-dom";

const SearchBar = ({setResult}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("REACT_APP_API_KEY/recipes")
      .then(res => res.json())
      .then((json) => {
        const result = json.filter((item) => {
          return (
            value &&
            item &&
            item.recipes_title &&
            item.recipes_title.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <input
        className="search_input"
        type="text"
        placeholder="Search Restaurant, Food"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
