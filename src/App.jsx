import DestinationCard from "./components/DestinationCard.jsx";
import Navbar from "./components/Navbar.jsx";
import './App.css';
import data from './data.json';


function App() {
  return (
    <>
        <Navbar />
        <div className="destinations">
            {data.map((item, index) => {
            return (<DestinationCard key={index} destination={item.name} country={item.country} image={item.image} fact={item.fact}/>)
        })}
        </div>
    </>
  )
}

export default App
