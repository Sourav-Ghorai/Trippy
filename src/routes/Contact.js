import Hero from "../Components/Hero";
import Navbar from '../Components/Navbar';
import image from '../assets/2.jpg';
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact(){
   return(
      <>
         <Navbar/>  
         <Hero
            cName="about"
            heroImg={image}
            title="Contact"
         />
         <ContactForm/>
         <Footer/>
      </>
   )
}

export default Contact;