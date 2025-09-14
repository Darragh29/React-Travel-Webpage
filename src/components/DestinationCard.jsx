import {Link} from "react-router";

function DestinationCard(props) {

    return (
        <div id="destination-card">
            <h3 id="mini-title">{props.destination}, {props.country}</h3>
            <img alt={`${props.destination} Destination`} src={props.image} id={"destination-img"}/>
            <p id={"destination-fact"}>Fact: {props.fact}</p>
            <div>
                <Link to={`./${props.id}`} className={"details-button"}>More Details</Link>
                <button className={"details-button"} onClick={props.onFavouriteClick}>Fav</button>
            </div>
        </div>
    )
}

export default DestinationCard;