import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../store/serviceSlice";

useDispatch
const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector(state=>state.services.services)
  useEffect(()=>{
const getservices = async ()=>{
      try {
          const response = await axios.get("https://porfolio-backend-e3rt.onrender.com/api/services");
          dispatch(getServices(response.data));
      } catch (err) {
          console.log(err)
      }
  }
  getservices()
  },[])
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
      Services
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          What I Offer
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              
              <img src={`https://porfolio-backend-e3rt.onrender.com/images/${content.logo}`} alt="..." className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
