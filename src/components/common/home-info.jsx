import { useTheme } from "../../providers/theme"

export default function HomeInfo({Component, title, info}) {
    const darkTheme = useTheme()
    return (
        <div className="flex  ">
            <div className=" flex justify-center items-center  w-20 h-20 l:w-16 l:h-16 lg:w-12 lg:h-12 rounded-xl lg:rounded-lg bg-orange-500">
                <Component className="text-white w-12 h-12 l:w-8 l:h-8 lg:w-6 lg:h-6" />
            </div>
            <div className="h-20 w-32 flex flex-col justify-center ml-5 l:h-16 lg:h-12">
                <p className={`${darkTheme ? "text-white " : "text-black" } font-semibold  text-xl sm:text-lg `}>{title}</p>
                <p className={`${darkTheme ? "text-slate-300 " : "text-gray-400 " } sm:text-sm`}>{info}</p>
            </div>
        </div>
    )
}