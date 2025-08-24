import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {StrictMode} from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import Destinations from "./pages/destinations.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route element={<Navbar />}>
                <Route index path="/" element={<App />} />
                <Route path="/destinations" element={<Destinations />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
