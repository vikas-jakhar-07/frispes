import member from "../../assets/images/webp/member.webp";
import Button from '../common/Button';
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const ReadyToTry = () => {
    return (
        <section className='sm:py-16 py-14 bg-deep-blue overflow-hidden -mt-1' id="help">
            <div className="container relative mt-2.5 mb-3.5 pb-1">
                <div className="lg:max-w-[445px] w-full relative z-10">
                    <p className='font-lato font-medium text-xl lg:leading-custom-2xls text-white flex items-center w-fit mx-auto lg:mx-0 gap-4'>
                        Became a member <span className='bg-white flex h-0.5 w-10 sm:w-[73px]'></span>
                    </p>
                    <Heading className="mt-2 text-white text-center lg:text-left">Ready to try different work experience now?</Heading>
                    <Paragraph className="!font-normal text-center lg:text-left text-medium-gray mt-2 sm:mt-4">Get the best working experience that you never feel before</Paragraph>
                    <Button className='uppercase w-full py-2 text-base sm:text-lg lg:py-[11.5px] max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] mt-5 sm:mt-8 hover:!shadow-5xl block lg:mx-0 mx-auto'>SIGN UP NOW</Button>
                </div>
                <img src={member} alt="member" className="lg:max-w-[377px] max-w-[300px] w-full absolute right-10 xl:right-20 top-[56%] lg:opacity-100 opacity-50 sm:opacity-70 -translate-y-1/2" />
            </div>
        </section>
    )
}

export default ReadyToTry