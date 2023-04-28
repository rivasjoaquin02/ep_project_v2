import { ROUTES } from "./constants";

const Footer = () => {
return (
    <div className="bg-sky-200 ">
            <div id="routes" className="mx-auto max-w-screen-xl py-4 text-center">
                <ul className="flex w-full items-center justify-center gap-x-4">
                    {ROUTES.map((route) => (
                        <li key={route.name} className="">
                            {route.name}
                        </li>
                    ))}
                </ul>
                <div>
                    Copyright © 2023 - All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
