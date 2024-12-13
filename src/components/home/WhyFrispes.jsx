import Icon from '../common/Icons'
import { WHY_FRISPES_DATA_LIST } from '../common/Helper'
import Heading from './../common/Heading';
import Paragraph from '../common/Paragraph';

const WhyFrispes = () => {
    return (
        <section className='py-4' id='workspace'>
            <div className="container">
                <div className="flex justify-between items-center gap-8 lg:flex-row flex-col">
                    <div className="w-full flex justify-between max-w-[499px]">
                        {WHY_FRISPES_DATA_LIST.map((items, index) => (
                            <div key={index} className="flex flex-col gap-12 sm:gap-16">
                                {items.list.map((obj, lastIndex) => (
                                    <div key={lastIndex} className="flex gap-3 sm:gap-6">
                                        <Icon iconName={obj.icon} />
                                        <div className="flex flex-col">
                                            <p className='text-deep-blue font-lora font-normal text-2xl sm:text-custom-3xl sm:leading-10'>{obj.title}</p>
                                            <p className='mt-2 text-light-gray font-lato font-normal text-sm sm:text-base lg:leading-custom-xl'>{obj.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="max-w-[540px] w-full bg-deep-blue p-7 sm:p-[53px]">
                        <p className='font-lato font-medium text-xl lg:leading-custom-2xl text-white flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                            Why Frispes <span className='bg-white flex h-0.5 w-10 sm:w-[73px]'></span>
                        </p>
                        <Heading className='text-white mt-2 text-center lg:text-left'>We revolutionize your workspace</Heading>
                        <Paragraph className='text-white mt-6 text-center lg:text-left'>With a decade of insights and expertise, we're decided to reimagine co-working space, designed to help a new startup grow up and realize their ideas so they can give a positive impacts on many people</Paragraph>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyFrispes