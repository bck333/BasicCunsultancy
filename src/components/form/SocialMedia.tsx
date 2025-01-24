import React, { useContext, ChangeEvent } from "react";
// import FormButton from "./FormButton";
import { ResumeContext } from "../../pages/builder";

interface SocialMediaEntry {
  socialMedia: string;
  link: string;
}

interface ResumeData {
  socialMedia: SocialMediaEntry[];
}

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData | ((prevData: ResumeData) => ResumeData)) => void;
}

const SocialMedia: React.FC = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext) as unknown as ResumeContextType;

  const handleSocialMedia = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "link" ? value.replace("https://", "") : value;

    const updatedSocialMedia = [...resumeData.socialMedia];
    updatedSocialMedia[index][name as keyof SocialMediaEntry] = sanitizedValue;

    setResumeData((prevData) => ({
      ...prevData,
      socialMedia: updatedSocialMedia,
    }));
  };

  // const addSocialMedia = () => {
  //   setResumeData((prevData) => ({
  //     ...prevData,
  //     socialMedia: [...prevData.socialMedia, { socialMedia: "", link: "" }],
  //   }));
  // };

  // const removeSocialMedia = (index: number) => {
  //   setResumeData((prevData) => {
  //     const updatedSocialMedia = [...prevData.socialMedia];
  //     updatedSocialMedia.splice(index, 1);
  //     return { ...prevData, socialMedia: updatedSocialMedia };
  //   });
  // };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Social Media</h2>
      {resumeData.socialMedia.map((entry, index) => (
        <div key={index} className="flex-wrap-gap-2">
          <input
            type="text"
            placeholder="Social Media"
            name="socialMedia"
            className="other-input"
            value={entry.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className="other-input"
            value={entry.link}
            onChange={(e) => handleSocialMedia(e, index)}
          />
        </div>
      ))}
      {/* <FormButton
        size={resumeData.socialMedia.length}
        remove= {removeSocialMedia}
        add={addSocialMedia}
      /> */}
    </div>
  );
};

export default SocialMedia;
