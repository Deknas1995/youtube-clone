import { useState } from "react";
import keyboardIcon from "../../assets/youtube_assets/keyboard.png";
import microphoneIcon from "../../assets/youtube_assets/white-microphone-icon.png";
import searchSVG from "../../assets/svg/white-search-icon.svg";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Sök"
          value={searchQuery}
          onChange={handleInputChange}
        />

        <button className="keyboard-button">
          <img
            className="keyboard-icon"
            src={keyboardIcon}
            alt="Keyboard Icon"
          />
        </button>

        <button className="search-button">
          <img
            className="search-icon"
            src={searchSVG}
            alt="Search Icon missing"
          />
        </button>
      </div>

      <div className="microphone-div">
        <button className="microphone-icon-btn">
          <img src={microphoneIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
