import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProjects } from "../store/projectSlice";
import { Link } from "react-router-dom";

const Projects = () => {  
  const dispatch = useDispatch();
  const projects = useSelector(state=>state.projects.projects)
  console.log(projects)
  useEffect(()=>{
const getprojects = async ()=>{
      try {
          const response = await axios.get("http://localhost:8800/api/projects");
          dispatch(getProjects(response.data));
      } catch (err) {
          console.log(err)
      }
  }
  getprojects()
  },[])
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
           Projects
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
           Recent Projects
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-5 max-w-xs drop-shadow-primary self-start"
          >
            {projects.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img  src={`http://localhost:8800/images/${content.image}`} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <Link  to={content.projectLink} className="font-bold text-gray self-end">
                   View project
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
