import hamburgerIcon from "../../assets/svg/hamburger-menu-icon.svg";
import notificationIcon from "../../assets/svg/notification-icon.svg";
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

        <div className="youtube-logo-container">
          <img className="youtube-box-logo" src={youtubeBoxIcon} alt="" />
          <p className="youtube-text">YouTube</p>
          <p className="country-tag">SE</p>
        </div>
      </div>

      <div className="center">
        <SearchBar /> {/*TODO: search logo popup when clicked*/}
      </div>

      <div className="end">
        <div className="create-btn-div">
          <button>
            <span>+</span>
            <p>Skapa</p>
          </button>
        </div>

        <div className="notification-btn-div">
          <button>
            <img src={notificationIcon} alt="notificationIcon" />
          </button>
        </div>

        <div className="profile-btn">(profile)</div>
      </div>
    </div>
  );
}
