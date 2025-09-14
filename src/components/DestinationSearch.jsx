import DestinationCard from "./DestinationCard.jsx";
import {useEffect, useState} from "react";

function DestinationSearch(){
    const [search, setSearch] = useState("");
    const [destination, setDestination] = useState([]);
    const [favourites, setFavourites] = useState([]);

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleFavourites(destinationId){
        if(destinationId){
            if(favourites.includes(destinationId)){
                setFavourites([...favourites, destinationId]);
            }
        }
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
            <p>{favourites}</p>
            <div className="destinations">
                {filteredData.length > 0 ? filteredData.map((item, index) => {
                    return (<DestinationCard key={index} id={item.id} destination={item.name} country={item.country} image={item.image} fact={item.fact}
                     onFavouriteClick={() => handleFavourites(item.id)} isFavourited={true}/>);
                }) : <h1>No Destinations Found</h1>}
            </div>
        </div>
    )
}

export default DestinationSearch;