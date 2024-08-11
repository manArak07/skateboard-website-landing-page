import footerImg from "../../../../providers/footer-images";

export default function Footer() {
    return (
        <footer className="h-64 w-full  flex justify-center">
            <div className="w-[95%] h-full  flex justify-around items-center">
                <div>
                    <div>
                        <h1 className="text-5xl font-bold">Brands available</h1>
                    </div>
                    <div className="mt-5">
                        <h5 className="text-3xl font-medium text-[#4c4747]">Famous brands</h5>
                    </div>
                    <div className="w-64 mt-3">
                        <p className="text-gray-400">We have available stock for all famous brands you can order from our website</p>
                    </div>
                </div>
                <div className="flex h-10 items-center">
                    {footerImg.map((_, index) => (
                        <div key={index}>
                            <img className="w-36 ml-5" src={_} alt="Team" />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}