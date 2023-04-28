import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    aka: string;
    children: ReactNode;
}

const MonopoliesCard = ({ aka, children }: Props) => {
    return (
        <Link
            to={`/monopoly/${aka}`}
            className="m-auto flex h-96 w-64 flex-col overflow-hidden rounded-xl shadow-md hover:shadow-2xl"
        >
            <li key={aka} className="h-full">
                {children}
            </li>
        </Link>
    );
};

export default MonopoliesCard;
