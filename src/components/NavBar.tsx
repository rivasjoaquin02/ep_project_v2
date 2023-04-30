const WEB_TITLE = "WebSite Title";
export const ROUTES = [
    { name: "Inicio", route: "/#home" },
    { name: "Monopolios", route: "/#monopolies" },
    { name: "Creditos", route: "/#credits" },
];

const NavBar = () => {
    return (
        <header className="mica sticky top-0 z-50 h-16 w-full border-b-[2px] border-gray-500 border-opacity-5">
            <div
                id="navbar"
                className="mx-auto flex max-w-screen-xl justify-between p-4"
            >
                <h2 className="items-center text-xl font-semibold text-terciary">
                    {WEB_TITLE}
                </h2>
                <nav>
                    <ul className="flex items-center text-cuaterciary">
                        {ROUTES.map((route) => (
                            <li
                                key={route.name}
                                className="border-gray-400 px-3 pb-1 hover:rounded-[10px] hover:bg-gray-400 hover:text-black"
                            >
                                <a href={route.route}>{route.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
