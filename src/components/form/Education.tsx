import React, { useContext, ChangeEvent } from "react";
import FormButton from "./FormButton";
import { ResumeContext } from "../../pages/builder";

interface EducationType {
  school: string;
  degree: string;
  startYear: string;
  endYear: string;
}

interface ResumeContextType {
  resumeData: {
    education: EducationType[];
    [key: string]: any; // Allow dynamic fields in the context
  };
  setResumeData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>; // Type for setState function
}

const Education: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;

  const handleEducation = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newEducation = [...resumeData.education];
    newEducation[index][name as keyof EducationType] = value;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { school: "", degree: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeEducation = (index: number) => {
    const newEducation = [...resumeData.education];
    newEducation.splice(index, 1);
    setResumeData({ ...resumeData, education: newEducation });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Education</h2>
      {resumeData.education.map((education, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder="School"
            name="school"
            className="w-full other-input"
            value={education.school}
            onChange={(e) => handleEducation(e, index)}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            className="w-full other-input"
            value={education.degree}
            onChange={(e) => handleEducation(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={education.startYear}
              onChange={(e) => handleEducation(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={education.endYear}
              onChange={(e) => handleEducation(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.education.length}
        add={addEducation}
        remove={() => removeEducation(resumeData.education.length - 1)}
      />
    </div>
  );
};

export default Education;
