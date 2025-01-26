import React, { useContext, ChangeEvent } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

interface ResumeContextType {
  resumeData: {
    languages: string[];
    [key: string]: any;
  };
  setResumeData: (data: { [key: string]: any }) => void;
}

const Language: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;
  const skillType = "languages";
  const title = "Languages";
  const placeholder = "Language";

  const handleSkills = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      [skillType]: [...resumeData[skillType], ""],
    });
  };

  const removeSkill = () => {
    const newSkills = [...resumeData[skillType]];
    newSkills.pop();
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {resumeData[skillType].map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={placeholder}
            name="skill"
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkills(e, index)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData[skillType].length}
        add={addSkill}
        remove={removeSkill}
      />
    </div>
  );
};

export default Language;
