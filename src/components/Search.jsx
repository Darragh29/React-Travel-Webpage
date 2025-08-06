function Search(props) {
    return (
        <div className="search">
            <input type="search" id="dest-search" placeholder="Search" onChange={props.onChange}/>
        </div>
    )
}

export default Search;