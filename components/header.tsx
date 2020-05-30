import Link from 'next/link';

export default () => {
    return <header className="flex flex-row items-baseline font-sans  w-screen inline-block">
        {/* <div> */}
        <a className="m-5 text-2xl font-bold">nguyenquannnn.xyz</a>
        <nav>
            <ul className="inline-flex space-x-4 text-lg">
                <li className="flex-1"><Link href="/"><a>blog</a></Link></li>
                <li className="flex-1"><Link href="/cv"><a>cv</a></Link></li>
                <li className="flex-2"><Link href="/contact-me"><a>contact me</a></Link></li>
            </ul>
        </nav>
        {/* </div> */}
    </header>
}