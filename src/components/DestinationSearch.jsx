import DestinationCard from "./DestinationCard.jsx";
import SearchBar from "./SearchBar.jsx";
import DestinationList from "./DestinationList.jsx";
import {useEffect, useState} from "react";

function DestinationSearch(){
    const [search, setSearch] = useState("");
    const [destination, setDestination] = useState([]);
    const [favourites, setFavourites] = useState([]);

    function handleFavourites(destinationId){
        if(destinationId){
            if(favourites.includes(destinationId)){
                setFavourites(favourites.filter(fav => fav !== destinationId));
            }
            else{
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
            <SearchBar onSearch={setSearch} />
            <p>{favourites}</p>
            <DestinationList destinations={filteredData} onFavouriteClick={handleFavourites} favourites={favourites} />
        </div>
    )
}

export default DestinationSearch;