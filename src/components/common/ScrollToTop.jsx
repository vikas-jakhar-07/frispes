import React, { useEffect, useState } from 'react';
import scrollIcon from "../../assets/images/svg/scroll-to-top.svg";

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const Scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const toggleVisible = () => {
        const scrolled = window.scrollY;
        if (scrolled > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const checkScreenWidth = () => {
        setIsLargeScreen(window.innerWidth >= 1920);
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        window.addEventListener('resize', checkScreenWidth);
        checkScreenWidth();
        return () => {
            window.removeEventListener('scroll', toggleVisible);
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <button
            onClick={Scroll}
            className="bg-white border border-off-black hover:border-off-orange group hover:shadow-9xl scroll-button place-items-center xl:size-16 md:size-14 sm:size-12 size-10 rounded-full fixed bottom-[2%] cursor-pointer duration-300 ease-linear z-30"
            style={{
                display: visible ? 'grid' : 'none',
                right: isLargeScreen ? 'calc((100vw - 1920px) / 2 + 30px)' : '1.7%',
            }}
        >
            <img src={scrollIcon} alt="scrollIcon" className='w-1/2 relative transition-slow scroll-icon' />
        </button>
    );
};

export default ScrollToTop;