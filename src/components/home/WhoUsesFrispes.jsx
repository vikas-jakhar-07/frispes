import Heading from '../common/Heading'
import { WHO_USES_FRISPES_DATA_LIST } from '../common/Helper'
import Marquee from "react-fast-marquee";

const WhoUsesFrispes = () => {
    return (
        <section className='py-4'>
            <div className="container">
                <Heading className='text-deep-blue text-center'>Who uses Frispes?</Heading>
                <p className='md:mt-6 sm:mt-3 mt-2 font-lato text-light-gray font-medium text-lg text-center'>Big brands, small bussiness, new startuo and inividuals</p>
                <div className="md:mt-14 sm:mt-10 mt-7 xl:-mx-8 py-2.5 group">
                    <Marquee speed="50" pauseOnHover={true}>
                        {WHO_USES_FRISPES_DATA_LIST.map((items, index) => (
                            <div key={index} className="flex items-center justify-center w-fit sm:px-[30px]">
                                <a key={index} href={items.URL} target='_blank' rel="noreferrer" className={`transition-slow group-hover:grayscale w-7/12 sm:w-9/12 md:w-full hover:!filter-none ${index === 0 || index === 2 ? "max-w-[120px]" : index === 1 ? "max-w-[180px]" : index === 3 ? "max-w-[170px]" : index === 4 ? "max-w-[145px]" : "max-w-[107px]"}`}><img src={items.image} alt={items.image} className='w-full' /></a>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default WhoUsesFrispes