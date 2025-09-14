function SearchBar({onSearch}) {
    return (
            <div className="search">
                <input type="search" id="dest-search" placeholder="Search" onChange={(e) => onSearch(e.target.value)} />
            </div>
        )

}

export default SearchBar;