import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CompanyTitle = ({ children }: Props) => {
    return (
        <h1 className="border-b-2 border-gray-600 pb-3 text-4xl font-semibold">
            {children}
        </h1>
    );
};

export default CompanyTitle;
