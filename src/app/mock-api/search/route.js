export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);

  // mock 데이터
  const mockData = {
    paging: {
      pageNo: 1,
      limit: 3,
      maxPageNo: 100,
    },
    data: [
      {
        score: 95,
        title: "쏘삼돼지208 영통본점",
        subtitle: "가까운 거리, 다양한 메뉴",
        tags: ["영통역", "구워주는 삼겹살", "회식추천"],
        distance: "영통역에서 0.57km",
        description:
          "영통역 주변에 위치하며 삼겹살 1인분 16,000원으로 가격이 적당합니다. 안주 메뉴가 많아 술 한잔 하기 좋은 곳으로 추천되었습니다.",
        imageUrl: "/images/matzip.jpg",
      },
      {
        score: 89,
        title: "송도리네 곰도리탕 영통점",
        subtitle: "가까운 거리, 저렴한 가격",
        tags: ["영통역", "곰도리탕", "곱창전골"],
        distance: "영통역에서 0.54km",
        description:
          "영통역 주변에 위치하며 인당 13,000원대 가격으로 적당합니다. 비 오는 날 따뜻한 국물요리를 먹을 수 있는 식당으로 추천되었습니다.",
        imageUrl: "/images/matzip.jpg",
      },
      {
        score: 100,
        title: "한라산 동장군네",
        subtitle: "멋진 사장님, 제주 흑돼지 맛집",
        tags: ["제주도", "김동현", "한라산얼음주먹"],
        distance: "영통역에서 0.10km",
        description:
          "영통역 주변에 위치하며 인당 10,000원대 가격으로 저렴합니다. 사장님이 인상적인 식당으로 추천되었습니다.",
        imageUrl: "/images/dong.png",
      },
    ],
  };

  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}