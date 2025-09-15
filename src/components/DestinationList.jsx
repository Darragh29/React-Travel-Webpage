import DestinationCard from "./DestinationCard.jsx";

function DestinationList({destinations,onFavouriteClick, favourites}) {
    return (
        <div className={"destinations"}>
            {destinations.length > 0 ? (
                destinations.map((item) => (
                    <DestinationCard
                        key={item.id}
                        id={item.id}
                        destination={item.name}
                        country={item.country}
                        image={item.image}
                        fact={item.fact}
                        onFavouriteClick={() => onFavouriteClick(item.id)}
                        isFavourited={favourites.includes(item.id)}
                    />
                ))
            ) : (
                <h1>No Destinations Found</h1>
            )}
        </div>
    )
}

export default DestinationList;