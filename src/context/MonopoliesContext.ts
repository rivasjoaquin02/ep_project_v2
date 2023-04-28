import { createContext, useContext } from "react";
import { CompanyType } from "../types";

export const MonopoliesContext = createContext<Array<CompanyType> | null>(null);

export const useMonopoliesContext = () => {
    const context = useContext(MonopoliesContext);
    if (!context)
        throw new Error(
            "Monopolies.* component must be rendered as child of Monopolies component"
        );
    return context;
};
