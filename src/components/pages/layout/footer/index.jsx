import footerImg from "../../../../providers/footer-images";
import { useTheme } from "../../../../providers/theme";

export default function Footer() {
    const darkTheme = useTheme()
    return (
        <footer className={` ${darkTheme ? "bg-[#333]" : "bg-white"} h-64 w-full font-rubik flex justify-center sm:h-80`}>
            <div className="w-[95%] h-full  flex justify-around items-center sm:flex-col">
                <div>
                    <div>
                        <h1 className={`${darkTheme ? "text-white" : "text-black"} text-5xl  font-bold md:text-3xl sm:text-center`}>Brands available</h1>
                    </div>
                    <div className="mt-5 md:mt-2">
                        <h5 className={` ${darkTheme ? "text-slate-300" : "text-[#4c4747]"} text-3xl font-medium md:text-2xl   sm:text-center`}>Famous brands</h5>
                    </div>
                    <div className="w-64 mt-3">
                        <p className="text-gray-400 md:text-sm">We have available stock for all famous brands you can order from our website</p>
                    </div>
                </div>
                <div className="flex h-10 items-center">
                    {footerImg.map((_, index) => (
                        <div key={index}>
                            <img className="w-36 ml-5 sm:w-10 sm:ml-3" src={_} alt="Team" />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}