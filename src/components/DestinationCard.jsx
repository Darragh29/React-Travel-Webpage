function DestinationCard(props) {

    return (
        <div id="destination-card">
            <h3 id="mini-title">{props.destination}, {props.country}</h3>
            <img alt={`${props.destination} Destination`} src={props.image} id={"destination-img"}/>
            <p id={"destination-fact"}>Fact: {props.fact}</p>
        </div>
    )
}

export default DestinationCard;