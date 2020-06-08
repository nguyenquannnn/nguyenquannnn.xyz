import Link from 'next/link';

export default () => {
    return <header className="flex flex-row items-baseline font-sans inline-block my-5">
        {/* <div> */}
        <a className="mr-5 lg:text-2xl xl:text-3xl font-bold">nguyenquannnn.xyz</a>
        <nav>
            <ul className="inline-flex space-x-4 lg:text-lg xl:text-xl">
                <li className="flex-1 hover:border-b-4 transition-all duration-200 ease-in-out"><Link href="/"><a>blog</a></Link></li>
                <li className="flex-1 hover:border-b-4 transition-all duration-200 ease-in-out"><Link href="/cv"><a>cv</a></Link></li>
                <li className="flex-2 hover:border-b-4 transition-all duration-200 ease-in-out"><Link href="/contact-me"><a>contact me</a></Link></li>
            </ul>
        </nav>
        {/* </div> */}
    </header>
}