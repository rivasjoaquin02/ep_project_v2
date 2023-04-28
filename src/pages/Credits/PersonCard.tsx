interface Props {
    img_src: string;
    title: string;
    subtitle: string;
}

const PersonCard = ({ img_src, title, subtitle }: Props) => {
    return (
        <div className="flex flex-col items-center gap-x-6">
            <img
                className="h-64 w-64 rounded-md hover:shadow-2xl"
                src={img_src}
            />
            <div className="my-3 text-center">
                <h3 className="text-2xl  font-semibold leading-7 tracking-tight text-gray-400">
                    {title}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default PersonCard;
