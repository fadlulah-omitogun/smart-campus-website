import campus from "./assets/UMBC-Campus.jpg"


function Home(){

    return(
        <div className="bg-black/90 h-full">
            <div className=" flex justify-center h-[100vh]">
                <div className="bg-gradient-to-r from-slate-500 to-yellow-100 w-full h-[40vh] text-3xl text-yellow-400 font-bold">
                    <img src={campus} className="mix-blend-overlay h-full w-full"/>
                    Smart Campus
                </div>
            </div>
        </div>
    );
}

export default Home;