'use client';


import React from 'react';
import Link from 'next/link'; 
import navItemContent  from '@/constants'; 

export default function NavItems() {

    return (
        <nav className='gap-5'>
            <Link href='/'>
            Home
            </Link>
            {navItemContent.map(link => (
                <Link
                href={link.href}
                key={link.href}
                >{link.label}</Link>
            ) 
            )}
        </nav>
    );
}
