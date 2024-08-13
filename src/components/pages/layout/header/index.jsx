import { useEffect, useRef, useState } from "react"
import navBar from "../../../../providers/header-nav"
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function Header() {
    const [isMin, setIsMin] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const menuRef = useRef(null);


    const handleClick = () => {
        setIsClicked(prevClick => !prevClick)
       
    
    }



    const handleWidth = () => {
        if (window.innerWidth <= 900) {
            setIsMin(true)

        } else {
            setIsMin(false)
            setIsClicked(false)
        }
    }

    useEffect(() => {
        handleWidth()

        const handle = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsClicked(false); 
            }
        }
        document.addEventListener("mousedown", handle)
        window.addEventListener("resize", handleWidth)

        function remove() {
            window.removeEventListener("resize", handleWidth)
            document.removeEventListener("mousedown", handle)
        }
        return () => {
          remove()
        }
    })

    return (
        <header className="w-full relative h-52 flex justify-between items-center bg-white sm:h-32">
            <div >
                <h1 className="text-5xl font-black ml-10 sm:text-4xl xs:text-3xl">Dexpress</h1>
            </div>
            <div className="mr-10">
                <nav className="flex items-center">
                    <div className="flex items-center">
                        {isMin ? (<HiOutlineMenuAlt1 onClick={handleClick} className="w-12 h-12 sm:w-8 sm:h-8 xs:h-6 xs:w-6 xs:ml-2" />) : navBar.map((_, index) => (
                            <p key={index} className="text-xl ml-10  font-semibold">{_}</p>
                        ))}
                    </div>


                    <div className="ml-5">
                        <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="User" />
                    </div>
                </nav>
            </div>
            <div ref={menuRef}  className={`absolute left-0 top-0 w-24 transition-all z-50 min-h-screen bg-[#333] ${isClicked ? "block" : "hidden"}`}>
                {navBar.map((_, index) => (
                    <p key={index} className="text-lg text-orange-500 mt-20 text-center  font-semibold">{_}</p>
                ))}
            </div>


        </header>
    )
}