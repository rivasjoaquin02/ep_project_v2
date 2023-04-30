import { ReactNode } from "react";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import { Link } from "react-router-dom";

interface Props {
    children: ReactNode;
    link?: string;
}

const Card = ({ children, link = "#" }: Props) => {
    return (
        <Link to={link} target="_blank">
            <div className="flex flex-col items-center gap-x-6 ">
                <div
                    id="card"
                    className="my-3 rounded-xl bg-gradient-to-r from-primary to-secundary p-[3px] transition duration-700 ease-in-out hover:shadow-custom"
                >
                    <div className="rounded-xl bg-[#1f1f1f] ">{children}</div>
                </div>
            </div>
        </Link>
    );
};

Card.Image = CardImage;
Card.Info = CardInfo;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

export default Card;
