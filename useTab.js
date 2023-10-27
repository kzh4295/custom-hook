import React, { useState } from 'react';
import './App.css';

const contents = [
  {
    index: 1,
    content: 'tab1의 컨텐츠',
  },
  {
    index: 2,
    content: 'tab2의 컨텐츠',
  },
];

// 커스텀 훅 useTab 정의
const useTab = (initialVal) => {
  const [idx, setIdx] = useState(initialVal);
  const changeIdx = (newIdx) => {
    setIdx(newIdx);
  };
  return { idx, changeIdx };
};

function App() {
  // useTab 훅을 호출하여 초기값을 0으로 설정
  const { idx, changeIdx } = useTab(1);

  return (
    <div className='App'>
      {contents.map((ele, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              changeIdx(idx);
            }}
          >
            {ele.content}
          </button>
        );
      })}
      <div>{contents[idx].content}</div>
    </div>
  );
}

export default App;

// useTab을 먼저 정의
// useTab을 사용할 곳에서 어떻게 값을 받을지 확인
// 하나의 값을 넣었을때, 어떻게 화면에 나와야하는지 확인
// 다른 트리거를 통해 어떻게 화면이 바껴야하는지 확인

// initialIndex를 0으로 초기값 받아서 초기화면에 어떻게 나와야하나 확인
// 1탭을 클릭했을때, 일어나는 변화를 setIndex로 받기
// setIndex로 index 변수의 변화를 주기
// contents[index]를 불러와서 버튼 밑에 값에 할당
