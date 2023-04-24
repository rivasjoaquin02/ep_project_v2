const ROUTES = [
    { name: "Inicio" },
    { name: "Monopolios" },
    { name: "Creditos" },
];

const Footer = () => {
    return (
        <div className="bg-sky-200 ">
            <div className="mx-auto max-w-screen-xl py-4 text-center">
                <ul className="flex w-full items-center justify-center">
                    {ROUTES.map((route) => (
                        <li key={route.name} className="px-3">
                            {route.name}
                        </li>
                    ))}
                </ul>
                <div>
                    Copyright © 2023 - All rights reserved || Created By:
                    strange
                </div>
            </div>
        </div>
    );
};

export default Footer;
