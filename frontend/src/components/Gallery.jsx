import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  const galleryContainer = useRef(null);
  const prevGalBtn = useRef(null);
  const nextGalBtn = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollAmount = 350;

  const images = [];
  for (let i = 1; i <= 44; i++) {
    images.push(
      <img key={i} className="img-fluid" src={`assets/gallery/${i}.jpg`} alt={`img ${i}`} />
    );
  }

  // Function to scroll images to the left
  const scrollLeft = () => {
    galleryContainer.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  };

  // Function to scroll images to the right
  const scrollRight = () => {
    galleryContainer.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  };

  // Auto-scroll function
  const autoScroll = () => {
    if (!isPaused) {
      scrollRight();
    }
    if (galleryContainer.current.scrollLeft >= (galleryContainer.current.scrollWidth - galleryContainer.current.clientWidth - scrollAmount)) {
      // Reset scroll position to the beginning if reached the end
      galleryContainer.current.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  };

  // Effect to start auto-scrolling when the component is mounted
  useEffect(() => {
    const interval = setInterval(autoScroll, 2000); // Adjust the delay between scrolls (in milliseconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [isPaused]);

  return (
    <>
      <h1 className="mb-3">Gallery</h1>
      <div className="scroll-container" id="galleryContainer" ref={galleryContainer}>
        {images}
      </div>
      <div className="pnbtns d-flex w-100 justify-content-end align-items-end">
        <button
          className="pnbtn nav-btn"
          id="prevGalBtn"
          ref={prevGalBtn}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faLessThan} />
        </button>
        <button
          className="pnbtn nav-btn"
          id="nextGalBtn"
          ref={nextGalBtn}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </div>
    </>
  );
}

export default Gallery;
