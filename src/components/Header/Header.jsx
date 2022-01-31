import React from "react";
import "./style.css";
import { InputBase } from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search";

export const Header = () => {
  return (
    <>
      <header className="head">
        <h2 className="title">Map Search</h2>
        <div className="title-right">
          <h4>Explore Now</h4>
          {/* <Autocompele> */}
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" className="input" />
          </div>
          {/* </Autocompele> */}
        </div>
      </header>
    </>
  );
};
