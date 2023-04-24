import { Link } from "react-router-dom";
import { CompanyType } from "../../types";
import Company from "./Company";

const Monopolies = ({ companies }: { companies: Array<CompanyType> }) => {
    return (
        <div
            id="monopolies"
            className="flex h-screen min-h-[700px] items-center bg-blue-200"
        >
            <ul className="mx-auto grid h-full w-full max-w-screen-xl p-28 sm:grid-cols-1 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 lg:py-40">
                {companies.map((company) => (
                    <Link
                        to={`/monopoly/${company.aka}`}
                        className="m-auto flex h-96 w-64 flex-col overflow-hidden rounded-xl shadow-md hover:shadow-2xl"
                    >
                        <li key={company.aka} className="h-full">
                            <div className="h-[80%] ">
                                <img
                                    src={company.avatar}
                                    alt={`Logo de ${company.aka}`}
                                    className="h-full"
                                />
                            </div>
                            <div className="flex h-[20%] flex-col justify-center bg-gray-200 text-center">
                                <h2 className="text-xl font-semibold">
                                    {company.name}
                                </h2>
                                <p className="text-gray-500">
                                    {company.website}
                                </p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Monopolies;
