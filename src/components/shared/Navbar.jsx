import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImg from '@/assets/user.png'
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto'>
            <div></div>
            <ul className='flex justify-between gap-3 text-gray-500'>
                <li><Navlink href={'/'} >Home</Navlink></li>
                <li><Navlink href={'/about'} >About</Navlink></li>
                <li><Navlink href={'/career'} >Career</Navlink></li>
            </ul>
            <div className='flex justify-between gap-3'>
                <Image src={userImg} width={41} height={41} alt='user logo'></Image>
                <button className='btn bg-[#403F3F] text-white text-[1.3rem]'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;