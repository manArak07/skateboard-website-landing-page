import { CiDroplet } from "react-icons/ci";
import { LiaWeightSolid } from "react-icons/lia";
import { CiLineHeight } from "react-icons/ci";
import HomeInfo from "../../common/home-info";
export default function Home() {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="w-[99%] flex justify-center min-h-screen">
               
                <div className="w-[35%] flex flex-col  h-96 ">
                    <div className="ml-10">
                        <h1 className="text-6xl font-semibold">skateboarding done right</h1>
                    </div>
                    <div className="w-56 ml-10 mt-10">
                        <p className="text-gray-400">Wood longboard in Best quality for skateboard lovers</p>
                    </div>
                    <div className="flex ml-10 mt-12 relative items-center">
                        <div className="w-20  h-20 bg-orange-500 rounded-full"></div>
                        <div className="absolute left-6">
                            <h4 className=" text-4xl font-semibold">Order now</h4>
                        </div>
                    </div>
                </div>

                <div className="w-[31%] flex items-start min-h-screen ">
                    <div>
                        <img className="w-[500px]" src="/homepage.avif" alt="homepage banner" />
                    </div>
                </div>


                <div className="w-[33%] flex flex-col justify-between h-96 items-center ">

                    <HomeInfo Component={CiDroplet} title={"Color"} info={"Orange"}/>
                    <HomeInfo Component={LiaWeightSolid} title={"Weight"} info={"8KG"}/>
                    <HomeInfo Component={CiLineHeight} title={"Dimemsion"} info={"8.25 x 31.875"}/>
              
                  
                </div>
            </div>

        </div>
    )
}