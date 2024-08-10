import navBar from "../../../../providers/header-nav"

export default function Header() {
    return (
        <header className="w-full h-52 flex justify-between items-center bg-white ">
            <div >
                <h1 className="text-5xl font-black ml-10">Dexpress</h1>
            </div>
            <div className="mr-10">
                <nav className="flex items-center">
                    {navBar.map((_, index) => (
                        <p key={index} className="text-xl ml-10  font-semibold">{_}</p>
                    ))}

                    <div className="ml-5">
                        <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="User" />
                    </div>
                </nav>
            </div>
        </header>
    )
}