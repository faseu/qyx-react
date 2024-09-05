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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderItem from './SliderItem.jsx';
const Works = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    variableWidth: true,
    speed: 500
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
          <a className="text-lg btn btn-primary" href="/all-projects">
            SEE ALL PROJECTS
          </a>
        </motion.p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {projects.map((project, index) => {
            return (
              <SliderItem key={`project-${index}`} index={index} {...project} />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
