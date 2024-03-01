import Link from "next/link"
import Search from "./Search"

export default function Searchbar(){
    return (
        <header className="bg-black sticky top-0 z-10">
            <nav className="flex flex-xol gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto  text-white">
                <h1>
                    {/* <Link href="/">i have to remove this</Link> */}
                </h1>
                <Search/>
            </nav>
        </header>
    )
}