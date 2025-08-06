import DestinationCard from "./components/DestinationCard.jsx";
import Navbar from "./components/Navbar.jsx";
import Search from "./components/Search.jsx";
import './App.css';
import data from './data.json';
import { useState} from "react";


function App() {
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    })

  return (
    <>
        <Navbar />
        <Search onChange={handleSearch} />
        <div className="destinations">
            {filteredData.map((item, index) => {
            return (<DestinationCard key={index} destination={item.name} country={item.country} image={item.image} fact={item.fact}/>)
        })}
        </div>
    </>
  )
}

export default App
