const CardTitle = ({ title }: { title: string }) => {
    return (
        <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-400">
            {title}
        </h3>
    );
};

export default CardTitle;
