import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleModify] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [likeCounts, likeCountsModify] = useState([])
  let [modal, modalModify] = useState(false)
  let [clickedTitleIdx, clickedTitleIdxModify] = useState(0)
  let [inputValue, inputValueModify] = useState('')

  function titleModifyHandler() {
    titleModify(['여자 코트 추천', ...title.slice(1,)])
  }

  function updateLikeCounts(idx) {
    if (!likeCounts[idx]) {
      likeCounts[idx] = 0
    }
    let _likeCounts = [...likeCounts]
    _likeCounts[idx]+=1
    likeCountsModify(_likeCounts)
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ titleModifyHandler }>버튼</button> */}
      {/* <div className="list">
        <h3> { title[0] } <span onClick={ () => { likeCountModify(++likeCount) } }>👍</span> {likeCount} </h3>
        <p> 2월 17일 발행 </p>
        <hr/>
        <h3> { title[1] } </h3>
        <p> 2월 18일 발행 </p>
        <hr/>
        <h3 onClick={ () => { modalModify(!modal) } }> { title[2] } </h3>
        <p> 2월 19일 발행 </p>
        <hr/>
      </div> */}

      {
        title.map((_t, idx) => {
          return (
            <div className="list" key={idx}>
              <h3 onClick={ ()=>{ clickedTitleIdxModify(idx) } } > { _t } <span onClick={ () => {updateLikeCounts(idx)} } >👍</span> {likeCounts[idx]} </h3>
              <p> 2월 18일 발행 </p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{inputValueModify(e.target.value)} } />
        <button onClick={ ()=>{titleModify([...title, inputValue])} }>저장</button>
      </div>

      {/* <input onChange={ (e)=>{ inputValueModify(e.target.value) } } /> */}
      
      <button onClick={ () => {modalModify(!modal)} }>Modal Open/Close</button>

      {
        modal
        ? <Modal title={title} clickedTitleIdx={clickedTitleIdx} />
        : null
      }

    </div>
  );
}

function Modal(props) {
  console.log(props)
  return (
    <div className="modal">
      <h2>{props.title[props.clickedTitleIdx]}</h2>
      <p>날짜</p>
      <o>상세내용</o>
    </div>
  )
}

export default App;
