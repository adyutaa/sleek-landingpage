import { PiArrowRight } from 'react-icons/pi'
import Image from 'next/image';

const logos = [
  { image: "/logos/logoipsum-265.svg" },
  { image: "/logos/logoipsum-223.svg" },
  { image: "/logos/logoipsum-243.svg" },
  { image: "/logos/logoipsum-258.svg" },
  { image: "/logos/logoipsum-317.svg" },
  { image: "/logos/logoipsum-289.svg" },
  { image: "/logos/logoipsum-295.svg" },
  { image: "/logos/logoipsum-311.svg" },
  { image: "/logos/logoipsum-264.svg" },
  { image: "/logos/logoipsum-264.svg" },
]
const SecondSection = () => {
    return ( 
        <div className="pt-16 flex justify-center items-center flex-col">
            <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium ">Millions Run on Sleek Everyday</div>
            <div className="py-4 xl:w-1/4 text-center px-8"> Powering the world&apos;s best teams, from next-generation startups to established enterprises.</div>
            <div className="text-sky-500 flex items-center justify-center px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto">Read customer stories <PiArrowRight className="ml-3 text-sm " /></div>
            <div className='grid grid-cols-3  xl:grid-cols-4 items-center justify-center  px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto'>
                {logos.map((logo, index) => (
                    <div key={index}>
                        <Image src={logo.image} alt="logo" width={500} height={500}/>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default SecondSection;