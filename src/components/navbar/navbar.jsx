import React, { useRef } from 'react';
import styles from './navbar.module.css';

const Navbar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src="/imgs/youtube_logo.png" alt="youtube_logo" />
      <div className={styles.searchForm}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="search"
          placeholder="Search"
          onKeyPress={onKeyPress}
        />
        <button className={styles.searchBtn} type="submit" onClick={onClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
