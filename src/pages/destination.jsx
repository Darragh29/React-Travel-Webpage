import {useParams} from "react-router";
import {useEffect,useState} from "react";

function Destination(){

    const [destination, setDestination] = useState([]);

    let {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/destinations/${id}`)
        .then(res => res.json())
        .then(data => setDestination(data))
    },[id])


    return(
        <div className="destination-page">
            {destination ? (
                <>
                    <h1>{destination.name}</h1>
                    <img src={destination.image} alt={destination.name} />
                    <div className="destination-details">
                        <p><strong>Country:</strong> {destination.country}</p>
                        <p><strong>Continent:</strong> {destination.continent}</p>
                        <p><strong>Fun Fact:</strong> {destination.fact}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Destination