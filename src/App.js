import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';

function App() {
  const [beers, setBeers] = useState([])
  const [page, setPage] = useState(1)

  // Function to Fetch Data
  const fetchData = async () => {
    try {
      const resp = await fetch(`https://api.punkapi.com/v2/beers?per_page=80&page=${page}`)
      const json = await resp.json()
      // if the response from API Received
      if (json.length !== 0) {
        setBeers(json)
        // If response not received
      } else {
        alert("No More Data To Fetch")
      }
      // If there is any other error while Fecthing
    } catch (error) {
      console.error({ Error: "Internal server Error", msg: error.message })
    }
  }

  // Function to fetch Data when page number is chaged dyanmically 
  const fetchMoreData = async () => {
    try {
      const resp = await fetch(`https://api.punkapi.com/v2/beers?per_page=80&${page}`)
      const json = await resp.json()
      // if the response from API Received
      if (json.length !== 0) {
        setBeers(json)
        // If response not received
      } else {
        alert("No More Data To Fetch")
      }
      // If there is any other error while Fecthing
    } catch (error) {
      console.error({ Error: "Internal server Error", msg: error.message })
    }
  }

  // React Hook to rerender when state change 
  useEffect(() => {
    fetchData()// eslint-disable-next-line
  }, [page]) // rerender when value in  page change

  return (
    <div className="App">
      <Navbar setBeers={setBeers} />
      <ImageContainer beers={beers} page={page} setPage={setPage} fetchMoreData={fetchMoreData} />
    </div>
  );
}

export default App;
