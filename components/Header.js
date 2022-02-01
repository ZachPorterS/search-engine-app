import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import HeaderOptions from '../components/HeaderOptions';
import { useRouter } from "next/router";
import { useRef } from 'react';
import Avatar from "./Avatar";

function Header({ }) {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <h1 className='cursor-pointer text-[#2f4f4f] font-bold scale-150
            pl-2' onClick={() => router.push("/")}>Great Search</h1>
                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border 
            border-zinc-300 rounded-full shadow-lg max-w-3xl items-center'>
                    <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type="text" />
                    <XIcon className='h-4 sm:mr-2 cursor-pointer text-zinc-600 
                transition duration-100 transform hover:scale-150'
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="h-4 text-blue-600  mr-2 hidden sm:inline-flex
                border-l-2 pl-2 border-gray-300 cursor-pointer"/>
                    <SearchIcon className="h-4 text-blue-600 mr-2 hidden sm:inline-flex cursor-pointer" />
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                <Avatar url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F84%2F206384-050-00698723%2FJavan-gliding-tree-frog.jpg&f=1&nofb=1"
                    className='ml-auto' />
            </div>
            <HeaderOptions />
        </header>
    );
}

export default Header;