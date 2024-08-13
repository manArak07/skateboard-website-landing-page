import { CiDroplet } from "react-icons/ci";
import { LiaWeightSolid } from "react-icons/lia";
import { CiLineHeight } from "react-icons/ci";
import HomeInfo from "../../common/home-info";
export default function Home() {
    return (
        <div className="h-[600px] md:h-[400px] w-full flex justify-center items-center  sm:h-[1000px] xs:h-[900px]">
            <div className="w-[99%] flex justify-center h-[600px] md:h-[400px] sm:flex-col sm:h-[1000px] xs:h-[900px] sm:justify-center sm:items-center sm:w-full">
               
                <div className="w-[35%] md:w-[30%] flex flex-col h-96 z-40 md:h-72 sm:flex-row sm:justify-around sm:items-center sm:h-16  sm:w-full ">
                    <div className="ml-10 md:ml-0 sm:w-full">
                        <h1 className="text-6xl font-semibold l:text-5xl lg:text-4xl md:text-3xl sm:text-xl sm:text-center xs:text-lg">skateboarding done right</h1>
                    </div>
                    <div className="w-56 ml-10 mt-10 md:ml-0 sm:w-full sm:mt-10 sm:text-center sm:flex">
                        <p className="text-gray-400 md:text-sm xs:text-[10px]">Wood longboard in Best quality for skateboard lovers</p>
                    </div>
                    <div className="flex ml-10 mt-12 relative items-center md:ml-0 sm:w-full sm:mt-0 sm:justify-center">
                        <div className="w-20 h-20 l:w-16 l:h-16 lg:w-14 lg:h-14 bg-orange-500 rounded-full sm:w-10 sm:h-10 xs:h-6 xs:w-6"></div>
                        <div className="absolute left-6 sm:left-14 xs:left-10 sm:flex sm:justify-center">
                            <h4 className=" text-4xl font-semibold lg:text-2xl sm:text-xl xs:text-sm">Order now</h4>
                        </div>
                    </div>
                </div>

                <div className="w-[31%] md:w-[39%] lg:w-[49%] sm:w-full flex items-start justify-center h-[600px] sm:h-[500px] xs:h-[300px]">
                    <div>
                        <img className="w-[500px] " src="/homepage.avif" alt="homepage banner" />
                    </div>
                </div>


                <div className="w-[30%] xs:mt-20  lg:w-[20%]   flex flex-col justify-between h-96 l:h-80 lg:h-72 md:h-60 items-center ">

                    <HomeInfo Component={CiDroplet} title={"Color"} info={"Orange"}/>
                    <HomeInfo Component={LiaWeightSolid} title={"Weight"} info={"8KG"}/>
                    <HomeInfo Component={CiLineHeight} title={"Dimemsion"} info={"8.25 x 31.875"}/>
              
                  
                </div>
            </div>

        </div>
    )
}