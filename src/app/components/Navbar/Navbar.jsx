import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-slate-600 py-5'>
            <nav className='w-10/12 mx-auto'>
                <ul className="flex gap-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </nav>
        </div>
    )
}
