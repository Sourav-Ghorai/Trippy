import React, { useState, useEffect } from "react";
import { MenuItems } from './MenuItems';
import "./NavbarStyle.css";
import {Link} from 'react-router-dom';

function Navbar() {
   const [toggle, setToggle] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   const handleClick = () => {
      setToggle(!toggle);
   }

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         setScrolled(scrollPosition > 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <nav className={`NavbarItems ${scrolled? 'nav-bar-scrolled' : "nav-bar-top"}`}>
         <h1 className='NavbarLogo'>Trippy</h1>

         {/* For hamburger icon  */}
         <div onClick={handleClick}>
            <i className={toggle ? "fas fa-xmark" : "fas fa-bars"}></i>
         </div>

         {/* Navbar items  */}
         <ul className={toggle? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => (
               <li key={index}>
                  <Link className={item.cName} to={item.url}>
                     <i className={item.icon}></i>{item.name}
                  </Link>
               </li>
            ))}
            <li>
               <button>Sign up</button>
            </li>
         </ul>
      </nav>      
   );
}

export default Navbar;