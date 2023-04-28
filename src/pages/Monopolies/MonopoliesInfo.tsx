interface Props {
    name: string;
    website: string;
}

const MonopoliesInfo = ({ name, website }: Props) => {
    return (
        <div className="flex h-[20%] flex-col justify-center bg-gray-200 text-center">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-500">{website}</p>
        </div>
    );
};

export default MonopoliesInfo;
