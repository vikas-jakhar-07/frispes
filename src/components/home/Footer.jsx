import { FOOTER_DATA_LIST, FOOTER_CONTACT_DATA_LIST, SOCIAL_MEDIA_DATA_LIST } from '../common/Helper'
import Icon from '../common/Icons'

const Footer = () => {
    return (
        <footer className='bg-off-blue sm:py-14 py-8 relative z-10 -mt-1' id='contact'>
            <div className="container lg:mb-11 pb-0.5">
                <div className="flex justify-between lg:flex-row flex-col lg:gap-16 xl:gap-5">
                    <div className="lg:max-w-[255px] w-full">
                        <a href="/" className='font-lora font-bold text-white text-4xl md:text-5xl lg:text-custom-5xl lg:leading-custom-5xl'>Frispes</a>
                        <p className='font-lato text-base mt-4 opacity-85 text-deep-gray leading-custom-xl'>We offer comfortable spaces, cozy cafe, high-speed internet, spacious parking area and many more for your best workspaces and meetings</p>
                        <div className="flex items-center gap-4 mt-6">
                            {SOCIAL_MEDIA_DATA_LIST.map((data, index) => (
                                <a key={index} href={data.URL} target='_blank' rel="noreferrer" className='group transition-slow'>
                                    <Icon iconName={data.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[730px] w-full sm:flex-nowrap flex-wrap flex-row justify-between mt-7 pt-0.5 flex">
                        {FOOTER_DATA_LIST.map((items, index) => (
                            <div key={index} className="sm:w-fit mt-6 lg:mt-0 w-1/2">
                                <h2 className='font-lato text-xl font-medium text-white opacity-50'>{items.title}</h2>
                                <div className="flex flex-col gap-[9px] mt-3 sm:mt-6">
                                    {items.list.map((obj, lastIndex) => (
                                        <a key={lastIndex} href={obj.URL} className='w-fit font-lato font-normal text-white text-base transition-slow hover:text-off-orange leading-custom-xl'>{obj.subTitle}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="sm:max-w-[212px] sm:w-full mt-6 lg:mt-0 w-1/2">
                            <h2 className='font-lato text-xl font-medium text-white opacity-50'>Contact Us</h2>
                            <div className="flex flex-col gap-[9px] mt-3 sm:mt-6">
                                {FOOTER_CONTACT_DATA_LIST.map((obj, index) => (
                                    <a key={index} target={index === 1 ? "_blank" : undefined} rel={index === 1 ? "noreferrer" : undefined} href={obj.URL} className='w-fit font-lato font-normal text-white text-base transition-slow hover:text-off-orange leading-custom-xl flex gap-2'><span className='font-bold'>{obj.title}</span> {obj.subTitle}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer