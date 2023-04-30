interface Props {
    src: string;
    height?: string;
}

const CardImage = ({ src, height = "300" }: Props) => {
    return (
        <img
            className={`aspect-square grayscale hover:grayscale-0 md:h-[${height}px] max-h-[200px] w-full rounded-md transition duration-700 ease-in-out md:max-h-[300px] lg:max-h-[400px]`}
            src={src}
        />
    );
};

export default CardImage;
