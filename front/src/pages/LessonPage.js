import React, { useState } from "react";
import MainPageCategory from "../components/MainPageCategory/MainPageCategory";
import styled from "styled-components";
import ProductCard from "../components/ProductCard/ProductCard";
import AppLayout from "../components/AppLayout/AppLayout";

const Body = styled.div`
  margin-top: 10px;
  font-size: 28px;
  width: 100%;
`;

const BodyCenter = styled.div`
  margin: 0 auto;
  font-size: 28px;
  width: 60%;
`;

// 여기에 useEffect 로 가져와서 Product 아이템들을 map 을돌려서 뿌려준다.
// 나중에 ifinite scroll 붙일것
const LessonPage = () => {
  return (
    <AppLayout>
      <MainPageCategory />
      <Body>
        <BodyCenter>
          <div>커리큘럼 Curriculum</div>
          {/* {lessonProducts.map(product)=> .....} */}
          <ProductCard />
        </BodyCenter>
      </Body>
    </AppLayout>
  );
};

export default LessonPage;
