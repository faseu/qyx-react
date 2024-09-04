import {Link} from "react-router-dom"
import {projects} from "../constants/index.js";
import {ProjectCard} from "../components/Works.jsx";

function Blog() {

    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
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
        </div>
    )
}

export default Blog