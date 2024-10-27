import React from 'react'

import Image from 'next/image'

const RestaurantCard = ({
  score,
  title,
  subtitle,
  tags,
  distance,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 flex">
      <div className="w-1/4 flex flex-col items-center relative">
        <div className="w-32 h-32 mb-2">
          <Image
            src={imageUrl}
            alt="restaurant"
            width={50}
            height={50}
            className="w-full h-full rounded-full object-cover"
            layout="responsive"
          />
        </div>
        <h3 className="text-lg font-bold text-center text-gray-500">{title}</h3>
      </div>

      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <div className="flex items-center text-orange-500 font-semibold mb-2">
          <span className="mr-1">👍 {score}점</span> {''}
          <span className="ml-1 ">{subtitle}</span>
        </div>
        <p className="text-gray-500 text-sm mb-2 text-center">{distance}</p>
        <div className="flex gap-2 text-orange-400 text-xs mb-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded-lg">
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
