import Link from "next/link";

export default async function Home() {
  return (
    <main className='flex main-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-2xl font-semibold'>Olá namevug</h1>

      <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> 
      <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900" />
      
      <Link href='/products'>
        <p>Página de produtos</p>
      </Link>
    </main>
  )
}
