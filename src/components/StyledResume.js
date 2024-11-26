import React from "react";

const StyledResume = ({ userData }) => {
  return (
    <div style={{ border: "1px solid #000", padding: "20px" }}>
      <h3 style={{ color: "#333" }}>{userData.name}</h3>
      <p style={{ fontStyle: "italic" }}>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>LinkedIn: {userData.linkedin}</p>
      <p>GitHub: {userData.github}</p>

      <h4>Skills</h4>
      {userData.skills && userData.skills.length > 0 ? (
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {userData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added.</p>
      )}

      <h4>Work Experience</h4>
      {userData.workExperience && userData.workExperience.map((exp, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p><strong>{exp.company}</strong> - {exp.role}</p>
          <p>Duration: {exp.duration}</p>
          <p>Achievements: {exp.achievements}</p>
        </div>
      ))}

      <h4>Projects</h4>
      {userData.projects && userData.projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p><strong>{project.title}</strong></p>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies}</p>
        </div>
      ))}

      <h4>Profile Summary</h4>
      <p>{userData.profileSummary}</p>
    </div>
  );
};

export default StyledResume;
