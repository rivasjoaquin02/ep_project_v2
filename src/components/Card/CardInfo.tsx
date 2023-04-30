import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CardInfo = ({ children }: Props) => {
    return <div className="text-center p-2">{children}</div>;
};

export default CardInfo;
