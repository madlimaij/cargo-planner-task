import React from 'react';

type SearchProps = {
    handleSearch: (e: any) => void
}

const Search: React.FC<SearchProps> = ({ handleSearch }) => {
  return (
    <form className="d-flex my-2 my-lg-0 d-none d-md-block">
      <input
        className="form-control mr-sm-2"
        type="search"
        onChange={handleSearch}
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
};

export default Search;
