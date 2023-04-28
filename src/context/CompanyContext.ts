import { createContext } from "react";
import COMPANIES from "../data/companies.json";
import { CompanyType } from "../types";

export const CompanyContext = createContext<Array<CompanyType>>(COMPANIES);
