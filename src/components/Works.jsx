/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { web_link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Route } from 'react-router-dom';
import Projects from '../pages/Projects.jsx';
import { ProjectCard } from './index.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SliderItem from './SliderItem.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
const Works = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    variableWidth: true,
    speed: 500,
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          These are my featured projects; ones in which I am particular proud of
          or made me learn something new.
          <br />
          <br />
          <a
            className="text-lgs inline-block p-[8px] rounded-md bg-[#8c0327] text-white"
            href="/projects"
          >
            SEE ALL PROJECTS
          </a>
        </motion.p>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 20,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {projects.map((project, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide>
              <SliderItem key={`project-${index}`} index={index} {...project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/*<div className="slider-container">*/}
      {/*  <Slider {...settings}>*/}
      {/*    {projects.map((project, index) => {*/}
      {/*      return (*/}
      {/*        <SliderItem key={`project-${index}`} index={index} {...project} />*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </Slider>*/}
      {/*</div>*/}
    </>
  );
};

export default SectionWrapper(Works, '');
