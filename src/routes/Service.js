import Hero from "../Components/Hero";
import Navbar from '../Components/Navbar';
import image from '../assets/12.jpg';
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service(){
   return(
      <>
         <Navbar/>  
         <Hero
            cName="about"
            heroImg={image}
            title="Service"
         />
         <Trip/>
         <Footer/>
      </>
   )
}

export default Service;