import { CompanyType } from "../../types";
import Card from "../../components/Card/Card";

const Monopolies = ({ companies }: { companies: Array<CompanyType> }) => {
    return (
        <div
            id="monopolies"
            className="flex h-screen max-h-fit min-h-[700px] items-center p-10"
        >
            <ul className="mx-auto grid h-full w-full max-w-screen-xl px-10 sm:grid-cols-1 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:py-40">
                {companies.map((company) => (
                    <li key={company.aka}>
                        <Card link={`/monopoly/${company.aka}`}>
                            <Card.Image src={company.avatar} height="350" />
                            <Card.Info>
                                <Card.Title title={company.name} />
                                <Card.Subtitle subtitle={company.website} />
                            </Card.Info>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Monopolies;
