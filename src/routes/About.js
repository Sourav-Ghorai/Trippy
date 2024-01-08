import Hero from "../Components/Hero";
import Navbar from '../Components/Navbar';
import image from '../assets/night.jpg';
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About(){
   return(
      <>
         <Navbar/>  
         <Hero
            cName="about"
            heroImg={image}
            title="About"
         />
         <AboutUs/>
         <Footer/>
      </>
   )
}

export default About;