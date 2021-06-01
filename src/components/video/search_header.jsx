import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
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
    <header className={styles.header}>
      <div className={styles.searchForm}>
        <img className={styles.searchImg} src="/imgs/search.png" alt="search" />
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
      <div className={styles.tagBox}>
        <button className={styles.btn}>추천 영상</button>
        <button className={styles.btn}>Vinyasa</button>
        <button className={styles.btn}>Zumba</button>
        <button className={styles.btn}>Stretching</button>
        <button className={styles.btn}>K-pop</button>
      </div>
    </header>
  );
});

export default SearchHeader;
