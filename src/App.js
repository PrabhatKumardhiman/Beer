import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';

function App() {
  const [beers, setBeers] = useState([])
  const [page, setPage] = useState(1)
  console.log(page);

  const fetchData = async () => {
    try {
      const resp = await fetch(`https://api.punkapi.com/v2/beers?per_page=80&page=${page}`)
      const json = await resp.json()
      if (json.length !== 0) {
        setBeers(json)
      } else {
        alert("No More Data To Fetch")
      }
    } catch (error) {
      console.error({ Error: "Internal server Error", msg: error.message })
    }
  }

  const fetchMoreData = async () => {
    try {
      const resp = await fetch(`https://api.punkapi.com/v2/beers?per_page=80&${page}`)
      const json = await resp.json()
      if (json.length !== 0) {
        setBeers(json)
      } else {
        alert("No More Data To Fetch")
      }
    } catch (error) {
      console.error({ Error: "Internal server Error", msg: error.message })
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div className="App">
      <Navbar setBeers={setBeers} />
      <ImageContainer beers={beers} page={page} setPage={setPage} fetchMoreData={fetchMoreData} />
    </div>
  );
}

export default App;
