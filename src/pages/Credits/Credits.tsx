import PERSONS from "../../data/credits.json";
import Card from "../../components/Card/Card";

// TODO: add avatars
const Credits = () => {
    return (
        <div
            id="credits"
            className="mx-auto grid min-h-fit  px-6 py-20 xl:grid-cols-3"
        >
            <h2 className="text-center font-bold tracking-tight text-gray-400 sm:mb-10 sm:text-4xl md:text-5xl">
                Creditos a
            </h2>
            <ul className="grid md:grid-cols-3 xl:col-span-2 p-10 md:gap-10 ">
                {PERSONS.map((person) => (
                    <li key={person.name}>
                        <Card link={person.social}>
                            <Card.Image src={person.avatar} />
                            <Card.Info>
                                <Card.Title title={person.name} />
                                <Card.Subtitle subtitle={person.role} />
                            </Card.Info>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Credits;
