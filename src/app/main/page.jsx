import React from 'react'
import SearchContainer from './component/SearchContainer'

const MainPage = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen font-sans bg-gray-100">
      <header className="flex flex-col items-start space-y-2 mb-4 p-4">
        <h1 className="text-lg font-semibold text-gray-700 bg-red-100 rounded-2xl p-4 w-1/2 text-center mx-auto">
          Taste Compass
        </h1>
      </header>
      <SearchContainer />
    </div>
  );
}

export default MainPage;