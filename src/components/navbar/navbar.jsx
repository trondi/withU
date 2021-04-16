import React from 'react';
import styles from './navbar.module.css';

const Navbar = (props) => (
  <nav className={styles.navbar}>
    <img className={styles.logo} src="/imgs/youtube_logo.png" alt="youtube_logo" />
    <form className={styles.searchForm}>
      <input type="text" className={styles.searchInput} placeholder="Search" />
      <button className={styles.searchBtn}>
        <i class="fas fa-search"></i>
      </button>
    </form>
  </nav>
);

export default Navbar;
