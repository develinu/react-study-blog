import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleModify] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [likeCount, likeCountModify] = useState(0)

  function titleModifyHandler() {
    titleModify(['여자 코트 추천', ...title.slice(1,)])
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ titleModifyHandler }>버튼</button>
      <div className="list">
        <h3> { title[0] } <span onClick={ () => { likeCountModify(++likeCount) } }>👍</span> {likeCount} </h3>
        <p> 2월 17일 발행 </p>
        <hr/>
        <h3> { title[1] } </h3>
        <p> 2월 18일 발행 </p>
        <hr/>
        <h3> { title[2] } </h3>
        <p> 2월 19일 발행 </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
