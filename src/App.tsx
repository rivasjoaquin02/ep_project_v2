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
import Asset3D from "./components/Asset3D";
import Model from "./components/Model";
import Scene from "./components/Scene";

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
                                    <Company.Info>
                                        <Company.Title />
                                        <Company.Description />
                                    </Company.Info>

                                    <Company.BarGraph>
                                        <BarChart
                                            title="Plusvalia"
                                            metrics={company.metrics}
                                        />
                                        <Company.Stock />
                                    </Company.BarGraph>

                                    <Company.CakeGraph>
                                        <PieChart
                                            title="Principales Productos"
                                            metrics={company.metrics}
                                        />
                                    </Company.CakeGraph>
                                    {/* <Scene>
                                        <Model
                                            path="src/assets/3d/amazon/alexa.glb"
                                            rotation={[0.3, Math.PI / 1.6, 0]}
                                        />
                                    </Scene> */}
                                    {company.assets.map((asset) => (
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
