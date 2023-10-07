import { Routes,Route,useNavigate } from "react-router-dom"

import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Hero from "./pages/Hero.jsx"
import CreateHero from "./pages/CreateHero"
import EditHero from "./pages/EditHeero"
import Skills from "./pages/Skills"
import CreateSkill from "./pages/CreateSkill"
import EditSkill from "./pages/EditSkill"
import CreateProject from "./pages/CreateProject"
import EditProject from "./pages/EditProject"
import Projects from "./pages/Projects"
import Createservice from "./pages/Createservice"
import EditService from "./pages/EditService"
import Services from "./pages/Services"
import Testimonials from "./pages/Testimonials"
import CreateTestimonial from "./pages/CreateTestimonial"
import EditTestimonial from "./pages/EditTestimonial"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PrivateRoutes from "./routes/PrivateRoutes"


export default function App() {

  return (
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route element={<PrivateRoutes/>}>
<Route exact path="/dashboard" element={<Admin/>}/>
<Route  path="/skills" element={<Skills/>}/>
<Route  path="/projects" element={<Projects/>}/>
<Route  path="/createhero" element={<CreateHero/>}/>
<Route  path="/createskill" element={<CreateSkill/>}/>
<Route  path="/edithero/:id" element={<EditHero/>}/>
<Route  path="/editskill/:id" element={<EditSkill/>}/>
<Route  path="/createproject" element={<CreateProject/>}/>
<Route  path="/services" element={<Services/>}/>
<Route  path="/createservice" element={<Createservice/>}/>
<Route  path="/editservice/:id" element={<EditService/>}/>
<Route  path="/testimonials" element={<Testimonials/>}/>
<Route  path="/edittestimonial/:id" element={<EditTestimonial/>}/>
<Route  path="/createtestimonial" element={<CreateTestimonial/>}/>
</Route>
<Route  path="/hero" element={<Hero/>}/>

<Route  path="/login" element={<Login/>}/>
<Route  path="/register" element={<Register/>}/>
</Routes>
 
    
  )
}