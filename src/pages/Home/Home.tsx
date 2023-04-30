const HOME_TEXT =
    "La Mercancia, Los medios y costos de produccion y la plusvalia";

const HOME_SUBTEXT = "en los principales monopolios tecnologicos mundiales";

// TODO: add image
const Home = () => {
    return (
        <div id="home" className="flex min-h-[900px] items-center px-10 py-20">
            <div className="container mx-auto flex max-w-screen-xl flex-col gap-20 md:px-20 lg:flex-row">
                <div className="flex flex-col text-center text-terciary lg:w-[60%] lg:text-left">
                    <h1
                        id="home-text"
                        className="mb-5 border-b-2 pb-5 font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        {HOME_TEXT}
                    </h1>
                    <p className="mb-6 text-xl leading-normal text-cuaterciary sm:text-xl sm:leading-8">
                        {HOME_SUBTEXT}
                    </p>
                    <a
                        href="/#monopolies"
                        className="mx-auto w-fit rounded-lg bg-terciary px-3 py-2 font-semibold  text-black lg:mx-0 "
                    >
                        Empezemos
                    </a>
                </div>
                <div className="mx-auto aspect-square w-[600px] bg-gray-500"></div>
            </div>
        </div>
    );
};

export default Home;
