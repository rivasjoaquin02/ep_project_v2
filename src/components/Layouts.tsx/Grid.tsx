interface Props {
    allWidth?: boolean;
    cols?: string;
    rows?: string;
}

// TODO: work in progress
const Grid = ({ allWidth, cols = "2", rows = "1" }: Props) => {
    return (
        <div className="flex min-h-fit items-center bg-slate-200 px-10 py-20">
            <div
                className={`container mx-auto grid grid-cols-${cols} grid-rows-${rows} ${
                    allWidth ? "max-w-screen-xl" : "max-w-full"
                } gap-20 md:px-20`}
            >
                <div className="bg-gray-500">TEST</div>
                <div className="bg-gray-500">TEST</div>
            </div>
        </div>
    );
};

export default Grid;
