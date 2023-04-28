import useCompanyContext from "../../context/CompanyContext";

const CompanyDescription = () => {
    const { description } = useCompanyContext();

    return <p className="my-5 text-lg">{description}</p>;
};

export default CompanyDescription;
