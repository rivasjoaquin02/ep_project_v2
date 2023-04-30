import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CompanyInfo = ({ children }: Props) => {
    return (
        <div
            id="company-info"
            className="flex flex-col gap-5 p-5 transition duration-500 ease-in "
        >
            {children}
        </div>
    );
};

export default CompanyInfo;
