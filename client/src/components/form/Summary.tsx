import React, { useContext, ChangeEvent } from "react";
import { ResumeContext } from "../../pages/builder";

interface ResumeData {
  summary: string;
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData | ((prevData: ResumeData) => ResumeData)) => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const Summary: React.FC = () => {
  const { resumeData, handleChange } = useContext(ResumeContext) as unknown as ResumeContextType;

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Summary</h2>
      <div className="grid-4">
        <textarea
          placeholder="Summary"
          name="summary"
          className="w-full other-input h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength={500}
        />
      </div>
    </div>
  );
};

export default Summary;
