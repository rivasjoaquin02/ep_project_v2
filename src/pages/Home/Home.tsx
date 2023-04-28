export const HOME_TEXT =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum numquam aut possimus quo";

const Home = () => {
    return (
        <div id="home" className="flex min-h-[900px] items-center  py-20">
            <div className="mx-auto flex max-w-screen-xl gap-20 sm:flex-col sm:px-10 md:px-20 lg:flex-row">
                <h1 className="text-center text-4xl font-semibold md:text-5xl lg:w-[60%] lg:text-left lg:text-6xl">
                    {HOME_TEXT}
                </h1>
                <div className="mx-auto aspect-square w-[600px] bg-gray-500 "></div>
            </div>
        </div>
    );
};

export default Home;
