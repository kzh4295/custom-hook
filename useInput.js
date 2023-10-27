import { useState } from 'react';

const useInput = (initialValue, size) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const changeValue = (inputValue, size) => {
    if (inputValue.length <= size) {
      setInputValue(inputValue);
    }
  };

  return {
    inputValue,
    changeValue,
    size,
  };
};

function App() {
  const { inputValue, changeValue, size } = useInput('', 5);
  return (
    <div className='App'>
      <input
        value={inputValue}
        onChange={(e) => {
          changeValue(e.target.value, size);
        }}
      />
      <div>{inputValue}</div>
    </div>
  );
}

export default App;

// useInput의 값을 useState로 상태 관리 >>> value값을 관리
// <input>에서 value값이 onChange할떄 변경됨
// setValue에 값을 변경해줌
