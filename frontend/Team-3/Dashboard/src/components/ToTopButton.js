import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.css"; // Import CSS for styling the button

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  console.log('1');

  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Function to handle showing/hiding the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true); console.log('12');
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="to-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ToTopButton;
