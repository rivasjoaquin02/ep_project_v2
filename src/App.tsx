import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Monopolies from "./pages/Monopolies/Monopolies";
import Company from "./pages/Company/Company";
import Credits from "./pages/Credits/Credits";
import Footer from "./components/Footer";

import Asset3D from "./components/Asset3D";

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
                            element={
                                <Company company={company}>
                                    <Company.BarGraph />
                                    <Company.Info>
                                        <Company.Title />
                                        <Company.Description />
                                    </Company.Info>
                                    <Company.CakeGraph />
                                    {company.scenes.map((asset) => (
                                        <Asset3D asset={asset} />
                                    ))}
                                </Company>
                            }
                        />
                    ))}
                </Routes>
                <Credits />
                <Footer />
            </div>
        </Router>
    );
}
