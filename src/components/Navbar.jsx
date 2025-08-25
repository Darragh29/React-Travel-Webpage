import {Link, Outlet} from "react-router";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Link to={"/"} id={"page-title"}>Travel Webpage</Link>
                <ul className="nav">
                    <li className="nav-item"><Link to={"/destinations"}>Destinations</Link></li>
                    <li className="nav-item"><Link to={"/itinerary"}>Itinerary</Link></li>
                    <li className="nav-item"><Link to={"/gallery"}>Gallery</Link></li>
                    <li className="nav-item"><Link to={""}>Login</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;