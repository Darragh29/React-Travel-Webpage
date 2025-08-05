function Navbar() {
    return (
        <nav className="navbar">
            <a href={""} id={"page-title"}>Travel Webpage</a>
            <ul className="nav">
                <li className="nav-item"><a href={"#"}>Itinerary</a></li>
                <li className="nav-item"><a href={"#"}>Gallery</a></li>
                <li className="nav-item"><a href={"#"}>Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;