import Heading from '../common/Heading'
import Icon from '../common/Icons'

const OurHelpCenter = () => {
    return (
        <section className='py-4 -mt-10 sm:-mt-12 lg:-mt-7' id='faq'>
            <div className="container mb-5">
                <Heading className='text-center text-deep-blue max-w-[578px] w-full mx-auto'>Find the answers to anything you need in our Help Center</Heading>
                <div className="flex flex-row flex-wrap -mx-3.5 justify-center -mt-5 lg:mt-7 md:pt-0.5 pb-8">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="lg:w-4/12 sm:w-1/2 w-full px-3.5 mt-12 lg:mt-6">
                            <div className="bg-white group transition-slow relative hover:bg-off-orange shadow-8xl flex justify-center items-center min-h-[140px] sm:min-h-[171px]">
                                <p className='font-lora max-w-[270px] transition-slow group-hover:text-white text-xl sm:text-custom-2xl sm:leading-8 text-center'>{index === 0 ? "How do I know if a space is available?" : index === 1 ? "How do i book a space?" : "How do reviews work?"}</p>
                                <Icon className='left-1/2 -translate-x-1/2 bottom-0 transition-slow group-hover:bg-white shadow-6xl group-hover:shadow-7xl translate-y-1/2 absolute justify-center items-center w-16 h-12 bg-off-orange' iconName='whiteArrow' />
                            </div>
                        </div>
                    ))}
                </div>
                <button className='mt-10 flex transition-slow gap-5 items-center w-fit mx-auto font-lato font-normal text-base text-off-orange group hover:text-deep-blue'>More questions <Icon iconName='orangeArrow' /></button>
            </div>
        </section>
    )
}

export default OurHelpCenter