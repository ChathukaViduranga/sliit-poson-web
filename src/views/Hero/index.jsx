/**
 * Hero Section
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//images
import img1 from '../../assets/images/Hero/img1.webp';
import img2 from '../../assets/images/Hero/img2.webp';
import img3 from '../../assets/images/Hero/img3.webp';
import { useState } from 'react';

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [img1, img2, img3];

  const changeImg = () => {
    if (currentImg + 1 == images.length) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  return (
    <div className="flex flex-col font-poppins items-center justify-center h-screen bg-gradient-to-r from-[#30013B] to-[#510263] dark:bg-gray-900">
      <div className="container h-full mx-auto px-5">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row h-full xl:px-12">
          <div className="flex-1 flex items-center justify-center lg:justify-start basis-full lg:basis-1/2">
            <div>
              <div className="text-5xl text-white font-medium">
                Virtual Vesak <br />
                Festival
                <div className="inline sm:block text-gold font-railway font-normal">
                  {' '}
                  202<span className="text-6xl absolute">3</span>
                </div>
              </div>
              <p className="text-gold mt-5">SLIIT Interactive Media </p>
              <hr className="bg-gold h-px border-none" />
              <div className="mt-10 lg:mt-32 text-white">
                <div className="border border-gold inline-block px-4 py-3 rounded-3xl">
                  <p className="font-sans">
                    Explore Now
                    <FontAwesomeIcon className="ml-4" icon={faArrowRight} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-1 pb-24 flex justify-center lg:justify-start basis-full lg:basis-1/2">
            <div className="static bg-red-300 rounded-b-full w-2/3 lg:w-full h-[500px] lg:h-[75vh] overflow-hidden ">
              <img
                alt={''}
                src={images[currentImg]}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute rounded-full bg-[#48093F] text-white right-0  px-4 py-2 z-10"
                onClick={changeImg}
              >
                <FontAwesomeIcon
                  className="text-gold mr-4"
                  icon={faArrowLeft}
                />
                0{currentImg + 1} / 0{images.length}
                <FontAwesomeIcon
                  className="text-gold ml-4"
                  icon={faArrowRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
