import React, { useContext, ChangeEvent } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

interface Project {
  title: string;
  link: string;
  description: string;
  keyAchievements: string;
  startYear: string;
  endYear: string;
}

interface ResumeData {
  projects: Project[];
  name?: string;
  position?: string;
  contactInformation?: string;
  email?: string;
  address?: string;
  profileImage?: File;
  [key: string]: any; // Allows for additional properties
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
  // Include other handlers if necessary
}

const Projects: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;

  // Handler for input and textarea changes
  const handleProjects = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newProjects = [...resumeData.projects];
    
    // Ensure the project exists at the specified index
    if (newProjects[index]) {
      // Type assertion to ensure 'name' corresponds to Project keys
      (newProjects[index] as any)[name] = value;
      setResumeData({ ...resumeData, projects: newProjects });
    }
  };

  // Add a new project with default empty values
  const addProjects = () => {
    const newProject: Project = {
      title: "",
      link: "",
      description: "",
      keyAchievements: "",
      startYear: "",
      endYear: "",
    };
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, newProject],
    });
  };

  // Remove a project by its index
  const removeProjects = (index: number) => {
    const newProjects = [...resumeData.projects];
    if (index >= 0 && index < newProjects.length) {
      newProjects.splice(index, 1);
      setResumeData({ ...resumeData, projects: newProjects });
    }
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder="Project Name"
            name="title"
            className="w-full other-input"
            value={project.title}
            onChange={(e) => handleProjects(e, index)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className="w-full other-input"
            value={project.link}
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            placeholder="Description"
            name="description"
            className="w-full other-input h-32"
            value={project.description}
            maxLength={250}
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            placeholder="Key Achievements"
            name="keyAchievements"
            className="w-full other-input h-40"
            value={project.keyAchievements}
            onChange={(e) => handleProjects(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.projects.length}
        add={addProjects}
        remove={() => removeProjects(resumeData.projects.length - 1)}
      />
    </div>
  );
};

export default Projects;
