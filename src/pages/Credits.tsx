import PERSONS from "../data/credits.json";

const Credits = () => {
    return (
        <div
            id="credits"
            className="mx-auto grid min-h-[500px] max-w-screen-xl px-6 py-20  xl:grid-cols-3"
        >
            <h2 className="text-center font-bold tracking-tight text-gray-400 sm:mb-10 sm:text-4xl md:text-5xl  ">
                Creditos a
            </h2>
            <ul className="grid md:grid-cols-3 xl:col-span-2">
                {PERSONS.map((person) => (
                    <li
                        key={person.name}
                        className="flex flex-col items-center gap-x-6"
                    >
                        <img
                            className="h-64 w-64 rounded-md hover:shadow-2xl"
                            src={person.avatar}
                        />
                        <div className="my-3 text-center">
                            <h3 className="text-2xl  font-semibold leading-7 tracking-tight text-gray-200">
                                {person.name}
                            </h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">
                                {person.role}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Credits;
