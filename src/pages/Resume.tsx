// import Preview from '../components/preview/Preview';

// export function Resume() {
//     return (
//         <div>
//         </div>
//     )
// }
import { motion } from 'framer-motion';
import React, { useState, ChangeEvent } from 'react';
import { PlusCircle, MinusCircle, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

// Interfaces for types
interface PersonalInfo {
    name: string;
    title: string;
    phone: string;
    email: string;
    address: string;
}

interface WorkExperience {
    company: string;
    position: string;
    description: string;
    keyAchievements: string;
    startYear: string;
    endYear: string;
}

interface Skills {
    technical: string[];
    soft: string[];
    additional: string[];
}

interface Education {
    school: string;
    degree: string;
    startYear: string;
    endYear: string;
}

interface Language {
    name: string;
    // proficiency: string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    skills: Skills;
    certifications: string[];
    education: Education[];
    workExperience: WorkExperience[];
    languages: Language[];
    summary: string;
}

// Initial Data
const initialData: ResumeData = {
    personalInfo: {
        name: 'MARCUS HALL',
        title: 'Developer',
        phone: '+1-555-0100',
        email: 'beddylea@gmail.com',
        address: 'San Francisco, CA',
    },
    summary: 'A dedicated and results-driven developer with expertise in building scalable and efficient software solutions.',
    skills: {
        technical: ['JavaScript', 'Python'],
        soft: ['Collaboration', 'Problem-solving'],
        additional: ['Public Speaking', 'Writing'],
    },
    certifications: [
        'Certified Web Professional-Web Developer',
        'Java Development Certified Professional',
    ],
    education: [
        {
            school: 'New York University',
            degree: 'Bachelor of Computer Science',
            startYear: '2020',
            endYear: '2024',
        },
    ],
    workExperience: [
        {
            company: 'Torph TTC',
            position: 'Developer',
            description:
                'A global software company offering user interface UI development tools.',
            keyAchievements:
                'Created 10 web applications, led a team of 10, developed automation scripts.',
            startYear: '2023-02-16',
            endYear: '2023-02-21',
        },
    ],
    languages: [
        { name: 'English' },
        { name: 'Spanish' },
    ],
};

export function Resume() {
    const [data, setData] = useState<ResumeData>(initialData);

    const handleSummaryChange = (value: string) => {
        setData((prev) => ({
            ...prev,
            summary: value,
        }));
    };

    // Handlers for personal information
    const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
        setData((prev) => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value },
        }));
    };

    //
    const handleAddCertification = () => {
        setData((prev) => ({
            ...prev,
            certifications: [...prev.certifications, ''],
        }));
    };

    const handleCertificationChange = (index: number, value: string) => {
        const updatedCertifications = [...data.certifications];
        updatedCertifications[index] = value;
        setData((prev) => ({ ...prev, certifications: updatedCertifications }));
    };

    const handleRemoveCertification = (index: number) => {
        const updatedCertifications = data.certifications.filter((_, i) => i !== index);
        setData((prev) => ({ ...prev, certifications: updatedCertifications }));
    };
    // Handlers for education
    const handleEducationChange = (index: number, field: keyof Education, value: string) => {
        setData((prev) => ({
            ...prev,
            education: prev.education.map((edu, i) =>
                i === index ? { ...edu, [field]: value } : edu
            ),
        }));
    };

    const handleRemoveSkill = (category: keyof Skills, index: number) => {
        setData(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [category]: prev.skills[category].filter((_, i) => i !== index)
            }
        }));
    };

    const handleAddEducation = () => {
        setData((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                { school: '', degree: '', startYear: '', endYear: '' },
            ],
        }));
    };

    const handleRemoveEducation = (index: number) => {
        setData((prev) => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index),
        }));
    };

    const handleSkillChange = (category: keyof Skills, index: number, value: string) => {
        setData(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [category]: prev.skills[category].map((skill, i) => i === index ? value : skill)
            }
        }));
    };

    const handleAddSkill = (category: keyof Skills) => {
        setData(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [category]: [...prev.skills[category], '']
            }
        }));
    };
    //work
    const handleAddWorkExperience = () => {
        setData((prev) => ({
            ...prev,
            workExperience: [
                ...prev.workExperience,
                {
                    company: '',
                    position: '',
                    description: '',
                    keyAchievements: '',
                    startYear: '',
                    endYear: '',
                },
            ],
        }));
    };

    const handleWorkExperienceChange = (
        index: number,
        field: keyof WorkExperience,
        value: string
    ) => {
        const updatedWorkExperience = [...data.workExperience];
        updatedWorkExperience[index][field] = value;
        setData((prev) => ({ ...prev, workExperience: updatedWorkExperience }));
    };

    const handleRemoveWorkExperience = (index: number) => {
        const updatedWorkExperience = data.workExperience.filter((_, i) => i !== index);
        setData((prev) => ({ ...prev, workExperience: updatedWorkExperience }));
    };
    //lang
    const handleLanguageChange = (index: number, field: keyof Language, value: string) => {
        setData((prev) => ({
            ...prev,
            languages: prev.languages.map((lang, i) =>
                i === index ? { ...lang, [field]: value } : lang
            ),
        }));
    };

    const handleAddLanguage = () => {
        setData((prev) => ({
            ...prev,
            languages: [...prev.languages, { name: '', proficiency: '' }],
        }));
    };

    const handleRemoveLanguage = (index: number) => {
        setData((prev) => ({
            ...prev,
            languages: prev.languages.filter((_, i) => i !== index),
        }));
    };

    const exportToPDF = async () => {
        const resumeElement = document.getElementById('resume-preview');
        if (!resumeElement) return;

        const canvas = await html2canvas(resumeElement, {
            scale: 2,
            backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(`${data.personalInfo.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="relative overflow-hidden gradient-bgnope text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6 animate-slideDown">
                        Create Your Resume
                    </h1>
                    <p className="text-xl mb-8 animate-fadeIn max-w-2xl">
                    Build a professional resume effortlessly with our user-friendly platform. Customize every detail, highlight your skills, and stand out in your career journey!                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 p-6">
                <div className="flex-1 px-[1%] overflow-auto ">
                    <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                        {/* Personal Information Section */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Personal Information</h2>
                            <div className="grid gap-4">
                                {(Object.keys(data.personalInfo) as Array<keyof PersonalInfo>).map((field) => (
                                    <input
                                        key={field}
                                        className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                        value={data.personalInfo[field]}
                                        onChange={(e) => handlePersonalInfoChange(field, e.target.value)}
                                    />
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Summary</h2>
                            <textarea
                                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                placeholder="Write a brief summary about yourself..."
                                value={data.summary}
                                onChange={(e) => handleSummaryChange(e.target.value)}
                            />
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Skills</h2>
                            {(Object.keys(data.skills) as Array<keyof Skills>).map(category => (
                                <div key={category} className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2 capitalize">{category} Skills</h3>
                                    {data.skills[category].map((skill, index) => (
                                        <div key={index} className="flex items-center gap-2 mb-2">
                                            <input
                                                className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                                value={skill}
                                                onChange={(e) => handleSkillChange(category, index, e.target.value)}
                                            />
                                            <button
                                                onClick={() => handleRemoveSkill(category, index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <MinusCircle className="h-5 w-5" />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => handleAddSkill(category)}
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                    >
                                        <PlusCircle className="h-5 w-5" />
                                        Add {category} Skill
                                    </button>
                                </div>
                            ))}
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Work Experience</h2>
                            <div className="space-y-4">
                                {data.workExperience.map((experience, index) => (
                                    <div key={index} className="border p-4 rounded space-y-2">
                                        <input
                                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="Company Name"
                                            value={experience.company}
                                            onChange={(e) =>
                                                handleWorkExperienceChange(index, 'company', e.target.value)
                                            }
                                        />
                                        <input
                                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="Position"
                                            value={experience.position}
                                            onChange={(e) =>
                                                handleWorkExperienceChange(index, 'position', e.target.value)
                                            }
                                        />
                                        <textarea
                                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="Description"
                                            value={experience.description}
                                            onChange={(e) =>
                                                handleWorkExperienceChange(index, 'description', e.target.value)
                                            }
                                        />
                                        <textarea
                                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="Key Achievements"
                                            value={experience.keyAchievements}
                                            onChange={(e) =>
                                                handleWorkExperienceChange(index, 'keyAchievements', e.target.value)
                                            }
                                        />
                                        <div className="flex gap-4">
                                            <input
                                                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                                placeholder="Start Year"
                                                value={experience.startYear}
                                                onChange={(e) =>
                                                    handleWorkExperienceChange(index, 'startYear', e.target.value)
                                                }
                                            />
                                            <input
                                                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                                placeholder="End Year"
                                                value={experience.endYear}
                                                onChange={(e) =>
                                                    handleWorkExperienceChange(index, 'endYear', e.target.value)
                                                }
                                            />
                                        </div>
                                        <MinusCircle
                                            className="h-6 w-6 text-red-500 cursor-pointer"
                                            onClick={() => handleRemoveWorkExperience(index)}
                                        />
                                    </div>
                                ))}
                                <button
                                    onClick={handleAddWorkExperience}
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                                >
                                    <PlusCircle className="h-5 w-5" />
                                    Add Work Experience
                                </button>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Certifications</h2>
                            <div className="space-y-2">
                                {data.certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <input
                                            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder={`Certification ${index + 1}`}
                                            value={cert}
                                            onChange={(e) => handleCertificationChange(index, e.target.value)}
                                        />
                                        <MinusCircle
                                            className="h-5 w-5 text-red-500 cursor-pointer"
                                            onClick={() => handleRemoveCertification(index)}
                                        />
                                    </div>
                                ))}
                                <button
                                    onClick={handleAddCertification}
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                                >
                                    <PlusCircle className="h-5 w-5" />
                                    Add Certification
                                </button>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Languages</h2>
                            {data.languages.map((lang, index) => (
                                <div key={index} className="mb-4">
                                    <div className="grid gap-2 mb-2">
                                        <input
                                            className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="Language Name"
                                            value={lang.name}
                                            onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                                        />
                                        {/* <input
                    className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                    placeholder="Proficiency (e.g., Native, Intermediate)"
                    value={lang.proficiency}
                    onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                  /> */}
                                    </div>
                                    <button
                                        onClick={() => handleRemoveLanguage(index)}
                                        className="text-red-500 hover:text-red-700 flex items-center gap-2"
                                    >
                                        <MinusCircle className="h-5 w-5" />
                                        Remove Language
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={handleAddLanguage}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                            >
                                <PlusCircle className="h-5 w-5" />
                                Add Language
                            </button>
                        </section>

                        {/* Education Section */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-600">Education</h2>
                            {data.education.map((edu, index) => (
                                <div key={index} className="mb-4">
                                    <div className="grid gap-2 mb-2">
                                        <input
                                            className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="School Name"
                                            value={edu.school}
                                            onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                                        />
                                        <input
                                            className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="Degree"
                                            value={edu.degree}
                                            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                        />
                                        <input
                                            className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="Start Year"
                                            value={edu.startYear}
                                            onChange={(e) => handleEducationChange(index, 'startYear', e.target.value)}
                                        />
                                        <input
                                            className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                            placeholder="End Year"
                                            value={edu.endYear}
                                            onChange={(e) => handleEducationChange(index, 'endYear', e.target.value)}
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleRemoveEducation(index)}
                                        className="text-red-500 hover:text-red-700 flex items-center gap-2"
                                    >
                                        <MinusCircle className="h-5 w-5" />
                                        Remove Education
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={handleAddEducation}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                            >
                                <PlusCircle className="h-5 w-5" />
                                Add Education
                            </button>
                        </section>

                    </div>
                </div>

                {/* Resume Preview */}
                <div className="flex-1 px-[1%] p-6 bg-gray">
                    <div className="flex mb-6 bg-white p-6 rounded-lg shadow-lg">
                        <button
                            onClick={exportToPDF}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            <Download className="h-5 w-5" />
                            Download
                        </button>
                    </div>
                    <div id="resume-preview" className="space-y-6 bg-white p-8 rounded-lg shadow-lg" >
                        <div className="text-center border-b pb-4">
                            <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
                            <p className="text-xl text-gray-600">{data.personalInfo.title}</p>
                            <div className="text-gray-600 mt-2">
                                <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
                                <p>{data.personalInfo.address}</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">Summary</h2>
                            <p className="text-gray-700">{data.summary}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">Skills</h2>
                            {Object.entries(data.skills).map(([category, skills]) => (
                                <div key={category} className="mb-4">
                                    <h3 className="font-semibold capitalize">{category} Skills</h3>
                                    <p className="text-gray-700">{skills.join(', ')}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-2">Education</h2>
                            {data.education.map((edu, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="font-semibold">{edu.school}</h3>
                                    <p className="text-gray-700">
                                        {edu.degree} ({edu.startYear} - {edu.endYear})
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-2">Work Experience</h2>
                            <ul className="space-y-4">
                                {data.workExperience.map((experience, index) => (
                                    <li key={index} className="border p-4 rounded space-y-1">
                                        <h3 className="font-bold text-lg">{experience.company}</h3>
                                        <p className="italic">{experience.position}</p>
                                        <p>{experience.description}</p>
                                        <p>
                                            <strong>Key Achievements:</strong> {experience.keyAchievements}
                                        </p>
                                        <p>
                                            <span className="text-gray-600">
                                                {experience.startYear} - {experience.endYear}
                                            </span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-2">Certifications</h2>
                            <ul className="list-disc pl-5 text-gray-700">
                                {data.certifications.map((cert, index) => (
                                    <li key={index}>{cert || 'Certification not specified'}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-2">Languages</h2>
                            {data.languages.map((lang, index) => (
                                <p className="text-gray-700">{lang.name}</p>

                                //  <div key={index} className="mb-4">
                                //  {/* <h3 className="font-semibold capitalize">{lang.name}</h3> */}
                                //  <p className="text-gray-700">{lang.name}</p>
                                //   </div>
                                // <div key={index} className="mb-2">
                                //   <h3 className="font-semibold">{lang.name}</h3>
                                //   {/* <p className="text-gray-700">{lang.proficiency}</p> */}
                                // </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

// import React, { useState, ChangeEvent } from 'react';
// import { PlusCircle, MinusCircle, Upload, Download } from 'lucide-react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// interface PersonalInfo {
//   name: string;
//   title: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Skills {
//   technical: string[];
//   soft: string[];
//   additional: string[];
// }

// interface ResumeData {
//   personalInfo: PersonalInfo;
//   skills: Skills;
//   certifications: string[];
// }

// const initialData: ResumeData = {
//   personalInfo: {
//     name: 'MARCUS HALL',
//     title: 'Developer',
//     phone: '+1-555-0100',
//     email: 'beddylea@gmail.com',
//     address: 'San Francisco, CA'
//   },
//   skills: {
//     technical: ['JavaScript', 'Python'],
//     soft: ['Collaboration', 'Problem-solving'],
//     additional: ['Public Speaking', 'Writing']
//   },
//   certifications: [
//     'Certified Web Professional-Web Developer',
//     'Java Development Certified Professional'
//   ]
// };

// export function Resume() {
//     const [data, setData] = useState<ResumeData>(initialData);

//   const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
//     setData(prev => ({
//       ...prev,
//       personalInfo: { ...prev.personalInfo, [field]: value }
//     }));
//   };

//   const handleSkillChange = (category: keyof Skills, index: number, value: string) => {
//     setData(prev => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [category]: prev.skills[category].map((skill, i) => i === index ? value : skill)
//       }
//     }));
//   };

//   const handleAddSkill = (category: keyof Skills) => {
//     setData(prev => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [category]: [...prev.skills[category], '']
//       }
//     }));
//   };

//   const handleRemoveSkill = (category: keyof Skills, index: number) => {
//     setData(prev => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [category]: prev.skills[category].filter((_, i) => i !== index)
//       }
//     }));
//   };

//   const exportData = () => {
//     const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `resume_${data.personalInfo.name.toLowerCase().replace(/\s+/g, '_')}.json`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   const handleImport = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       try {
//         const result = e.target?.result;
//         if (typeof result === 'string') {
//           const importedData = JSON.parse(result) as ResumeData;
//           setData(importedData);
//         }
//       } catch (error) {
//         console.error('Failed to parse resume data:', error);
//       }
//     };
//     reader.readAsText(file);
//   };

//   const exportToPDF = async () => {
//     const resumeElement = document.getElementById('resume-preview');
//     if (!resumeElement) return;

//     const canvas = await html2canvas(resumeElement, {
//       scale: 2,
//       backgroundColor: '#ffffff',
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'px',
//       format: [canvas.width, canvas.height]
//     });

//     pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
//     pdf.save(`${data.personalInfo.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <div className="flex-1 p-6 overflow-auto">
//         <div className="flex gap-4 mb-6">
//           <button onClick={exportToPDF} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//             <Download className="h-5 w-5" />
//             Download
//           </button>
//         </div>

//         <div className="space-y-6">
//           <section>
//             <h2 className="text-xl font-bold mb-4 text-blue-600">Personal Information</h2>
//             <div className="grid gap-4">
//               {(Object.keys(data.personalInfo) as Array<keyof PersonalInfo>).map(field => (
//                 <input
//                   key={field}
//                   className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
//                   placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                   value={data.personalInfo[field]}
//                   onChange={(e) => handlePersonalInfoChange(field, e.target.value)}
//                 />
//               ))}
//             </div>
//           </section>

//           <section>
//             <h2 className="text-xl font-bold mb-4 text-blue-600">Skills</h2>
//             {(Object.keys(data.skills) as Array<keyof Skills>).map(category => (
//               <div key={category} className="mb-4">
//                 <h3 className="text-lg font-semibold mb-2 capitalize">{category} Skills</h3>
//                 {data.skills[category].map((skill, index) => (
//                   <div key={index} className="flex items-center gap-2 mb-2">
//                     <input
//                       className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
//                       value={skill}
//                       onChange={(e) => handleSkillChange(category, index, e.target.value)}
//                     />
//                     <button
//                       onClick={() => handleRemoveSkill(category, index)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <MinusCircle className="h-5 w-5" />
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   onClick={() => handleAddSkill(category)}
//                   className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
//                 >
//                   <PlusCircle className="h-5 w-5" />
//                   Add {category} Skill
//                 </button>
//               </div>
//             ))}
//           </section>
//         </div>
//       </div>

//       <div id="resume-preview" className="flex-1 p-6 bg-white">
//         <div className="space-y-6">
//           <div className="text-center border-b pb-4">
//             <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
//             <p className="text-xl text-gray-600">{data.personalInfo.title}</p>
//             <div className="text-gray-600 mt-2">
//               <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
//               <p>{data.personalInfo.address}</p>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-bold mb-2">Skills</h2>
//             {Object.entries(data.skills).map(([category, skills]) => (
//               <div key={category} className="mb-4">
//                 <h3 className="font-semibold capitalize">{category} Skills</h3>
//                 <p className="text-gray-700">{skills.join(', ')}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState, ChangeEvent } from 'react';
// // import { PlusCircle, MinusCircle, Download } from 'react-feather';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';

// type PersonalInfo = {
//   name: string;
//   title: string;
//   phone: string;
//   email: string;
//   address: string;
// };

// type SkillCategory = {
//   title: string;
//   skills: string[];
// };

// type Education = {
//   school: string;
//   degree: string;
//   startYear: string;
//   endYear: string;
// };

// type WorkExperience = {
//   company: string;
//   position: string;
//   description: string;
//   keyAchievements: string;
//   startYear: string;
//   endYear: string;
// };

// type SocialMedia = {
//   socialMedia: string;
//   link: string;
// };

// type ResumeData = {
//   personalInfo: PersonalInfo;
//   skills: SkillCategory[];
//   socialMedia: SocialMedia[];
//   education: Education[];
//   workExperience: WorkExperience[];
//   summary: string;
// };

// const initialData: ResumeData = {
//   personalInfo: {
//     name: 'MARCUS HALL',
//     title: 'Developer',
//     phone: '+1-555-0100',
//     email: 'beddylea@gmail.com',
//     address: 'San Francisco, CA',
//   },
//   skills: [
//     { title: 'Technical Skills', skills: ['JavaScript', 'Python'] },
//     { title: 'Soft Skills', skills: ['Collaboration', 'Problem-solving'] },
//   ],
//   socialMedia: [
//     { socialMedia: 'Github', link: 'github.com/bedivere-lea' },
//     { socialMedia: 'LinkedIn', link: 'linkedin.com/in/bedivere-lea' },
//     { socialMedia: 'Website', link: 'bedivere-lea.github.io' },
//   ],
//   education: [
//     {
//       school: 'New York University',
//       degree: 'Bachelor of Computer Science',
//       startYear: '2020-08-20',
//       endYear: '2024-07-01',
//     },
//   ],
//   workExperience: [
//     {
//       company: 'Torph TTC',
//       position: 'Developer',
//       description:
//         'A global software company offering user interface UI development tools.',
//       keyAchievements:
//         'Created 10 web applications, led a team of 10, developed automation scripts.',
//       startYear: '2023-02-16',
//       endYear: '2023-02-21',
//     },
//   ],
//   summary:
//     'Resourceful Developer with 11 years of experience in designing and developing user interfaces.',
// };

// export function Resume() {
//   const [data, setData] = useState<ResumeData>(initialData);

//   const handleChange = (field: keyof PersonalInfo, value: string) => {
//     setData((prev) => ({
//       ...prev,
//       personalInfo: { ...prev.personalInfo, [field]: value },
//     }));
//   };

//   const handleSkillChange = (categoryIndex: number, skillIndex: number, value: string) => {
//     setData((prev) => {
//       const updatedSkills = [...prev.skills];
//       updatedSkills[categoryIndex].skills[skillIndex] = value;
//       return { ...prev, skills: updatedSkills };
//     });
//   };

//   const addSkill = (categoryIndex: number) => {
//     setData((prev) => {
//       const updatedSkills = [...prev.skills];
//       updatedSkills[categoryIndex].skills.push('');
//       return { ...prev, skills: updatedSkills };
//     });
//   };

//   const removeSkill = (categoryIndex: number, skillIndex: number) => {
//     setData((prev) => {
//       const updatedSkills = [...prev.skills];
//       updatedSkills[categoryIndex].skills.splice(skillIndex, 1);
//       return { ...prev, skills: updatedSkills };
//     });
//   };

//   const handleAddSection = (key: keyof ResumeData, newItem: any) => {
//     setData((prev) => ({
//       ...prev,
//       [key]: [...(prev[key] as any[]), newItem],
//     }));
//   };

//   const handleRemoveSection = (key: keyof ResumeData, index: number) => {
//     setData((prev) => ({
//       ...prev,
//       [key]: (prev[key] as any[]).filter((_, i) => i !== index),
//     }));
//   };

//   const exportToPDF = async () => {
//     const resumeElement = document.getElementById('resume-preview');
//     if (!resumeElement) return;

//     const canvas = await html2canvas(resumeElement, { scale: 2 });
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'px',
//       format: [canvas.width, canvas.height],
//     });

//     pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
//     pdf.save(`${data.personalInfo.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* Form */}
//       <div className="flex-1 p-6">
//         {/* Personal Info */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Personal Information</h2>
//           {Object.keys(data.personalInfo).map((field) => (
//             <input
//               key={field}
//               className="p-2 border rounded w-full mb-2"
//               value={data.personalInfo[field as keyof PersonalInfo]}
//               onChange={(e) =>
//                 handleChange(field as keyof PersonalInfo, e.target.value)
//               }
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//             />
//           ))}
//         </section>

//         {/* Skills */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Skills</h2>
//           {data.skills.map((category, categoryIndex) => (
//             <div key={categoryIndex}>
//               <h3 className="font-semibold">{category.title}</h3>
//               {category.skills.map((skill, skillIndex) => (
//                 <div className="flex items-center gap-2 mb-2" key={skillIndex}>
//                   <input
//                     className="flex-1 p-2 border rounded"
//                     value={skill}
//                     onChange={(e) =>
//                       handleSkillChange(categoryIndex, skillIndex, e.target.value)
//                     }
//                   />
//                   <button
//                     onClick={() => removeSkill(categoryIndex, skillIndex)}
//                     className="text-red-500"
//                   >
//                     {/* <MinusCircle /> */}
//                   </button>
//                 </div>
//               ))}
//               <button
//                 onClick={() => addSkill(categoryIndex)}
//                 className="text-blue-500"
//               >
//                 {/* <PlusCircle /> */}
//               </button>
//             </div>
//           ))}
//         </section>

//         {/* Social Media */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">Social Media</h2>
//           {data.socialMedia.map((social, index) => (
//             <div key={index} className="flex items-center gap-2 mb-2">
//               <input
//                 className="flex-1 p-2 border rounded"
//                 value={social.socialMedia}
//                 placeholder="Platform"
//                 onChange={(e) =>
//                   handleAddSection('socialMedia', {
//                     ...social,
//                     socialMedia: e.target.value,
//                   })
//                 }
//               />
//               <input
//                 className="flex-1 p-2 border rounded"
//                 value={social.link}
//                 placeholder="Link"
//               />
//             </div>
//           ))}
//         </section>

//         {/* Education and Work Experience */}
//         <section> {/* Add similar sections for WorkExperience and Education */}</section>
//       </div>

//       {/* Resume Preview */}
//       <div id="resume-preview" className="flex-1 p-6 bg-gray-100 rounded-lg">
//         <h1>{data.personalInfo.name}</h1>
//       </div>
//     </div>
//   );
// }
// 