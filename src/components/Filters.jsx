function Filters({ continent, onContinentChange, sortOrder, onSortChange, showFavorites, onFavoritesToggle }) {
    return (
        <div className="filters">
            {/* Continent dropdown */}
            <select value={continent} onChange={(e) => onContinentChange(e.target.value)}>
                <option value="">All Continents</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>

            {/* Sort order dropdown */}
            <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
                <option value="asc">A → Z</option>
                <option value="desc">Z → A</option>
            </select>

            {/* Favorites toggle */}
            <label>
                <input type="checkbox" checked={showFavorites} onChange={(e) => onFavoritesToggle(e.target.checked)} />
                Favorites only
            </label>
        </div>
    );
}

export default Filters;
