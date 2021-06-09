import React , {useState} from 'react'
import {
  HeaderBody,
  CategoryLink,
  CategoryRouterItem,
  SelectRouterItem,
} from "./MainPageCategory.style";
import {useRouter} from "next/router"
import axios from "axios";

const categories = [
  { name: "total", text: "전체보기" },
  { name: "music", text: "음악" },
  { name: "art", text: "미술" },
];

const MainPageCategory=()=> {
  const [active , setActive]= useState(1);
  const router = useRouter()


  const ColorSelect = (selectColor) =>{
    setActive(selectColor);
  }

  return (
    <div>
      <HeaderBody>
        <CategoryLink>
          {categories.map((c, idx) => (
            <CategoryRouterItem
              onClick={() => ColorSelect(idx)}
              // 삼항 연산자를 써줘야 할것같은 느낌적인 느낌 ??
              active={active === idx}
            >
              {c.text}
            </CategoryRouterItem>
          ))}
        </CategoryLink>
      </HeaderBody>
      {active}
    </div>
  );
}

export default MainPageCategory;
