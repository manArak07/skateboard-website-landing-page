export default function HomeInfo({Component, title, info}) {
    return (
        <div className="flex  ">
            <div className=" flex justify-center items-center  w-20 h-20 l:w-16 l:h-16 rounded-xl bg-orange-500">
                <Component className="text-white w-12 h-12 l:w-8 l:h-8" />
            </div>
            <div className="h-20 w-32 flex flex-col justify-center ml-5 ">
                <p className="font-semibold  text-xl">{title}</p>
                <p className="text-gray-400">{info}</p>
            </div>
        </div>
    )
}