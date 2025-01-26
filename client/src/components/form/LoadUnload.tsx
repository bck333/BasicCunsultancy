import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import React, { useContext, ChangeEvent } from "react";
import { ResumeContext } from "../../pages/builder";

interface ResumeData {
  name: string;
  [key: string]: any;
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

const LoadUnload: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;

  // Load backup resume data
  const handleLoad = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          try {
            const parsedData = JSON.parse(e.target.result as string);
            setResumeData(parsedData);
          } catch (error) {
            console.error("Invalid JSON file");
          }
        }
      };
      reader.readAsText(file);
    }
  };

  // Download resume data
  const handleDownload = (
    data: ResumeData,
    filename: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up object URL
  };

  return (
    <div className="flex flex-wrap gap-4 mb-2 justify-center">
      <div className="inline-flex flex-row items-center gap-2">
        <h2 className="text-[1.2rem] text-white">Load Data</h2>
        <label className="p-2 text-white bg-fuchsia-700 rounded cursor-pointer">
          <FaCloudUploadAlt className="text-[1.2rem] text-white" />
          <input
            aria-label="Load Data"
            type="file"
            className="hidden"
            onChange={handleLoad}
            accept=".json"
          />
        </label>
      </div>
      <div className="inline-flex flex-row items-center gap-2">
        <h2 className="text-[1.2rem] text-white">Save Data</h2>
        <button
          aria-label="Save Data"
          className="p-2 text-white bg-fuchsia-700 rounded"
          onClick={(event) =>
            handleDownload(resumeData, `${resumeData.name || "resume"} by ATSResume.json`, event)
          }
        >
          <FaCloudDownloadAlt className="text-[1.2rem] text-white" />
        </button>
      </div>
    </div>
  );
};

export default LoadUnload;
