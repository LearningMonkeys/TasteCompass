import React from 'react'

import RestaurantCard from './component/RestaturantCard'

export default function MainPage() {
  const restaurants = [
    {
      score: 95,
      title: '쏘삼돼지208 영통본점',
      subtitle: '가까운 거리, 다양한 메뉴',
      tags: ['영통역', '구워주는 삼겹살', '회식추천'],
      distance: '영통역에서 0.57km',
      description:
        '영통역 주변에 위치하며 삼겹살 1인분 16,000원으로 가격이 적당합니다. 안주 메뉴가 많아 술 한잔 하기 좋은 곳으로 추천되었습니다.',
      imageUrl: '/images/matzip.jpg',
    },
    {
      score: 89,
      title: '송도리네 곰도리탕 영통점',
      subtitle: '가까운 거리, 저렴한 가격',
      tags: ['영통역', '곰도리탕', '곱창전골'],
      distance: '영통역에서 0.54km',
      description:
        '영통역 주변에 위치하며 인당 13,000원대 가격으로 적당합니다. 비 오는 날 따뜻한 국물요리를 먹을 수 있는 식당으로 추천되었습니다.',
      imageUrl: '/images/matzip.jpg',
    },
  ]

  return (
    <div className="p-4 bg-gray-50 min-h-screen font-sans bg-gray-100">
      <header
        className="flex flex-col items-start space-y-2 mb-4 p-4"
        style={{ marginLeft: '5%', marginRight: '5%' }}
      >
        <button className="text-3xl text-gray-700 mb-2">{`<`}</button>
        <h2 className="text-lg font-semibold text-gray-700 bg-red-100 rounded-2xl p-4 w-full text-center">
          비 올 때 인당 3만원 정도로 술 한잔 하기 좋은 영통역 주변 고깃집
        </h2>
      </header>

      <h3 className="text-xl font-bold mb-4 text-gray-700 text-center">
        Found {restaurants.length} results
      </h3>

      <div
        className="space-y-12 overflow-y-auto max-h-[80vh] overflow-visible p-4"
        style={{ marginLeft: '5%', marginRight: '5%' }}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  )
}
