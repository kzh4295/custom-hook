import { useState } from 'react';

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
  const { idx, changeIdx } = useTab(0);

  return (
    <div className='App'>
      {contents.map((ele, index) => {
        return (
          <button
            key={index}
            onClick={() => {
                // 질문!!!! changeIdx(idx)로 idx를 넣으면 왜 변화가 없는거죵!?
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

// initialIndex를 0으로 초기값 받아서 초기화면에 어떻게 나와야하나 확인
// 1탭을 클릭했을때, 일어나는 변화를 setIndex로 업데이트
// contents[index]를 불러와서 버튼 밑에 값에 할당
