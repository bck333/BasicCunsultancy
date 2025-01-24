import React, { useContext, ChangeEvent } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

interface ResumeContextType {
  resumeData: {
    [key: string]: string[];
  };
  setResumeData: (data: { [key: string]: string[] }) => void;
}

const Certification: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;
  const skillType = "certifications";
  const title = "Certifications";

  const handleSkills = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    skillType: string
  ) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeSkill = (index: number) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(index, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {resumeData[skillType].map((skill: string, index: number) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={title}
            name={title}
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkills(e, index, skillType)}
          />
        </div>
      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={() => removeSkill(resumeData[skillType].length - 1)} />
    </div>
  );
};

export default Certification;
