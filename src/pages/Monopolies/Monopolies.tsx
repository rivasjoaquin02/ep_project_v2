import { CompanyType } from "../../types";
import MonopoliesCard from "./MonopoliesCard";
import MonopoliesImage from "./MonopoliesImage";
import MonopoliesInfo from "./MonopoliesInfo";

const Monopolies = ({ companies }: { companies: Array<CompanyType> }) => {
    return (
        <div
            id="monopolies"
            className="flex h-screen min-h-[700px] items-center bg-blue-200"
        >
            <ul className="mx-auto grid h-full w-full max-w-screen-xl p-28 sm:grid-cols-1 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 lg:py-40">
                {companies.map((company) => (
                    <Monopolies.Card aka={company.aka}>
                        <Monopolies.Image avatar={company.aka} />
                        <Monopolies.Info
                            name={company.name}
                            website={company.website}
                        />
                    </Monopolies.Card>
                ))}
            </ul>
        </div>
    );
};

Monopolies.Card = MonopoliesCard;
Monopolies.Image = MonopoliesImage;
Monopolies.Info = MonopoliesInfo;

export default Monopolies;
