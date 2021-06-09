import React , {useState} from 'react';
import AppLayout from '../components/AppLayout/AppLayout';
import MainPageCategory from '../components/MainPageCategory/MainPageCategory';
import styled from "styled-components";

const Body = styled.div`
  margin-top: 10px;
  font-size: 28px;
  width: 100%;
  border: 1px solid blue;
`;

const BodyCenter = styled.div`
  margin: 0 auto;
  border: 1px solid red;
  font-size: 28px;
  width: 60%;
`;

const Lesson = ()=>{
  return (
    <AppLayout>
      <MainPageCategory/>
        <Body>
          <BodyCenter>
            <div>Hello , next!</div>
          </BodyCenter>
        </Body>
    </AppLayout>
  );
}

export default Lesson;