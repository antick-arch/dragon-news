import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImg from '@/assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto'>
            <div></div>
            <ul className='flex justify-between gap-3 text-gray-500'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/career'}>Career</Link></li>
            </ul>
            <div className='flex justify-between gap-3'>
                <Image src={userImg} width={41} height={41} alt='user logo'></Image>
                <button className='btn bg-[#403F3F] text-white text-[1.3rem]'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;