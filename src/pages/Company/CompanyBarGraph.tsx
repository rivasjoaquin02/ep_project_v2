import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CompanyBarGraph = ({ children }: Props) => {
    return <div className="col-start-3 row-start-1 p-5">{children}</div>;
};

export default CompanyBarGraph;
