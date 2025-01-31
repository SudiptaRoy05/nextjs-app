import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-slate-600 py-5'>
            <nav className='w-10/12 mx-auto'>
                <ul className="flex gap-10">
                    <Link href='/'>
                        <li>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li>About</li>
                    </Link>
                    <Link href='/services'>
                        <li>Services</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
