import React , {useState , useCallback} from 'react'
import {
  HeaderBody,
  CategoryLink,
  CategoryRouterItem,
  SelectRouterItem,
} from "./MainPageCategory.style";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {LOAD_PRODUCT_REQUEST} from "../../reducers/product"

const categories = [
  { name: "total", text: "전체보기" },
  { name: "music", text: "음악" },
  { name: "art", text: "미술" },
];

const MainPageCategory=()=> {
  const dispatch = useDispatch();
  const [active , setActive]= useState(1);

  const ColorSelect = useCallback((selectName , selectIdx)=>{
    setActive(selectIdx);
    const {name} = selectName;
    console.log("name : " , name);

    dispatch({
      type:LOAD_PRODUCT_REQUEST,
      data:name
    })
  },[active])

  return (
    <div>
      <HeaderBody>
        <CategoryLink>
          {categories.map((c, idx) => (
            <CategoryRouterItem
              onClick={()=>ColorSelect(c,idx)}
              active={active === idx}
            >
              {c.text}
            </CategoryRouterItem>
          ))}
        </CategoryLink>
      </HeaderBody>
    </div>
  );
}

export default MainPageCategory;
