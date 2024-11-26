import React from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";

const ResumePreview = () => {
  const userInfo = useSelector((state) => state.userInfo);

  // Function to download the resume as a PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.text(userInfo.name, 10, 10);
    doc.setFontSize(12);
    doc.text(`Email: ${userInfo.email}`, 10, 20);
    doc.text(`Phone: ${userInfo.phone}`, 10, 30);
    doc.text(`LinkedIn: ${userInfo.linkedin}`, 10, 40);
    doc.text(`GitHub: ${userInfo.github}`, 10, 50);

    // Skills
    doc.text("Skills:", 10, 60);
    let skillYPos = 70;
    userInfo.skills.forEach((skill, index) => {
      doc.text(`- ${skill}`, 10, skillYPos);
      skillYPos += 10;
    });

    // Work Experience
    doc.text("Work Experience:", 10, skillYPos + 10);
    let workYPos = skillYPos + 20;
    userInfo.workExperience.forEach((exp, index) => {
      doc.text(`Company: ${exp.company}`, 10, workYPos);
      doc.text(`Role: ${exp.role}`, 10, workYPos + 10);
      doc.text(`Duration: ${exp.duration}`, 10, workYPos + 20);
      doc.text(`Achievements: ${exp.achievements}`, 10, workYPos + 30);
      workYPos += 40;
    });

    // Projects
    doc.text("Projects:", 10, workYPos + 10);
    let projectYPos = workYPos + 20;
    userInfo.projects.forEach((project, index) => {
      doc.text(`Title: ${project.title}`, 10, projectYPos);
      doc.text(`Description: ${project.description}`, 10, projectYPos + 10);
      doc.text(`Technologies: ${project.technologies}`, 10, projectYPos + 20);
      projectYPos += 30;
    });

    // Profile Summary
    doc.text("Profile Summary:", 10, projectYPos + 10);
    doc.text(userInfo.profileSummary, 10, projectYPos + 20);

    // Save the PDF
    doc.save("resume.pdf");
  };

  return (
    <div>
      <h1>{userInfo.name}</h1>
      <p>Email: {userInfo.email}</p>
      <p>Phone: {userInfo.phone}</p>
      <p>LinkedIn: {userInfo.linkedin}</p>
      <p>GitHub: {userInfo.github}</p>

      <h2>Skills</h2>
      <ul>
        {userInfo.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Work Experience</h2>
      {userInfo.workExperience.map((exp, index) => (
        <div key={index}>
          <p>Company: {exp.company}</p>
          <p>Role: {exp.role}</p>
          <p>Duration: {exp.duration}</p>
          <p>Achievements: {exp.achievements}</p>
        </div>
      ))}

      <h2>Projects</h2>
      {userInfo.projects.map((project, index) => (
        <div key={index}>
          <p>Title: {project.title}</p>
          <p>Description: {project.description}</p>
          <p>Technologies: {project.technologies}</p>
        </div>
      ))}

      <h2>Profile Summary</h2>
      <p>{userInfo.profileSummary}</p>

      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default ResumePreview;
