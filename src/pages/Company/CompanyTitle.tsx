import useCompanyContext from "../../context/CompanyContext";

const CompanyTitle = () => {
    const { name } = useCompanyContext();

    return (
        <h1 className="border-b-2 pb-3 text-4xl font-bold text-gray-200">
            {name}
        </h1>
    );
};

export default CompanyTitle;
