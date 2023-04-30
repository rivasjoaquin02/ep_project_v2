const CardSubtitle = ({ subtitle }: { subtitle: string }) => {
    return (
        <h3 className="text-sm font-semibold leading-6 text-indigo-600">
            {subtitle}
        </h3>
    );
};

export default CardSubtitle;
