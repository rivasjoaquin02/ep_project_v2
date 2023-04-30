import useCompanyContext from "../../context/CompanyContext";

const CompanyDescription = () => {
    const { description } = useCompanyContext();

    return <p className="text-lg text-gray-300">{description}</p>;
};

export default CompanyDescription;
