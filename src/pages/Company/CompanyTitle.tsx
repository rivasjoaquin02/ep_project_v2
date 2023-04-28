import useCompanyContext from "../../context/CompanyContext";

const CompanyTitle = () => {
    const { name } = useCompanyContext();

    return (
        <h1 className="border-b-2 border-gray-600 pb-3 text-4xl font-semibold">
            {name}
        </h1>
    );
};

export default CompanyTitle;
