'use client';

import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleSearchClick = () => {
        if (input.trim()) {
            onSearch(input);
        }
    };

    return (
        <div className="p-4 flex gap-2 w-1/3 mx-auto">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="어떤 음식점을 찾으시나요?"
                className="border mt-2 p-2 rounded w-full text-gray-900"
            />
            <button onClick={handleSearchClick} className="mt-2 p-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </div>
    );
}

export default SearchInput;