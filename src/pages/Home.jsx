import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Hireme from '../components/Hireme'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div className="">
    <Navbar/>
   <Hero/>
   <Skills/>
   <Services/>
   <Projects/>
   <Testimonials/>
   <Hireme/>
   <Contact/>

   <footer className="p-3 text-center">
      <h6 className="mb-3">Oumark</h6>
      <p>kolladigital © All CopyRights Reserved 2023</p>
    </footer>
  </div>
  )
}

export default Home