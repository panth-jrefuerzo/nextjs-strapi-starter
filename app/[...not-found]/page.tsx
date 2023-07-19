import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
       <div className="flex flex-col items-center justify-center h-[25rem]">
      <h1 className="text-6xl font-bold text-red-500 mb-4 animate-bounce">404</h1>
      <p className="text-xl dark:text-white animate-pulse">
        Oops! The page you're looking for does not exist.
      </p>
      <Link href={'/'} className="bg-zinc-300 hover:bg-zinc-100 dark:text-black font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out">
            Go Back Home
        </Link>
    </div>
    </div>
  )
}