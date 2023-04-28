import { Person } from "../../types";
import PersonCard from "./PersonCard";

const Credits = ({ persons }: { persons: Array<Person> }) => {
    return (
        <div
            id="credits"
            className="mx-auto grid min-h-[500px] max-w-screen-xl px-6 py-20 xl:grid-cols-3"
        >
            <h2 className="text-center font-bold tracking-tight text-gray-400 sm:mb-10 sm:text-4xl md:text-5xl">
                Creditos a
            </h2>
            <ul className="grid md:grid-cols-3 xl:col-span-2">
                {persons.map((person) => (
                    <li key={person.name}>
                        <PersonCard
                            img_src={person.avatar}
                            title={person.name}
                            subtitle={person.role}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Credits;
