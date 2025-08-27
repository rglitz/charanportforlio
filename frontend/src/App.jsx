import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

const App = () => {
  const navLinks = useRef([]);
  const [activeLink, setActiveLink] = useState('about');

  // Handle navigation link click
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();  // Prevent default anchor behavior
    setActiveLink(sectionId);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle previous and next button clicks
  const handleNavigation = (direction) => {
    const currentIndex = navLinks.current.findIndex(
      (link) => link && link.classList.contains('active')
    );

    if (currentIndex === -1) return; // Exit if no active link is found

    let newIndex = currentIndex + direction;

    // Looping logic: wrap around when going past the last section or the first section
    if (newIndex < 0) {
      newIndex = navLinks.current.length - 1; // Go to the last section if we are at the first one
    } else if (newIndex >= navLinks.current.length) {
      newIndex = 0; // Go to the first section if we are at the last one
    }

    const targetLink = navLinks.current[newIndex];
    if (targetLink) {
      setActiveLink(targetLink.getAttribute('href').substring(1)); // Set the active link by its section id
      const targetSection = document.getElementById(targetLink.getAttribute('href').substring(1));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Assuming your sections are wrapped in <section> tags
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="section1 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row h-100">
          {/* Left Column (Image) */}
          <div className="mob-hide col-md-5 d-flex flex-column justify-content-end">
            <img
              className="img-fluid p-3 ps-0"
              src="assets/devcgz-digital.png"
              alt="sai-charan-goud-digital"
            />
          </div>

          {/* Right Column (Content) */}
          <div className="scroll col-md-5">
            <div className="hidden d-flex flex-column justify-content-center">
              <section className="box" id="about"><About /></section>
              <section className="box" id="skills"><Skills /></section>
              <section className="box" id="projects"><Projects /></section>              
              <section className="box" id="education"><Education /></section>
              <section className="box" id="certifications"><Certifications /></section>
              <section className="box" id="gallery"><Gallery /></section>
              <section className="box" id="contact"><Contact /></section>
            </div>
          </div>

          {/* Navigation */}
          <div className="mob-hide col-md-2 d-flex flex-column justify-content-center align-items-end">
            <nav className="nav flex-column align-items-end">
              {['about', 'skills', 'projects', 'education', 'certifications', 'gallery', 'contact'].map((sectionId, index) => (
                <a
                  key={sectionId}
                  ref={(el) => navLinks.current[index] = el} // Use index for correct ref assignment
                  className={`nav-link text-white ${activeLink === sectionId ? 'active' : ''}`}
                  href={`#${sectionId}`}
                  onClick={(e) => handleLinkClick(e, sectionId)}
                >
                  {sectionId.toUpperCase()}
                </a>
              ))}
            </nav>
            <div className="pnbtns d-flex w-100 justify-content-end align-items-end">
              <button className="pnbtn nav-btn" id="prevBtn" onClick={() => handleNavigation(-1)}>
                <FontAwesomeIcon icon={faLessThan} />
              </button>
              <button className="pnbtn nav-btn" id="nextBtn" onClick={() => handleNavigation(1)}>
                <FontAwesomeIcon icon={faGreaterThan} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;