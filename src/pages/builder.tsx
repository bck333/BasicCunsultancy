// import React, { useState, createContext, Suspense } from "react";
// import Language from "../components/form/Language";
// // import Meta from "../components/meta/Meta"; // Uncomment if using Meta
// import FormCP from "../components/form/FormCP";
// import LoadUnload from "../components/form/LoadUnload";
// import Preview from "../components/preview/Preview";
// import DefaultResumeData from "../components/utility/DefaultResumeData";
// import SocialMedia from "../components/form/SocialMedia";
// import WorkExperience from "../components/form/WorkExperience";
// import Skill from "../components/form/Skill";
// import PersonalInformation from "../components/form/PersonalInformation";
// import Summary from "../components/form/Summary";
// import Projects from "../components/form/Projects";
// import Education from "../components/form/Education";
// import Certification from "../components/form/certification";

// // Dynamically import the Print component using React.lazy
// const Print = React.lazy(() => import("../components/utility/WinPrint"));

// // Define types for the Resume data to ensure type safety in the context and state
// interface ResumeData {
//   profilePicture?: string;
//   name: string;
//   email: string;
//   phone: string;
//   skills: Array<{ title: string }>;
//   [key: string]: any; // Optional property for other dynamic fields
// }

// // Create a context with a type-safe default value
// // const ResumeContext = createContext<{
// //   resumeData: ResumeData;
// //   setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
// //   handleProfilePicture: (e: React.ChangeEvent<HTMLInputElement>) => void;
// //   handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
// // }>( {
// //   // // resumeData: DefaultResumeData,
// //   // setResumeData: () => {},
// //   // handleProfilePicture: () => {},
// //   // handleChange: () => {},
// // });

// const Builder: React.FC = () => {
//   // State to hold the resume data, typed as ResumeData
//   // const [resumeData, setResumeData] = useState<ResumeData>({DefaultResumeData});
//   const [formClose, setFormClose] = useState<boolean>(false);

//   // Handle profile picture upload
//   const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         // setResumeData({ ...resumeData, profilePicture: event.target?.result as string });
//       };
//       reader.readAsDataURL(file);
//     } else {
//       console.error("Invalid file type");
//     }
//   };

//   // Handle form data changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     // setResumeData({ ...resumeData, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <ResumeContext.Provider
//         value={{
//           resumeData,
//           setResumeData,
//           handleProfilePicture,
//           handleChange,
//         }}
//       >
//         {/* Uncomment Meta if needed */}
//         {/* <Meta 
//           title="ATSResume | Get hired with an ATS-optimized resume"
//           description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes."
//           keywords="ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System"
//         /> */}
        
//         <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
//           {!formClose && (
//             <form className="p-4 bg-fuchsia-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
//               <LoadUnload />
//               <PersonalInformation />
//               <SocialMedia />
//               <Summary />
//               <Education />
//               <WorkExperience />
//               <Projects />
//               {resumeData.skills.map((skill, index) => (
//                 <Skill title={skill.title} key={index} />
//               ))}
//               <Language />
//               <Certification />
//             </form>
//           )}
//           <Preview />
//         </div>
//         <FormCP formClose={formClose} setFormClose={setFormClose} />

//         {/* Use Suspense to handle the lazy-loaded component */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Print />
//         </Suspense>
//       </ResumeContext.Provider>
//     </>
//   );
// };

// export { ResumeContext };
// export default Builder;
