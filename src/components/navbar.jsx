import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img className="logo-size" src="/imgs/youtube_logo.png" alt="youtube_logo" />
        <form className="search-form">
          <input type="text" className="search-box" />
          <button className="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
