import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <h3>Hey! there...</h3>
      <h1>My Name is Charan</h1>
      <h1>Sai Charan Goud | DevCGz</h1>
      <h6>A Cool Guy with lot of Enthusiasm in</h6>
      <h6>Entrepreneurship and Technology</h6>
      <div>
        <a
          className="fs-2 text-white cursor-pointer px-2"
          href="https://github.com/devcgz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="fs-2 text-white cursor-pointer px-2"
          href="https://www.linkedin.com/in/devcgz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="fs-2 text-white cursor-pointer px-2"
          href="https://www.x.com/devcgz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="fs-2 text-white cursor-pointer px-2"
          href="https://www.instagram.com/devcgz"
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
            href="https://resume.devcgz.com"
            target="_blank"
          >
            View Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </button>
      </div>
    </>
  );
}

export default About;
