import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CompanyDescription = ({ children }: Props) => {
    return <p className="my-5 text-lg">{children}</p>;
};

export default CompanyDescription;
