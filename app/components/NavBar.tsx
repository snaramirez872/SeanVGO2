import React from "react";
import Link from "next/link";
import "../styles/NavBar.css";

export default function NavBar() {
    return (
        <nav className='navbar'>
            <h2 className='logo'>SeanVGO 2.0</h2>
            <section className='links'>
                <Link href='#'>Blog</Link>
                <Link href='#'>Reviews</Link>
                <Link href='#'>Games List</Link>
            </section>
        </nav>
    );
}
