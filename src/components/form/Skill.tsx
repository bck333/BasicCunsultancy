import React, { useContext, ChangeEvent } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

interface SkillType {
  title: string;
  skills: string[];
}

interface ResumeData {
  skills: SkillType[];
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData | ((prevData: ResumeData) => ResumeData)) => void;
}

interface SkillProps {
  title: string;
}

const Skill: React.FC<SkillProps> = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;

  const handleSkill = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    title: string
  ) => {
    const skillType = resumeData.skills.find((skill) => skill.title === title);
    if (!skillType) return;

    const newSkills = [...skillType.skills];
    newSkills[index] = e.target.value;

    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const addSkill = (title: string) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find((skill) => skill.title === title);
      if (!skillType) return prevData;

      const newSkills = [...skillType.skills, ""];
      return {
        ...prevData,
        skills: prevData.skills.map((skill) =>
          skill.title === title ? { ...skill, skills: newSkills } : skill
        ),
      };
    });
  };

  const removeSkill = (title: string) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find((skill) => skill.title === title);
      if (!skillType || skillType.skills.length === 0) return prevData;

      const newSkills = skillType.skills.slice(0, -1);
      return {
        ...prevData,
        skills: prevData.skills.map((skill) =>
          skill.title === title ? { ...skill, skills: newSkills } : skill
        ),
      };
    });
  };

  const skillType = resumeData.skills.find((skill) => skill.title === title);

  if (!skillType) {
    return <p>No skills available for this category.</p>;
  }

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {skillType.skills.map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={title}
            name={title}
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkill(e, index, title)}
          />
        </div>
      ))}
      <FormButton
        size={skillType.skills.length}
        add={() => addSkill(title)}
        remove={() => removeSkill(title)}
      />
    </div>
  );
};

export default Skill;
