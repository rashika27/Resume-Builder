import React from "react";
import './BasicResume.css'

const BasicResume = ({ userData }) => {
  return (
    <div className="basic-resume">
      <div className="header">
        <h1>{userData.name}</h1>
        <div className="contact">
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>LinkedIn: {userData.linkedin}</p>
          <p>GitHub: {userData.github}</p>
        </div>
      </div>

      <div className="section work-experience">
        <h2>Work Experience</h2>
        {userData.workExperience && userData.workExperience.map((exp, index) => (
          <div key={index}>
            <p>
              <strong>{exp.company}</strong> - {exp.role}
            </p>
            <p>Duration: {exp.duration}</p>
            <p>Achievements: {exp.achievements}</p>
          </div>
        ))}
      </div>

      <div className="section project">
        <h2>Projects</h2>
        {userData.projects && userData.projects.map((project, index) => (
          <div key={index}>
            <p>
              <strong>{project.title}</strong>
            </p>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Profile Summary</h2>
        <p>{userData.profileSummary}</p>
      </div>
    </div>
  );
};

export default BasicResume;
