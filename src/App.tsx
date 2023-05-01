import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Monopolies from "./pages/Monopolies/Monopolies";
import Company from "./pages/Company/Company";
import Credits from "./pages/Credits/Credits";
import Footer from "./components/Footer";

import COMPANIES from "./data/companies.json";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PieChart";

import Asset3D from "./components/3D/Asset3D";

// TODO: feature for Dark Mode
const App = () => {
    return (
        <Router>
            <div className="bg-bg">
                <NavBar />
                <Home />
                <Routes>
                    <Route
                        path="/"
                        element={<Monopolies companies={COMPANIES} />}
                    />
                    {COMPANIES.map((company) => (
                        <Route
                            key={company.aka}
                            path={`/monopoly/${company.aka}`}
                            element={
                                <Company key={company.aka} company={company}>
                                    <Company.Info>
                                        <Company.Title />
                                        <Company.Description />
                                    </Company.Info>

                                    <Company.BarGraph>
                                        <BarChart
                                            title="Plusvalia"
                                            metrics={company.bar_metrics}
                                        />
                                        <Company.Stock />
                                    </Company.BarGraph>

                                    <Company.CakeGraph>
                                        <PieChart
                                            title="Principales Productos"
                                            metrics={company.pastel_metrics}
                                        />
                                    </Company.CakeGraph>
                                    {company.assets.map((asset) => (
                                        <Asset3D
                                            key={asset.name}
                                            asset={asset}
                                        />
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
};

export default App;
