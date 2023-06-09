import { ReactNode } from "react";
import { CompanyContext } from "../../context/CompanyContext";
import { CompanyType } from "../../types";

import CompanyInfo from "./CompanyInfo";
import CompanyBarGraph from "./CompanyBarGraph";
import CompanyCakeGraph from "./CompanyCakeGraph";
import CompanyTitle from "./CompanyTitle";
import CompanyDescription from "./CompanyDescription";
import CompanyStock from "./CompanyStock";

interface Props {
    company: CompanyType;
    children: ReactNode;
}

const Company = ({ company, children }: Props) => {
    return (
        <CompanyContext.Provider value={company}>
            <div
                id="company"
                className="flex h-screen min-h-[700px] items-center p-10"
            >
                <div className="mx-auto grid h-full w-full gap-2 sm:grid-rows-4 sm:px-10 md:grid-cols-2 md:grid-rows-2 md:p-7 lg:grid-cols-3 lg:grid-rows-2">
                    {children}
                </div>
            </div>
        </CompanyContext.Provider>
    );
};

Company.Info = CompanyInfo;
Company.Title = CompanyTitle;
Company.Description = CompanyDescription;
Company.BarGraph = CompanyBarGraph;
Company.Stock = CompanyStock;
Company.CakeGraph = CompanyCakeGraph;

export default Company;
