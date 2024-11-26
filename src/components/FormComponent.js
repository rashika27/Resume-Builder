import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    education: "",
    workExperience: [{ company: "", role: "", duration: "", achievements: "" }],
    skills: [],
    projects: [{ title: "", description: "", technologies: "" }],
    profileSummary: "",
  });

  const [otherSkill, setOtherSkill] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const { options } = e.target;
    const selectedSkills = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setUserData((prevData) => ({
      ...prevData,
      skills: selectedSkills,
    }));
  };

  const handleOtherSkillChange = (e) => {
    setOtherSkill(e.target.value);
    setUserData((prevData) => ({
      ...prevData,
      skills: prevData.skills.includes("Other")
        ? [...prevData.skills.filter((skill) => skill !== "Other"), e.target.value]
        : [...prevData.skills],
    }));
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...userData.workExperience];
    updatedWorkExperience[index][name] = value;
    setUserData((prevData) => ({
      ...prevData,
      workExperience: updatedWorkExperience,
    }));
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...userData.projects];
    updatedProjects[index][name] = value;
    setUserData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const handleAddWorkExperience = () => {
    setUserData((prevData) => ({
      ...prevData,
      workExperience: [
        ...prevData.workExperience,
        { company: "", role: "", duration: "", achievements: "" },
      ],
    }));
  };

  const handleAddProject = () => {
    setUserData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        { title: "", description: "", technologies: "" },
      ],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userData.name) newErrors.name = "Name is required.";
    if (!userData.email) newErrors.email = "Email is required.";
    if (!userData.phone) newErrors.phone = "Phone number is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      dispatch(setUserInfo(userData));
      navigate("/resume-preview");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={userData.name}
        onChange={handleInputChange}
      />
      {errors.name && <span>{errors.name}</span>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleInputChange}
      />
      {errors.email && <span>{errors.email}</span>}
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={userData.phone}
        onChange={handleInputChange}
      />
      {errors.phone && <span>{errors.phone}</span>}
      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={userData.linkedin}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        value={userData.github}
        onChange={handleInputChange}
      />

      <h2>Skills</h2>
      <select multiple onChange={handleSkillChange}>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="CSS">CSS</option>
        <option value="Other">Other</option>
      </select>
      {userData.skills.includes("Other") && (
        <input
          type="text"
          placeholder="Enter your custom skill"
          value={otherSkill}
          onChange={handleOtherSkillChange}
        />
      )}

      <h2>Work Experience</h2>
      {userData.workExperience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
          <input
            type="text"
            name="achievements"
            placeholder="Achievements"
            value={exp.achievements}
            onChange={(e) => handleWorkExperienceChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddWorkExperience}>
        Add More Work Experience
      </button>

      <h2>Projects</h2>
      {userData.projects.map((project, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <input
            type="text"
            name="technologies"
            placeholder="Technologies Used"
            value={project.technologies}
            onChange={(e) => handleProjectChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddProject}>
        Add More Projects
      </button>

      <h2>Profile Summary</h2>
      <textarea
        name="profileSummary"
        placeholder="Write a brief summary about yourself"
        value={userData.profileSummary}
        onChange={handleInputChange}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
