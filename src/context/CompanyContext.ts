import { createContext, useContext } from "react";
import { CompanyType } from "../types";

export const CompanyContext = createContext<CompanyType | null>(null);

const useCompanyContext = () => {
    const context = useContext(CompanyContext);
    if (!context)
        throw new Error(
            "Company.* component must be rendered as child of Company component"
        );
    return context;
};

export default useCompanyContext;
