import Asset3D from "../../components/Asset3D";
import { CompanyType } from "../../types";

const Company = ({ company }: { company: CompanyType }) => {
    return (
        <div
            id="Company"
            className="flex h-[900px] max-h-screen min-h-[700px] items-center bg-orange-200 p-10"
        >
            <div className="mx-auto grid h-full w-full max-w-screen-xl gap-2 sm:grid-rows-4 sm:px-10 md:grid-cols-2 md:grid-rows-2 md:p-7 lg:grid-cols-3 lg:grid-rows-2">
                <div className="row-start-1 flex flex-col bg-gray-500 p-10">
                    <h1 className="border-b-2 border-gray-600 pb-3 text-4xl font-semibold">
                        {company.name}
                    </h1>
                    <p className="my-5 text-lg">{company.description}</p>
                </div>

                <div className="col-start-3 row-start-1 bg-gray-500 p-10 ">
                    <div className="h-[80%] bg-yellow-100">GRAFICA LINEAL</div>
                    <div className="h-[20%] bg-blue-200">STOCKS</div>
                </div>
                <div className="row-start-2 bg-gray-500 p-10 ">
                    GRAFICO DE PASTEL
                </div>

                {company.scenes.map((asset) => (
                    <Asset3D asset={asset} />
                ))}
            </div>
        </div>
    );
};

export default Company;
