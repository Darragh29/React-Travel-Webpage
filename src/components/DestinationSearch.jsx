import DestinationCard from "./DestinationCard.jsx";
import {useEffect, useState} from "react";

function DestinationSearch(){
    const [search, setSearch] = useState("");
    const [destination, setDestination] = useState([]);

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        fetch('http://localhost:3000/destinations')
            .then(res => res.json())
            .then(data => setDestination(data))
    },[])

    const filteredData = destination.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase()) || item.country.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div className="destination-search">
            <div className="search">
                <input type="search" id="dest-search" placeholder="Search" onChange={handleSearch}/>
            </div>
            <div className="destinations">
                {filteredData.length > 0 ? filteredData.map((item, index) => {
                    return (<DestinationCard key={index} destination={item.name} country={item.country} image={item.image} fact={item.fact}/>)
                }) : <h1>No Destinations Found</h1>}
            </div>
        </div>
    )
}

export default DestinationSearch;