import logo from './logo.svg';
import './App.css';
import useSWR from 'swr'
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data)

function App() {
  const { data, error } = useSWR('http://localhost:3333',fetcher)
  console.log(data,error)
  return (
    <div className="App">
      {data}    
    </div>
  );
}

export default App;
