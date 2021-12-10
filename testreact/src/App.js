import react, { useEffect } from "react"
import './App.css';
import useSWR, { SWRConfig, useSWRConfig } from 'swr'
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data)

function Dash(){
  const result = useSWR('http://localhost:3333')
  const { data, error, isValidating} = result
  const config = useSWRConfig()
  const { refreshInterval, mutate, cache, ...restConfig } = config
  useEffect(()=>{
    console.log("in useEffect")
  },[])
  return(
    <div>
    </div>
  )
}

function Tool(){
  const result = useSWR('http://localhost:3333')
  const { data, error, isValidating, mutate } = result
  return(
    <div>
      {/* {data} */}
    </div>
  )
}

function App() {
  // const { data, error, isValidating, mutate } = useSWR('http://localhost:3333',fetcher)
  // const { data, error, isValidating, mutate } = useSWR(key, fetcher, options)
  return (
    <SWRConfig value={{
      refreshInterval:3000,
      fetcher,
      provider:() => new Map()
    }}>
      <div className="App">
        <Dash />
        <Tool />
      </div>
    </SWRConfig>
  );
}

export default App;
