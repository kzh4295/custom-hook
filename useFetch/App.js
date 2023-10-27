import { useFetch } from './useFetch';

function App() {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts');

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
