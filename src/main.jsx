import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {StrictMode} from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import Destinations from "./pages/destinations.jsx";
import Navbar from "./components/Navbar.jsx";
import Itinerary from "./pages/Itinerary";
import Gallery from "./pages/gallery.jsx";
import Destination from "./pages/destination.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Navbar />}>
                <Route index path="/" element={<App />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/destinations/:id" element={<Destination />} />
                <Route path="/itinerary" element={<Itinerary />} />
                <Route path="/gallery" element={<Gallery />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
