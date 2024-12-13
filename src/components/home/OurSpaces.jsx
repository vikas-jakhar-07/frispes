import Heading from '../common/Heading'
import Icon from '../common/Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { OUR_SPACE_DATA_LIST } from '../common/Helper';

const OurSpaces = () => {
    return (
        <section className='lg:py-24 md:py-20 sm:py-16 py-14' id='privacy'>
            <div className="container mt-4 pt-0.5">
                <div className="flex justify-between flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center md:items-end">
                    <Heading className='text-deep-blue mb-1 sm:mb-2'>Our Spaces</Heading>
                    <p className='font-medium font-lato text-lg text-center md:text-left text-light-gray max-w-[452px]'>Our space is designed to give you a different experience when working with your team or personally</p>
                    <div className="flex gap-6 mx-auto lg:mx-0 justify-center mt-5 w-fit">
                        <Icon className='cursor-pointer customPrev group transition-slow hover:scale-95' iconName='leftArrow' />
                        <Icon className='cursor-pointer customNext group transition-slow hover:scale-95' iconName='rightArrow' />
                    </div>
                </div>
                <div className="md:mt-12 sm:mt-8 mt-5 pt-1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                            renderFraction: (currentClass, totalClass) => {
                                return `<span class="${currentClass}"></span><span> / </span><span class="${totalClass}"></span>`;
                            },
                            formatFractionCurrent: (number) => {
                                return number < 10 ? `0${number}` : number;
                            },
                            formatFractionTotal: (number) => {
                                return number < 10 ? `0${number}` : number;
                            },
                        }}
                        navigation={{
                            prevEl: '.customPrev',
                            nextEl: '.customNext',
                        }}
                        loop={true}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        scrollbar={true}
                        className="mySwiper !pb-20"
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = '.customPrev';
                            swiper.params.navigation.nextEl = '.customNext';
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {OUR_SPACE_DATA_LIST.map((items, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full group">
                                    <img src={items.image} alt={items.image} className='w-full' />
                                    <p className='mt-6 text-center text-off-black font-lato font-bold text-xl leading-6'>{items.title}</p>
                                    <Icon className='h-[72px] w-[72px] p-5 bottom-12 absolute bg-off-orange z-[1] left-0 justify-center items-center' iconName='whiteLeftArrow' />
                                    <div className="bg-deep-blue absolute top-0 shadow-11xl left-0 px-2 w-full h-full -z-[1] opacity-0 group-hover:opacity-100 group-hover:z-10 transition-slow flex flex-col justify-center items-center">
                                        <p className='font-lora font-normal text-white text-center text-custom-3xl leading-10'>{items.title}</p>
                                        <p className='mt-3.5 text-white text-center font-medium font-lato text-lg max-w-[253px]'>Comfortable space, Full speed wifi, Free coffe & Snack and many more</p>
                                        <Icon iconName='grayLine' className='absolute top-4 right-4' />
                                        <button className='bg-off-orange hover:bg-deep-blue shadow-inner shadow-off-orange border border-off-orange z-10 max-w-[255px] transition-slow w-full justify-end items-center flex h-[72px] gap-7 group-hover:gap-5 font-lato font-bold text-lg leading-5 text-white absolute bottom-0 left-0 p-5'>Check avaibility <Icon className='relative w-8 h-8 justify-center items-center' iconName='whiteLeftArrow' /></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}

export default OurSpaces