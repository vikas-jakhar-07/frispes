const Button = ({ children, className = '', ...props }) => {
    return (
        <button className={`overflow-hidden transition-slow text-white hover:shadow-4xl z-[1] relative group bg-off-orange hover:text-off-orange ${className}`} {...props} >
            <span className='font-lato font-bold relative z-10 group-hover:drop-shadow-3xl'>{children}</span>
            <span className="h-0 w-0 transition-slow -z-10 flex opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 group-hover:h-24 bg-white group-hover:w-[120%]"></span>
        </button>
    );
};

export default Button;