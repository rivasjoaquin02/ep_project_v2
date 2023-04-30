import useCompanyContext from "../../context/CompanyContext";

const CompanyDescription = () => {
    const { description } = useCompanyContext();

    return <p className="text-lg">{description}</p>;
};

export default CompanyDescription;
