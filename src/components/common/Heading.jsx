const Heading = ({
    reduceBelow = 1024,
    maxFontSize = 40,
    minFontSize = 25,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`${className} font-lora font-bold leading-8 sm:leading-9 md:leading-10 lg:leading-custom-3xl`}>
            {children}
        </h2>
    );
};

export default Heading;