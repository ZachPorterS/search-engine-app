import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const seachInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = seachInputRef.current.value;
    /* Check if there is input in feild 
     * else return nothing */
    if (!term) return;

    /* Send user to search page if term exists */
    router.push(`/search?term=${term}`);
  }

  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>GreatSearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className='flex w-full p-4 justify-between text-sm text-zinc-900'>
        {/* Left side of the page */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right side of the page */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 
            rounded-full hover:bg-gray-200 cursor-pointer' />
          <Avatar url='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F84%2F206384-050-00698723%2FJavan-gliding-tree-frog.jpg&f=1&nofb=1'/>
        </div>
      </header>
      {/* Body */}
      <form className='flex flex-col items-center mt-64 flex-grow w-6/8'>
        <h1 className='text-[#2f4f4f] scale-150 font-bold'>Great Search Engine</h1>
        <div className='flex w-full mt-5 
          border border-zinc-900 
          hover:shadow-lg focus-within:shadow-lg
          max-w-md rounded-full px-5 py-3 items-center
          sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-6 mr-3 text-gray-300 hover:text-zinc-900 hover:cursor-pointer'/>
          <input ref={seachInputRef} type='text' className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-6 ml-3 text-gray-300 hover:text-zinc-900 hover:cursor-pointer'/>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4 '>
          <button onClick={search} className='btn'>Great Search</button>
          <button onClick={search} className='btn'>I'm feeling lucky!</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}