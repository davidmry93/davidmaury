//////////////////////////////////////////////////////////////////////////////
//                              IMPORTS                                     //
/////////////////////////////////////////////////////////////////////////////

import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

//  Local storage pour le theme
import useLocalStorage from 'use-local-storage'

//  Icones
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

//////////////////////////////////////////////////////////////////////////////
//                              NAVIGATION COMPONENT                        //
/////////////////////////////////////////////////////////////////////////////

const Navigation = () => {
  //  Existe-t-il un theme préféré
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //  Localstorage du theme
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // Application du theme sur balise html
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  //Fonction pour changer le theme
  const toggleTheme = (e) => {
    e.preventDefault();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <header class="container">
      <nav>
        <NavLink to="/" >David Maury</NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="/creations">Créations</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a href="#" class="theme-btn" onClick={(e) => toggleTheme(e)}>
          {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
        </a>
      </nav>
    </header>

  );
}

export default Navigation;