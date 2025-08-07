import DestinationCard from "./DestinationCard.jsx";
import {useState} from "react";
import data from "../data.json";

function DestinationSearch(){
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    const filteredData = data.filter((item) => {
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