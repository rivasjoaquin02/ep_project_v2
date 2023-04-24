const HOME_TEXT =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum numquam aut possimus quo";

const Home = () => {
    return (
        <div id="home" className="flex py-20 min-h-[900px] items-center bg-green-200">
            <div className="mx-auto flex max-w-screen-xl gap-20 sm:flex-col sm:px-10 md:px-20 lg:flex-row">
                <h1 className="lg:w-[60%] text-center text-4xl font-semibold md:text-5xl lg:text-left lg:text-6xl">
                    {HOME_TEXT}
                </h1>
                <div className="mx-auto aspect-square w-[600px] bg-gray-500 "></div>
            </div>
        </div>
    );
};

export default Home;
