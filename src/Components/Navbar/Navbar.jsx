import React from "react";
import hamburgerIcon from "../../assets/svg/hamburger-menu-icon.svg";
import youtubeBoxIcon from "../../assets/youtube_assets/youtube-box-icon.png";
import "./Navbar.css";

import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {

  return (
    <div id="container">
      <div className="start">
        <button className="hamburger-menu-btn">
          <img
            src={hamburgerIcon}
            alt="missing hamburger icon in navbar start"
          />
        </button>

        <img className="youtube-box-logo" src={youtubeBoxIcon} alt="" />
        <span className="youtube-text">YouTube</span>
        <span className="country-tag">SE</span>
      </div>

      <div className="center">
        <SearchBar />
      </div>

      <div className="end">end</div>
    </div>
  );
}
