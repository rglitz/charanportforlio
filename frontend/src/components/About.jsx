import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


function About() {
  return (
    <>
        <h3>Hey! there...</h3>
        <h1>My Name is Charan</h1>
        <h6>A Cool Guy with lot of Enthusiasm in</h6>
        <h6>Entrepreneurship and Technology</h6>
        <div>
            <a
            className="fs-2 text-white cursor-pointer px-2"
            href="https://www.linkedin.com/in/yourscharangoud"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
            className="fs-2 text-white cursor-pointer px-2"
            href="https://www.x.com/yourscharangoud"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
            className="fs-2 text-white cursor-pointer px-2"
            href="https://www.instagram.com/yourscharangoud"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        <div className="pt-4">
            <button className="pjbtn ps-0 pe-3 py-2">
            <a
                className="text-white cursor-pointer text-decoration-none"
                href="assets/resume.pdf"
                download=""
            >
                Download Resume <FontAwesomeIcon icon={faDownload} />
            </a>
            </button>
        </div>
    </>
  )
}

export default About
