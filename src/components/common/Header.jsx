import React, { useEffect, useState } from 'react';
import { NAVBAR_DATA_LIST } from './Helper';
import Button from './Button';

const Header = () => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 1024 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className="xl:py-10 lg:pb-14 md:py-5 py-1 relative z-50">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <a href="/" className="w-fit relative z-10 text-deep-blue font-playFair font-bold text-2xl">Frispes.</a>
                    <div className="flex items-center gap-20">
                        <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center justify-center z-[90] lg:bg-transparent absolute flex-col w-full h-screen top-0 lg:relative lg:bg-none lg:flex-row gap-7 lg:gap-10 lg:h-fit lg:w-fit lg:left-auto transition-slow`}>
                            {NAVBAR_DATA_LIST.map((item, index) => (
                                <a key={index} href={item.URL} aria-label={item.title} onClick={toggleOpen} className="text-off-black font-lato font-bold text-base leading-7 hover:text-off-orange transition-slow w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:bg-off-orange after:w-0 after:h-[3px] after:rounded-xl hover:after:w-full">
                                    {item.title}
                                </a>
                            ))}
                            <button className='text-off-orange transition-slow sm:hidden hover:text-deep-blue font-lato font-bold text-base leading-5'>Log In</button>
                            <Button className='py-3 text-base leading-5 px-6 sm:hidden shadow-9xl'>Sign Up</Button>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="flex items-center gap-6">
                                <button className='text-off-orange transition-slow hidden sm:block hover:text-deep-blue font-lato font-bold text-base leading-5'>Log In</button>
                                <Button className='py-3 text-base leading-5 px-6 hidden sm:block shadow-9xl'>Sign Up</Button>
                            </div>
                            <div role="button" aria-label="menu icon" aria-expanded={open} onClick={toggleOpen} className="w-7 h-5 rounded-full relative lg:hidden flex z-[100] cursor-pointer transition-slow">
                                {[...Array(3)].map((_, index) => (
                                    <span key={index} className={`left-0 absolute transition-slow bg-off-black h-1 rounded w-full ${index === 0 && open ? "top-1/2 -translate-y-1/2 rotate-45" : index === 0 ? "top-0" : ""} ${index === 1 && open ? "!-left-full opacity-0 top-1/2 -translate-y-1/2" : index === 1 ? "top-1/2 -translate-y-1/2" : ""} ${index === 2 && open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;