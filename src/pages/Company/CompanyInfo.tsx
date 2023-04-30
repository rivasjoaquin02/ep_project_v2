import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CompanyInfo = ({ children }: Props) => {
    return (
        <div className="flex flex-col gap-5 p-5">
            {children}
        </div>
    );
};

export default CompanyInfo;
