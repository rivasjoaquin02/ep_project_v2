interface Props {
    avatar: string;
    name?: string;
}

const MonopoliesImage = ({ avatar, name }: Props) => {
    return (
        <div className="h-[80%] ">
            <img src={avatar} alt={`Logo de ${name}`} className="h-full" />
        </div>
    );
};

export default MonopoliesImage;
