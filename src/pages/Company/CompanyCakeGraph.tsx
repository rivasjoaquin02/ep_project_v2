import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CompanyCakeGraph = ({ children }: Props) => {
    return <div className="row-start-2 p-5 ">{children}</div>;
};

export default CompanyCakeGraph;
