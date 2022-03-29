
import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/StarShipCard';
import {fetchData} from './services/sw-api'



function App() {

  const [starships, setStarships] = useState([])

    useEffect(async () =>{
      const data = await fetchData()
      setStarships(data)
      
    },[])
    
console.log(starships)

  return (
    <div className="App">
      <header className='title'>STAR WARS</header>
    {starships.map((data, index) =>{
      return <Card data={data} key={index}/>
    })}
      

    </div>
  );
}

export default App;
