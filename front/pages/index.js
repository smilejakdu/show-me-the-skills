import React , {useState} from 'react';
import AppLayout from '../components/AppLayout/AppLayout';
import MainPageCategory from '../components/MainPageCategory/MainPageCategory';


const Lesson = ()=>{
  return (
    <AppLayout>
      <MainPageCategory/>
      <div style={{fontSize:"100px"}}>Hello , next!</div>
    </AppLayout>
  );
}

export default Lesson;