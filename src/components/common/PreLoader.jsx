import React, { useEffect, useState } from 'react';

const PreLoader = () => {

    const [visible, setVisible] = useState(true);
    const [hide, setHide] = useState(false);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const timer = setTimeout(() => {
            setHide(true);
        }, 1300);
        const cleanupTimer = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 2000);
        return () => {
            clearTimeout(timer);
            clearTimeout(cleanupTimer);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center">
            <div className={`min-h-screen w-1/2 bg-off-black z-[100] fixed top-0 left-0 transition-transform duration-500 ${hide ? '-translate-x-full' : 'translate-x-0'}`}>
            </div>
            <div className={`relative z-[200] animate-bounce flex flex-col sm:flex-row gap-10 items-center justify-center ${hide ? 'opacity-0' : 'opacity-100'}`}>
                <div className="sm:w-20 w-10 h-10 sm:h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                    <div className="sm:w-16 w-10 h-10 sm:h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full">
                    </div>
                </div>
            </div>
            <div className={`min-h-screen w-1/2 bg-off-black z-[100] fixed top-0 right-0 transition-transform duration-500 ${hide ? 'translate-x-full' : 'translate-x-0'}`}>
            </div>
        </div>
    );
}

export default PreLoader;