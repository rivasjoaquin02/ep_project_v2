import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CompanyInfo = ({ children }: Props) => {
    return (
        <div className="row-start-1 flex flex-col bg-gray-500 p-10">
            {children}
        </div>
    );
};

export default CompanyInfo;
