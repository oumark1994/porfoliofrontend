// import content
import { useEffect } from "react";
import { content } from "../Content";
import { useSelector,useDispatch} from "react-redux";
import axios from "axios";
import { gethero } from "../store/heroSlice";
const Hero = () => {

  // const { hero } = content;
  const dispatch = useDispatch();
  const heroes = useSelector(state=>state.heroes.heroes)
  console.log(heroes)
  useEffect(()=>{
const getHeroes = async ()=>{
      try {
          const response = await axios.get("https://porfolio-backend-e3rt.onrender.com/api/heroes");
          dispatch(gethero(response.data));
      } catch (err) {
          console.log(err)
      }
  }
  getHeroes()
  },[])

  return (
    <section id="home" className="overflow-hidden">
      {heroes.map((hero,i)=>(
          <div key={i} className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.lastname}{" "}
            <span className="text-dark_primary">{hero.firstname}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {/* {hero.hero_content.map((content, i) => ( */}
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            {/* ))} */}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={`https://porfolio-backend-e3rt.onrender.com/images/${hero.image}`}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
      ))}
    </section>
  );
};

export default Hero;
