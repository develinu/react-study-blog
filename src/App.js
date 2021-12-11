import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleModify] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [likeCount, likeCountModify] = useState(0)
  let [modal, modalModify] = useState(false)

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
        <h3 onClick={ () => { modalModify(!modal) } }> { title[2] } </h3>
        <p> 2월 19일 발행 </p>
        <hr/>
      </div>

      <button onClick={ () => {modalModify(!modal)} }>Modal Open/Close</button>

      {
        modal
        ? <Modal />
        : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <o>상세내용</o>
    </div>
  )
}

export default App;
