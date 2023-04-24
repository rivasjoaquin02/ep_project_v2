const WEB_TITLE = "WebSite Title";
const ROUTES = [
    { name: "Inicio", route: "/#home" },
    { name: "Monopolios", route: "/#monopolies" },
    { name: "Creditos", route: "/#credits" },
];

const NavBar = () => {
    return (
        <div className="sticky top-0 z-10 ">
            <div className="mx-auto max-w-screen-xl ">
                <nav className="flex w-full justify-between p-4 ">
                    <h2 className="items-center text-2xl font-semibold">
                        {WEB_TITLE}
                    </h2>
                    <ul className="flex items-center">
                        {ROUTES.map((route) => (
                            <li
                                key={route.name}
                                className="border-gray-400 px-3 pb-1 hover:border-b-2"
                            >
                                <a href={route.route}>{route.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
