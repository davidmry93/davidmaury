import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';


const ScrollButton = () => {

    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisibility(true);
            document.getElementById("scrollButton").classList.add("visible");
          } else {
            setVisibility(false);
            document.getElementById("scrollButton").classList.remove("visible");
          }
      }

      const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
      }

    return (
        <div id="scrollButton"  onClick={scrollToTop} >
          <FaArrowUp />
      </div>
    );
};

export default ScrollButton;