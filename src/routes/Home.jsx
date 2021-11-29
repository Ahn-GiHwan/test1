import React from 'react';
import LinkCompo from '../components/LinkCompo';

const Home = ({title}) => {
  return (
    <div className="wrap">
      <h1>{title}</h1>
        <LinkCompo path='home' btnTitle="면접 연습하기"/>
        <LinkCompo path='addQuestion' btnTitle="내 질문 등록하기"/>
    </div>
  );
};

export default Home;