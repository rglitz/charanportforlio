import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


function Projects() {
  const projectData = [
      {
        name: "Inventory Management System",
        description: [
          "— A inventory Management System for a Gift Store",
          "— Default Login Credentials (charan & abcd@1234)",
        ],
        liveLink: "#", // Replace with actual link
        sourceCode: "#", // Replace with actual source code link
      },
      {
        name: "Khader Waterproofing",
        description: [
          "— A static Website for a client",
          "— Google 'Khader Waterproofing'",
        ],
        liveLink: "#", // Replace with actual link
        sourceCode: "#", // Replace with actual source code link
      },
      {
        name: "40+ Vanilla Javascript Projects",
        description: [
          "— This project helped me to understand the fundamentals of JavaScript better",
        ],
        liveLink: "#", // Replace with actual link
        sourceCode: "#", // Replace with actual source code link
      },
  ];

  return (
    <>
        <h1 className="mb-2">Projects</h1>
        {projectData.map((project, index) => (
            <div className="projects py-1" key={index}>
                <h3>{project.name}</h3>
                {project.description.map((desc, i) => (
                    <p className="m-0" key={i}>{desc}</p>
                ))}
                <div>
                    <button target="_blank" className="pjbtn ps-0 pe-3 py-2">
                        <FontAwesomeIcon icon={faLink} /> Live Link
                    </button>
                    <button target="_blank" className="pjbtn ps-0 pe-3 py-2">
                        <FontAwesomeIcon icon={faGithub} /> Source Code
                    </button>
                </div>
            </div>
        ))}
    </>
  )
}

export default Projects
