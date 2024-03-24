import Link from "next/link"
// import Search from "./Search"

export default function Searchbar(){
    return (
        <header className="sticky top-0 z-10" style={{backgroundColor: "#0C0018"}}>
            <h1 className="text-white " style={{textAlign:"center", fontSize:"5rem", fontFamily:"GabrielWeissFriends", marginTop:"2rem", background: "linear-gradient(to right, #ff9a00, #f3c00c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent" }}>Photowall</h1>
            {/* <nav className="flex flex-xol gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto  text-white">
                <h1>
                     <Link href="/">i have to remove this</Link> 
                </h1>
                 <Search/> 
            </nav> */}
        </header>
    )
}