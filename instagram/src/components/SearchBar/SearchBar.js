import React from "react";
import instaLogo from "./insta.png";
import "./Search.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="logo">
          <img src={instaLogo} alt="" />
        </div>
        <form id="form">
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
