/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { web_link } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import {Route} from "react-router-dom";
import Blog from "../pages/Blog.jsx";

export const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <a href={source_code_link} target="_blank" rel="noreferrer">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-base-200 p-5 rounded-2xl sm:w-[360px] w-full max-w-[330px]"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* container for the images on the card */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">

              {/* This is the link to the live page */}
              {
                live_link &&
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={web_link}
                    alt="live-link"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              }
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => {
              return (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              )
            })}

          </div>
        </Tilt>
      </a>
    </motion.div >
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]"
          >
              These are my featured projects; ones in which I am particular proud of or made me learn something new.
              <br/>
              <br/>

              <a className="text-lg btn btn-primary" href="/all-projects">SEE ALL PROJECTS</a>
          </motion.p>
      </div>

        <div className="mt-20 flex flex-wrap gap-7">
            {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`}
              index={index}
              {...project}
            />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
