import DestinationCard from "./DestinationCard.jsx";
import SearchBar from "./SearchBar.jsx";
import DestinationList from "./DestinationList.jsx";
import Filters from "./Filters.jsx";
import {useEffect, useState} from "react";

function DestinationSearch(){
    const [search, setSearch] = useState("");
    const [destination, setDestination] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [continentFilter, setContinentFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [showFavorites, setShowFavorites] = useState(false);


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

    const filteredData = destination
        .filter(item => continentFilter ? item.continent === continentFilter : true)
        .filter(item => !showFavorites || favourites.includes(item.id))
        .sort((a, b) => {
            if (sortOrder === "asc") return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });

    return (
        <div className="destination-search">
            <SearchBar onSearch={setSearch} />
            <Filters
                continent={continentFilter}
                onContinentChange={setContinentFilter}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
                showFavorites={showFavorites}
                onFavoritesToggle={setShowFavorites}
            />
            <DestinationList destinations={filteredData} onFavouriteClick={handleFavourites} favourites={favourites} />
        </div>
    )
}

export default DestinationSearch;