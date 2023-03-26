import React from 'react';
import MsFoundersHub from '../images/MS-Startups-Blog_Badge-SignUp.png';
import itoe from '../images/i2e-logo-1.svg';
import skyVentures from '../images/skyv-2-white.webp';
import wisoLogo from '../images/wiso-logo.jpg';

const Footer = () => {
    return (
        <div className='bg-blue-400'>
            <div className='container justify-center mx-auto py-20 flex gap-4 max-md:px-2 max-w-6xl flex-wrap'>
                <div className=''>
                    <div className='w-[150] h-[150]'>
                        <img src={wisoLogo} alt='wiso logo' />
                    </div>
                </div>
                <div className='flex space-x-4 flex-2 grow justify-center'>
                    <nav className='text-white flex flex-col space-y-4'>
                        <a href='/meet-the-team' className='hover:underline'>Meet the team!</a>
                        <a href='/feedback' className='hover:underline'>Feedback</a>
                        <a href='/login' className='hover:underline'>Login</a>
                    </nav>
                    <nav className='text-white flex flex-col space-y-4'>
                        <a href='https://www.instagram.com/wisoai_inc/' className='hover:underline'>Instagram</a>
                        <a href='https://www.linkedin.com/company/wiso-inc/' className='hover:underline'>LinkedIn</a>
                        <a href='https://www.youtube.com/watch?v=yjYIHC8e1ZI' className='hover:underline'>YouTube</a>
                    </nav>
                </div>
                <div className='flex flex-nowrap space-x-2 max-md:basis-full max-md:grow max-md:shrink my-4 md:m-0'>
                    <p className='flex-1'>Benefactors:</p>
                    <div className='max-w-[100px] max-h-[100px] aspect-square bg-black'>
                        <img src={MsFoundersHub} alt="founders hub logo"/>
                    </div>
                    <div className='flex max-w-[100px] max-h-[100px] aspect-square bg-black'>
                        <img src={itoe} alt="i2e"/>
                    </div>
                    <div className='max-w-[100px] max-h-[100px] aspect-square bg-black flex items-center'>
                        <img src={skyVentures} alt="skyventures" />
                    </div>
                </div>
            </div>
            <div className='w-full bg-black text-sm text-white text-center'>&copy; 2023. Wiso inc.</div>
        </div>
    )
}

export default Footer