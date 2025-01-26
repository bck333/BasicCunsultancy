import React, { useContext, ChangeEvent } from "react";
import { ResumeContext } from "../../pages/builder";
// import FormButton from "./FormButton";

interface WorkExperience {
  company: string;
  position: string;
  description: string;
  keyAchievements: string;
  startYear: string;
  endYear: string;
}

interface ResumeData {
  workExperience: WorkExperience[];
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData | ((prevData: ResumeData) => ResumeData)) => void;
}

const WorkExperience: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;

  const handleWorkExperience = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const newWorkExperience = [...resumeData.workExperience];
    newWorkExperience[index][e.target.name as keyof WorkExperience] = e.target.value;
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
  };

  // const addWorkExperience = () => {
  //   setResumeData({
  //     ...resumeData,
  //     workExperience: [
  //       ...resumeData.workExperience,
  //       {
  //         company: "",
  //         position: "",
  //         description: "",
  //         keyAchievements: "",
  //         startYear: "",
  //         endYear: "",
  //       },
  //     ],
  //   });
  // };

  // const removeWorkExperience = (index: number) => {
  //   const newWorkExperience = [...resumeData.workExperience];
  //   newWorkExperience[index] = newWorkExperience[newWorkExperience.length - 1];
  //   newWorkExperience.pop();
  //   setResumeData({ ...resumeData, workExperience: newWorkExperience });
  // };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Work Experience</h2>
      {resumeData.workExperience.map((workExperience, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder="Company"
            name="company"
            className="w-full other-input"
            value={workExperience.company}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <input
            type="text"
            placeholder="Job Title"
            name="position"
            className="w-full other-input"
            value={workExperience.position}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <textarea
            placeholder="Description"
            name="description"
            className="w-full other-input h-32"
            value={workExperience.description}
            maxLength={250}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <textarea
            placeholder="Key Achievements"
            name="keyAchievements"
            className="w-full other-input h-40"
            value={workExperience.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={workExperience.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={workExperience.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div>
        </div>
      ))}
      {/* <FormButton
        size={resumeData.workExperience.length}
        add={addWorkExperience}
        remove={removeWorkExperience}
      /> */}
    </div>
  );
};

export default WorkExperience;
