import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Monopolies from "./pages/Monopolies/Monopolies";
import Credits from "./pages/Credits";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./pages/Monopolies/Company";

import COMPANIES from "./data/companies.json";

export default function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Home />
                <Routes>
                    <Route
                        path="/"
                        element={<Monopolies companies={COMPANIES} />}
                    />
                    {COMPANIES.map((company) => (
                        <Route
                            path={`/monopoly/${company.aka}`}
                            element={<Company company={company} />}
                        />
                    ))}
                </Routes>
                <Credits />
                <Footer />
            </div>
        </Router>
    );
}
