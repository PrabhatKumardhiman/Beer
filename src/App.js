import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';

function App() {
  const [beers, setBeers] = useState([])
  
  const fetchData = async () => {
    const resp = await fetch('https://api.punkapi.com/v2/beers?per_page=80')
    const json =await resp.json()
    setBeers(json) 
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navbar setBeers = {setBeers} />
      <ImageContainer beers = {beers}/>
    </div>
  );
}

export default App;
