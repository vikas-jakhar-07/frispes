const Paragraph = ({
    reduceBelow = 768,
    maxFontSize = 20,
    minFontSize = 16,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <p {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`font-medium font-lato leading-6 md:leading-custom-2xl ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;