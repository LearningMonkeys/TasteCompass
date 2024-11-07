'use client';

import React from 'react';
import RestaurantCard from './RestaturantCard'

const SearchResults = ({ results }) => {
    return (
        <div className="p-4">
            {results.length > 0 ? (
                results.map((restaurant, index) => (
                    <RestaurantCard key={index} {...restaurant} />
                ))
            ) : (
                <p className="text-gray-500">No results found</p>
            )}
        </div>
    );
}

export default SearchResults;
