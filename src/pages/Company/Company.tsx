import { ReactNode } from "react";

interface Props {
    info?: ReactNode;
    graph_bar?: ReactNode;
    graph_cake?: ReactNode;
    assets?: Array<ReactNode>;
}

const Company = ({ info, graph_bar, graph_cake, assets }: Props) => {
    return (
        <div
            id="company"
            className="flex h-[900px] max-h-screen min-h-[700px] items-center bg-orange-200 p-10"
        >
            <div className="mx-auto grid h-full w-full max-w-screen-xl gap-2 sm:grid-rows-4 sm:px-10 md:grid-cols-2 md:grid-rows-2 md:p-7 lg:grid-cols-3 lg:grid-rows-2">
                {info}
                {graph_bar}
                {graph_cake}
                {assets}
            </div>
        </div>
    );
};

export default Company;
