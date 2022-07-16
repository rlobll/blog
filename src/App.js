/* eslint-disable */
//터미널의 문법 지적(warning)을 안보이게 해준다.
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["리액트", "어려웡", "렌더링"]);
  let [좋아요, 좋아요변경] = useState(0);
  let posts = "리액트 어려웡";

  function 제목변경() {
    var newArray = [...글제목];
    newArray[0] = "아이폰";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>은비 블로그</div>
      </div>
      <div>
        <button onClick={제목변경}>클릭</button>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            😊
          </span>
          {좋아요}
        </h3>
        <p>6월 26일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>6월 27일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>6월 28일 발행</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

//Component로 자주 만드는 애들
//1.반복출현하는 HTML덩어리들 ex)className="list" 이런애들
//2.자주 변경되는 HTML UI들
//3.다른 페이지를 만들 때도 컴포넌트로 만듦

//Component 많이 만들때 단점
//1.state 쓸 때 복잡해짐 (상위 component에서 만든 state쓰려면 props문법 이용해야함)
