import React from 'react'
import styles from './search.module.css'

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-4">
      <input
        onChange={(e) => {
          setSearch(e.target.value)
          setPageNumber(1)
        }}
        placeholder="Search for characters"
        className={styles.input}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className="btn btn-primary fs-5"
      >
        Search
      </button>
    </form>
  )
}

export default Search
