import Link from 'next/link'
import React from 'react'

// type Props = {}

export default function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold bg-[#0c2649] sticky top-0 backdrop-blur-md">
            <Logo />
            <Link className="select-none absolute left-auto right-auto items-center" href={"/"}>NutriCampus</Link>
            <div className=" flex sm:flex-nowrap flex-wrap gap-4 items-center text-sm">
                <button>About Us</button>
                <button>How It Works</button>
            </div>
        </nav>
    )
}
export function Logo() {
    return (
        <div></div>
    )
}