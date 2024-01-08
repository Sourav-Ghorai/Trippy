import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from '../Components/Navbar';
import Trip from "../Components/Trip";
import image from '../assets/14.jpg';
function Home(){
   return(
      <>
         <Navbar/>  
         <Hero
            cName="home"
            heroImg={image}
            title="Your Journey Your Story"
            text="Choose your favourite destination"
            url="/"
            btnClass="show"
            btnText="Travel Plan"
         />
         <Destination/>
         <Trip/>
         <Footer/>
      </>
   )
}

export default Home;