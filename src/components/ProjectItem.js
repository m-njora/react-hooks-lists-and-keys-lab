import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techList = technologies.map((item) => 
    <span key={item}>{item}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <h3 key="name">{name}</h3>
      <p key="about">{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
