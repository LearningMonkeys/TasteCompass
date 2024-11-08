'use client';

import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const SearchContainer = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    const response = await fetch(`/mock-api/search?query=${searchQuery}&page=1&limit=3`);
    const result = await response.json();

    setResults(result.data);
  };

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <SearchResults results={results} />
    </>
  );
}

export default SearchContainer;