import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Monopolies from "./pages/Monopolies/Monopolies";
import Credits from "./pages/Credits/Credits";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./pages/Company/Company";

// constants
import COMPANIES from "./data/companies.json";
import PERSONS from "./data/credits.json";

import CompanyInfo from "./pages/Company/CompanyInfo";
import CompanyBarGraph from "./pages/Company/CompanyBarGraph";
import CompanyCakeGraph from "./pages/Company/CompanyCakeGraph";
import Asset3D from "./components/Asset3D";
import CompanyTitle from "./pages/Company/CompanyTitle";
import CompanyDescription from "./pages/Company/CompanyDescription";

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
                                <Company
                                    info={
                                        <CompanyInfo>
                                            <CompanyTitle>
                                                {company.name}
                                            </CompanyTitle>
                                            <CompanyDescription>
                                                {company.description}
                                            </CompanyDescription>
                                        </CompanyInfo>
                                    }
                                    graph_bar={<CompanyBarGraph />}
                                    graph_cake={<CompanyCakeGraph />}
                                    assets={company.scenes.map((asset) => (
                                        <Asset3D asset={asset} />
                                    ))}
                                />
                            }
                        />
                    ))}
                </Routes>
                <Credits persons={PERSONS} />
                <Footer />
            </div>
        </Router>
    );
}
