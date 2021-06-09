import React from 'react'
import {HeaderBody ,
        CategoryLink ,
        CategoryLinkItem} from "./MainPageCategory.style"

const categories = [
  { name: "total", text: "전체보기" },
  { name: "music", text: "음악" },
  { name: "art", text: "미술" },
];

const MainPageCategory=()=> {
  return (
    <HeaderBody>
      <CategoryLink>
        {categories.map((c) => (
          <CategoryLinkItem
            href={c.name === "total" ? "/today" : `/${c.name}`}
          >
            {c.text}
          </CategoryLinkItem>
        ))}
      </CategoryLink>
    </HeaderBody>
  );
}

export default MainPageCategory;
