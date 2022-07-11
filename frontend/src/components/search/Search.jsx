import React from "react";
import "./Search.css";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import Navbar from "../navbar/Navbar";

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search"
      variant="outlined"
      placeholder="Search..."
      size="large"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

// const data = [
//   "Pop",
//   "Rock",
//   "Folk",
//   "Classical",
//   "Electronic",
//   "Jazz",
//   "Dance",
//   "Country",
//   "Hip Hop",
//   "Popular",
// ];

const data =[]

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div>
      <Navbar />
      <div className="content">
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 20,
          }}
        >
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div style={{ padding: 3 }}>
            {dataFiltered.map((d) => (
              <div
                className="text"
                style={{
                  padding: 5,
                  justifyContent: "normal",
                  fontSize: 20,
                  color: "green",
                  margin: 1,
                  width: "250px",
                  BorderColor: "green",
                  borderWidth: "10px",
                }}
                key={d.id}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
