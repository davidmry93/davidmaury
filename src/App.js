//////////////////////////////////////////////////////////////////////////////
//                              IMPORTS                                     //
/////////////////////////////////////////////////////////////////////////////

//  ROUTER

import { HashRouter, Routes, Route } from "react-router-dom";

//  COMPONENTS

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollButton from "./components/ScrollButton";

//  PAGES

import Profil from './pages/Profil';
import Home from './pages/Home';
import Creations from './pages/Creations';
import Contact from './pages/Contact';
import Error from './pages/Error';

//////////////////////////////////////////////////////////////////////////////
//                              APP                                         //
/////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profil" element={<Profil />} />
        <Route exact path="/creations" element={<Creations />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ScrollButton />
    </HashRouter>
  );
}

export default App;
